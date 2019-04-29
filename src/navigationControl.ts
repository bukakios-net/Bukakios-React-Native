import { Layout } from 'react-native-navigation';

export const home: Layout = {
    component: {
        id: 'home',
        name: 'Home',
    },
};

export const history: Layout = {
    component: {
        id: 'history',
        name: 'History',
    },
};

export const info: Layout = {
    component: {
        id: 'info',
        name: 'Info',
    },
};

export const profile: Layout = {
    component: {
        id: 'profile',
        name: 'Profile',
    },
};

export const main: Layout = {
    bottomTabs: {
        id: 'mainbottomtabs',
        children: [
            {
                stack: {
                    children: [home],
                    options: {
                        bottomTab: {
                            text: 'Home',
                        },
                    },
                },
            },
            {
                stack: {
                    children: [history],
                    options: {
                        bottomTab: {
                            text: 'History',
                        },
                    },
                },
            },
            {
                stack: {
                    children: [info],
                    options: {
                        bottomTab: {
                            text: 'Info',
                        },
                    },
                },
            },
            {
                stack: {
                    children: [profile],
                    options: {
                        bottomTab: {
                            text: 'Profile',
                        },
                    },
                },
            },
        ],
    },
};
