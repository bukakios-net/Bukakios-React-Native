import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp } from '../../lib/dimensions';
import colors from '../../constants/colors';

interface HistoryListProps {
    type: string;
    handleDetail: () => void;
    data: any[];
    getData: () => void;
    loading: boolean;
}

class HistoryList extends React.PureComponent<HistoryListProps> {
    render() {
        return (
            <FlatList
                data={[1, 2, 3]}
                keyExtractor={(item, index) => `${index}`}
                ListHeaderComponent={() => <View style={{ height: wp(2) }} />}
                renderItem={(item) => (
                    <View style={styles.container}>
                        <View style={styles.top_container}>
                            <View
                                style={StyleSheet.flatten([
                                    styles.image,
                                    { backgroundColor: '#eee', marginVertical: wp(4) },
                                ])}
                            >
                                {/* <Image /> */}
                            </View>
                            <View style={{ flex: 1, padding: wp(4) }}>
                                <Text
                                    style={{
                                        color: colors.DARK,
                                        fontSize: wp(4),
                                        fontWeight: '500',
                                    }}
                                >
                                    Transfer Bank BNI
                                </Text>
                                <Text>#1234567</Text>
                                <View style={{ height: wp(2) }} />

                                <Text>20 Mei 2019 (20:09 WIB)</Text>
                            </View>
                            <View style={styles.status_container}>
                                <Text style={{ color: '#fff' }}>Berhasil</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: wp(1),
        elevation: 1,
        marginHorizontal: wp(3),
        marginTop: wp(1),
        marginBottom: wp(2),
    },
    top_container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: wp(4),
    },
    image: {
        width: wp(12),
        height: wp(12),
    },
    status_container: {
        paddingHorizontal: wp(4),
        paddingVertical: wp(2),
        backgroundColor: colors.BLUE,
    },
});

export default HistoryList;
