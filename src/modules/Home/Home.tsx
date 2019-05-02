import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../lib/dimensions';
import colors from '../../constants/colors';
import IonIcon from 'react-native-vector-icons/Ionicons';

class Home extends React.PureComponent {
    _handleCS() {}

    _handleSemuaPromo() {}

    _handleSaldoSaya() {}

    _handleSedekah() {}

    _handleSelectMenu() {}

    render() {
        const data = [
            {
                id: '1',
                icon: require('../../img/phone.png'),
                name: 'Pulsa Isi Ulang',
            },
            {
                id: '2',
                icon: require('../../img/global.png'),
                name: 'Paket Data',
            },
            {
                id: '3',
                icon: require('../../img/light-bulb.png'),
                name: 'Token Listrik',
            },
            {
                id: '4',
                icon: require('../../img/transfer.png'),
                name: 'Pulsa Transfer',
            },
            {
                id: '5',
                icon: require('../../img/telephone.png'),
                name: 'Paket Telepon',
            },
            {
                id: '6',
                icon: require('../../img/sms.png'),
                name: 'Paket SMS',
            },
            {
                id: '7',
                icon: require('../../img/gojek.png'),
                name: 'Saldo Gojek',
            },
            {
                id: '8',
                icon: require('../../img/grab.png'),
                name: 'Saldo Grab',
            },
            {
                id: '9',
                icon: require('../../img/emoney.png'),
                name: 'Saldo E-Money',
            },
        ];

        return (
            <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <View style={styles.navbar}>
                    <View style={{ flex: 1, paddingHorizontal: wp(4) }}>
                        <Text style={{ color: 'white', fontSize: wp(6), fontWeight: '500' }}>
                            Logo
                        </Text>
                    </View>
                    <TouchableOpacity onPress={this._handleCS} activeOpacity={0.8}>
                        <View style={styles.btn_cs}>
                            <Image source={require('../../img/support.png')} style={styles.cs} />
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={styles.slider_area}>
                        <View style={styles.semua_promo_container}>
                            <TouchableOpacity onPress={this._handleSemuaPromo} activeOpacity={0.8}>
                                <View style={styles.btn_semua_promo}>
                                    <Text style={{ color: 'white', fontSize: wp(2.8) }}>
                                        SEMUA PROMO
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.wallet_area}>
                        <View style={{ flex: 0.38 }}>
                            <TouchableOpacity onPress={this._handleSaldoSaya} activeOpacity={0.8}>
                                <View style={styles.wallet_container}>
                                    <Image
                                        source={require('../../img/wallet.png')}
                                        style={styles.wallet}
                                    />
                                    <View style={{ paddingHorizontal: wp(3) }}>
                                        <Text style={{ color: colors.DARK, fontSize: wp(3) }}>
                                            Saldo Saya
                                        </Text>
                                        <Text
                                            style={{
                                                color: colors.DARK,
                                                fontSize: wp(3.5),
                                                fontWeight: '500',
                                            }}
                                        >
                                            Rp 25.512{'  '}
                                            <IonIcon
                                                name="md-add-circle-outline"
                                                size={wp(4)}
                                                color={colors.BLUE}
                                            />
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 0.32 }}>
                            <TouchableOpacity onPress={this._handleSedekah} activeOpacity={0.8}>
                                <View style={styles.wallet_container}>
                                    <Image
                                        source={require('../../img/investment.png')}
                                        style={styles.wallet}
                                    />
                                    <View style={{ paddingHorizontal: wp(3) }}>
                                        <Text style={{ color: colors.DARK, fontSize: wp(3) }}>
                                            Sedekah
                                        </Text>
                                        <Text
                                            style={{
                                                color: colors.DARK,
                                                fontSize: wp(3.5),
                                                fontWeight: '500',
                                            }}
                                        >
                                            Rp 2{'  '}
                                            <IonIcon
                                                name="md-information-circle-outline"
                                                size={wp(4)}
                                                color={colors.BLUE}
                                            />
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 0.3 }}>
                            <TouchableOpacity onPress={this._handleSedekah} activeOpacity={0.8}>
                                <View style={styles.wallet_container}>
                                    <Image
                                        source={require('../../img/coins.png')}
                                        style={styles.wallet}
                                    />
                                    <View style={{ paddingHorizontal: wp(3) }}>
                                        <Text style={{ color: colors.DARK, fontSize: wp(3) }}>
                                            Poin
                                        </Text>
                                        <Text
                                            style={{
                                                color: colors.DARK,
                                                fontSize: wp(3.5),
                                                fontWeight: '500',
                                            }}
                                        >
                                            0{'  '}
                                            <IonIcon
                                                name="md-information-circle-outline"
                                                size={wp(4)}
                                                color={colors.BLUE}
                                            />
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={this._handleSelectMenu} activeOpacity={0.8}>
                                <View style={styles.menu_container}>
                                    <Image source={item.icon} style={styles.menu_icon} />
                                    <Text style={{ color: colors.DARK, fontSize: wp(3.2) }}>
                                        {item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        ListFooterComponent={() => <View style={{ height: wp(2) }} />}
                    />
                </ScrollView>
            </View>
        );
    }
}

const MENU_WIDTH = wp(92) / 3;
const MENU_HEIGHT = wp(97) / 3;

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: colors.BLUE,
        height: wp(15),
        flexDirection: 'row',
        alignItems: 'center',
    },
    slider_area: {
        height: wp(40),
        backgroundColor: colors.BLUE,
    },
    btn_semua_promo: {
        paddingHorizontal: wp(2),
        paddingVertical: wp(1),
        borderRadius: wp(1.3),
        backgroundColor: '#0005',
    },
    semua_promo_container: {
        position: 'absolute',
        bottom: wp(4),
        right: wp(4),
    },
    btn_cs: {
        width: wp(15),
        height: wp(15),
        alignItems: 'center',
        justifyContent: 'center',
    },
    cs: {
        width: wp(6.5),
        height: wp(6.5),
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    wallet_area: {
        height: wp(15),
        flexDirection: 'row',
        alignItems: 'center',
    },
    wallet_container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(2),
        height: wp(15),
    },
    wallet: {
        width: wp(8),
        height: wp(8),
        resizeMode: 'contain',
    },
    menu_container: {
        marginLeft: wp(2),
        width: MENU_WIDTH,
        height: MENU_HEIGHT,
        backgroundColor: '#fff',
        borderRadius: wp(1.3),
        elevation: 1,
        marginBottom: wp(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu_icon: {
        width: MENU_HEIGHT * 0.5,
        height: MENU_HEIGHT * 0.4,
        resizeMode: 'contain',
        marginBottom: hp(2),
        tintColor: colors.BLUE,
    },
});

export default Home;
