import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#ff0000',
    fontSize: 30,
    textAlign: 'center',
  },
  header: {
    height: 60,
    padding: 10,
    backgroundColor: 'grey',
  },
});
export default Header;
