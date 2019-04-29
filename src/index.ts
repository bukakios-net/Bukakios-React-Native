import { Navigation } from 'react-native-navigation';
// import { persistStore as persistStoreRaw } from 'redux-persist';
import registerScreens from './registerScreens';
// import { configureStore, iconsLoaded } from './utils';
import { Alert } from 'react-native';
import { main } from './navigationControl';

/**
 * Wait till our store is persisted
 * @param {store} storeToPersist - The redux store to persist
 * @returns {Promise} - Promise that resolves when the store is rehydrated
 */
// const persistStore = (storeToPersist: any) => {
//     return new Promise((resolve: any) => {
//         persistStoreRaw(storeToPersist, undefined, () => {
//             resolve();
//         });
//     });
// };

/**
 * Set root screen for launch app for the first time
 */
const setRootScreen = () => {
    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            drawBehind: true,
        },
        layout: {
            backgroundColor: '#fff',
            orientation: ['portrait'],
        },
        bottomTabs: {
            titleDisplayMode: 'alwaysShow',
        },
        bottomTab: {
            selectedFontSize: 12,
            fontSize: 12,
            textColor: '#666',
            iconColor: '#666',
            selectedIconColor: '#333',
            selectedTextColor: '#333',
        },
        animations: {
            setRoot: {
                alpha: {
                    from: 0,
                    to: 1,
                    duration: 400,
                    startDelay: 100,
                    interpolation: 'accelerate',
                },
            },
        },
    });

    Navigation.setRoot({
        root: main,
    });
};

/**
 * We register screens then we wait for
 *    - Store to be rehydrated
 * and then we finally initialize layout accordingly.
 */
const bootstrap = async () => {
    try {
        // disable yellow box
        console.disableYellowBox = true;

        // create the store
        // const store = configureStore();

        // register the screen with the store
        // registerScreens(store);
        registerScreens();

        // Add any more promises that must be resolved before layout is set
        // await Promise.all([persistStore(store), iconsLoaded()]);

        // fire the screen for the first time
        setRootScreen();
    } catch (error) {
        if (__DEV__) {
            console.log('BOOTSTRAP: ', error);
        }

        Alert.alert('Sorry', 'Something went wrong');
    }
};

/**
 * The initial listener of our app,
 * this will get triggered on app start or when the Android activity is recreated.
 * (For example by pressing back button on the root screen)
 */

let x = 0;
Navigation.events().registerAppLaunchedListener(() => {
    if (x === 0) {
        bootstrap();
        x += 1;
    } else {
        setRootScreen();
    }
});
