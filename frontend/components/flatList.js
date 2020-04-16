import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default FlatListComponent = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: 'xyz' },
                    { key: 'abc' },
                    { key: 'jack' },
                    { key: 'Jackson' },
                    { key: 'James' },
                    { key: 'pqr' },
                    { key: 'sndabxjss' },
                    { key: 'lion' },
                    { key: 'lsdasaax' },
                    { key: 'Julie' },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
