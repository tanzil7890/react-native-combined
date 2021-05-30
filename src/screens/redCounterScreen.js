import React, { useReducer } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


const reducer = (state, action)  => {
    //state === { count: number }
    //action === { type: 'increment' || 'decrement', payload: 1 }

    switch(action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload };
        case 'decrement':
            return {...state, count: state.count - action.payload };
        default:
            return state;
    }



}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button title="Increase" onPress= {() => 
                //don't use counter++
                dispatch({type: 'increment', payload: 1})}
                 />
            <Button title="Decrease"onPress= {() => 
                //don't use counter--
                dispatch({type: 'decrement', payload: 1})}
                />
            <Text>Counter Count:{state.count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;