import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Screen extends React.Component {
    render() {
        return (
            <View backgroundColor={"#006400"}>
                <SafeAreaView>
                    <TouchableOpacity 
                        style={{alignItems: "flex-end", margin: 16}} 
                        onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924" style={styles.bar}/>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
    bar: {
        paddingTop: 25
    }
});