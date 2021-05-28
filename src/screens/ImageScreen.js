import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'


const ImageScreen = () => {
    
    return (
        <View>
            <ImageDetail title="forest" imageSource={require('../../assets/beach.jpg')} imgScore={9}/>
            <ImageDetail title="Beach" imageSource={require('../../assets/forest.jpg')} imgScore={1}/> 
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imgScore={10}/> 
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;
