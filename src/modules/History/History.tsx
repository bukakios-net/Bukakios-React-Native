import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Route, TabView } from 'react-native-tab-view';
import HistoryList from './HistoryList';
import { Navigation } from 'react-native-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../lib/dimensions';
import colors from '../../constants/colors';

interface IHistoryProps {
    componentId: string;
}

interface IHistoryStates {
    index: number;
    routes: Array<{ key: string }>;
    loadingTransaksi: boolean;
    loadingMutasi: boolean;
}

class History extends React.PureComponent<IHistoryProps, IHistoryStates> {
    constructor(props: IHistoryProps) {
        super(props);

        this._handleDetail = this._handleDetail.bind(this);
        this._renderScreen = this._renderScreen.bind(this);
        this._onIndexChange = this._onIndexChange.bind(this);
        this._getDataTransaksi = this._getDataTransaksi.bind(this);
        this._getDataMutasi = this._getDataMutasi.bind(this);

        this.state = {
            index: 0,
            routes: [{ key: 'transaksi' }, { key: 'mutasi' }],
            loadingTransaksi: false,
            loadingMutasi: false,
        };
    }

    _getDataTransaksi() {}

    _getDataMutasi() {}

    _handleDetail() {}

    _renderScreen({ route }: { route: Route }) {
        switch (route.key) {
            case 'onprogress':
                return (
                    <HistoryList
                        type="transaksi"
                        handleDetail={this._handleDetail}
                        data={[]}
                        getData={this._getDataTransaksi}
                        loading={this.state.loadingTransaksi}
                    />
                );

            default:
                return (
                    <HistoryList
                        type="mutasi"
                        handleDetail={this._handleDetail}
                        data={[]}
                        getData={this._getDataMutasi}
                        loading={this.state.loadingMutasi}
                    />
                );
        }
    }

    _onIndexChange(index: number) {
        this.setState({ index });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.tab_container}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() => this._onIndexChange(0)}
                                activeOpacity={0.8}
                            >
                                <View
                                    style={
                                        this.state.index.toString() === '0'
                                            ? styles.tab_active
                                            : styles.tab
                                    }
                                >
                                    <Text
                                        style={{
                                            color:
                                                this.state.index.toString() === '0'
                                                    ? '#fff'
                                                    : '#fff9',
                                            fontSize: wp(3.5),
                                        }}
                                    >
                                        TRANSAKSI
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() => this._onIndexChange(1)}
                                activeOpacity={0.8}
                            >
                                <View
                                    style={
                                        this.state.index.toString() === '1'
                                            ? styles.tab_active
                                            : styles.tab
                                    }
                                >
                                    <Text
                                        style={{
                                            color:
                                                this.state.index.toString() === '1'
                                                    ? '#fff'
                                                    : '#fff9',
                                            fontSize: wp(3.5),
                                        }}
                                    >
                                        MUTASI SALDO
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TabView
                        navigationState={this.state}
                        renderScene={this._renderScreen}
                        onIndexChange={this._onIndexChange}
                        renderTabBar={() => null}
                        swipeEnabled={false}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab_container: {
        backgroundColor: colors.BLUE,
        height: wp(14),
        flexDirection: 'row',
        elevation: 1,
    },
    tab: {
        height: wp(14),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: wp(1),
        borderBottomColor: 'transparent',
    },
    tab_active: {
        height: wp(14),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: wp(1),
        borderBottomColor: '#fff',
    },
});

export default History;
