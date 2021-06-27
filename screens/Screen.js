import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import GlobalStyles from '../styles/GlobalStyles';

export default class Screen extends React.Component {
    render() {
        return (
            <View style = {GlobalStyles.headerBackgroundColor}>
                <StatusBar/>
                <SafeAreaView>
                    <TouchableOpacity
                        style={{ alignItems: "flex-end", margin: 16 }}
                        onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size = {26} style={styles.bar} />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bar: {
        paddingTop: 10,
        paddingBottom: 5,
        color: "#161924",
    }
});