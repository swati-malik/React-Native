import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItems = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listitem}>
      <View style={styles.listitemView}>
        <Text style={styles.listItemtext}>{item.text}</Text>

        <Icon
          name="remove"
          size={20}
          color="white"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listitem: {
    padding: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listitemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemtext: {
    fontSize: 25,
  },
});

export default ListItems;
