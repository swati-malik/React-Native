import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Alert,
} from 'react-native';
import Header from './components/Header';
import Add from './components/Add';
import uuid from 'uuid-random';

import ListItems from './components/ListItems';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Apple'},
    {id: uuid(), text: 'Oranges'},
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Bread'},
  ]);
  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('ERROR', 'Please enter valid item', {text: 'OK'});
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };

  return (
    <ImageBackground
      style={styles.image}
      source={require('./components/Images/grocery1.jpeg')}
      blurRadius={Platform.OS == 'ios' ? 4 : 1}
      blurType="light"
      resizeMode="cover">
      <View style={styles.view}>
        <Header />
        <Add addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItems item={item} deleteItem={deleteItem} />
          )}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 60,
  },
  image: {
    flex: 1,
  },
});
export default App;
