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
                            icon: require('./img/house.png')
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
                            icon: require('./img/edit.png')
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
                            icon: require('./img/message.png')
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
                            icon: require('./img/avatar.png')
                        },
                    },
                },
            },
        ],
    },
};
