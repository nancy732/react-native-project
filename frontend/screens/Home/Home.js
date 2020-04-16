import React from 'react'
import AppBar from '../../components/Appbar'
import FlatListComponent from '../../components/flatList'
import StatusBarComponent from '../../components/StatusBar'
export default function Home() {
    return (
        <View>
            <AppBar />
            {/* <FlatListComponent /> */}
            <StatusBarComponent />
        </View>
    )
}