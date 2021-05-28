import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

//useState is used as hook, hook is a function that adds ew functionality to the function components.

//[counter, setCounter] is referred to as array destructuring
const CounterScreen = () => {

    const [ counter, setCounter ] = useState(0);

    return (
        <View>
            <Button title="Increase" onPress= {() => {
                //don't use counter++
                setCounter(counter+1)
                }} />
            <Button title="Decrease"onPress= {() => {
                //don't use counter--
                setCounter(counter-1)
                }}/>
            <Text>Counter Count:{counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;