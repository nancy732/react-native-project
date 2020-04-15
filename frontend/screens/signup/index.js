import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DragButton from '../../components/DragButton'
export default function Signup() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Who are you!</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    name="Name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    name="Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    name="Phone Number"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Pincode"
                    name="Pincode"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    name="Password"
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    name="Confirm"
                    secureTextEntry={true}
                />
                <Icon name="eye" />
            </View>
            <View >
                <DragButton text="Create Account" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly'
    },
    textContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    inputContainer: {
        flex: 4,
        alignContent: 'flex-start',
        justifyContent: 'space-evenly'
    },
    text: {
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 2,
        borderTopWidth: 1.5,
        paddingHorizontal: 20,
        paddingVertical: 7,
        fontFamily: "sans-serif-medium",
        fontSize: 20
    },
    input: {
        borderBottomColor: 'black',
        fontSize: 13,
        borderBottomWidth: 1,
        width: '100%',
        paddingHorizontal: 2
    }
});
