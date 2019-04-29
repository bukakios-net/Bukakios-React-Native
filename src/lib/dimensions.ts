import React from 'react';
import { Dimensions, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const pixelDensity = PixelRatio.get();
const adjustedWidth = screenWidth * pixelDensity;
const adjustedHeight = screenHeight * pixelDensity;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                  along with the percentage symbol (%).
 * @return {number} The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = (widthPercent: string | number): number => {
    // Parse string percentage input and convert it to number.
    const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

    // const useWidth = !isTablet() ? Math.min(screenWidth, screenHeight) : screenWidth;

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                  along with the percentage symbol (%).
 * @return {number} The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = (heightPercent: string | number): number => {
    // Parse string percentage input and convert it to number.
    const elemHeight =
        typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);

    // const useHeight = !isTablet() ? Math.max(screenWidth, screenHeight) : screenHeight;

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/**
 * Event listener function that detects orientation change (every time it occurs) and triggers
 * screen rerendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * @param {object} that Screen's class component this variable. The function needs it to
 *                      invoke setState method and trigger screen rerender (this.setState()).
 */
const listenOrientationChange = (comp: React.Component<any, any>): void => {
    Dimensions.addEventListener('change', (newDimensions) => {
        if (isTablet()) {
            // Retrieve and save new dimensions
            screenWidth = newDimensions.window.width;
            screenHeight = newDimensions.window.height;

            // Trigger screen's rerender with a state update of the orientation variable
            comp.setState({
                orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
            });
        }
    });
};

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
const removeOrientationListener = (): void => {
    Dimensions.removeEventListener('change', () => {});
};

const isTablet = (): boolean => {
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    } else if (pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)) {
        return true;
    }

    return false;
};

export {
    widthPercentageToDP,
    heightPercentageToDP,
    listenOrientationChange,
    removeOrientationListener,
    isTablet,
};
