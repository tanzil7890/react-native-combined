import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text style={{margin: 15, fontSize: 20}}>Enter the name</Text>
            <TextInput  
                style={styles.input}
                autoCapitalize= "none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text style={{marginLeft: 15}}>Your name is: {name}</Text>
            <Text style={{margin: 15, fontSize: 20}}>Enter the password</Text>
            
            <TextInput  
                style={styles.input}
                autoCapitalize= "none"
                autoCorrect={false}
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
            />
            <Text style={{marginLeft: 15}}>Your password is: {password}</Text>
            {password.length < 5 ? <Text style={{marginLeft: 15}}>password must be longer than 5 character</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    }
});

export default TextScreen;