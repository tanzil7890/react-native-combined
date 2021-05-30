import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  
  //TouchableOpacity can be used as button, text, image or anything. It will fade out and come back.
  /*<TouchableOpacity 
      style={{backgroundColor: "#7d7ddf", marginTop: 20}}
      onPress={() => props.navigation.navigate('List')}
      >
      <Text style={styles.text12}>Go To List Demo</Text>
      </TouchableOpacity>
          */
  return <View>
          <Text style={styles.text}>HI, I am Tanzil</Text>
          <Button 
          onPress={() => navigation.navigate('Components')}
          title="Go To Component Demo"
          />
        <Button 
          onPress={() => navigation.navigate('List')}
          title="Go To List Demo"
          />
          <Button 
          onPress={() => navigation.navigate('Image')}
          title="Go To Image Demo"
          />
          <Button 
          onPress={() => navigation.navigate('redCounter')}
          title="Go To Counter Screen Demo"
          />
          <Button 
          onPress={() => navigation.navigate('Color')}
          title="Go To Color Screen Demo"
          />
          <Button 
          onPress={() => navigation.navigate('dupSquare')}
          title="Go To Square Screen Demo"
          />
          <Button 
          onPress={() => navigation.navigate('tScreen')}
          title="Go To Text Screen Demo"
          />
          <Button 
          onPress={() => navigation.navigate('Box')}
          title="Go To Box Screen Layout Demo"
          />
         
         </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 20,
    padding: 15
  }
});

export default HomeScreen;
