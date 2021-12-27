import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Pressable, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSearchState} from '../../context/SearchContex';

const Input = () => {
  const [text, setText] = useState('');
  const [, setSearch] = useSearchState();
  const onSubmit = () => {
    setSearch(text);
    setText('');
  };

  return (
    <View style={styles.block}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="movie title..."
          value={text}
          onChangeText={setText}
          onSubmitEditing={onSubmit}
        />
        <Pressable
          style={({pressed}) => [
            styles.iconWrap,
            Platform.OS === 'ios' && pressed && styles.pressedIcon,
          ]}
          onPress={onSubmit}
          android_ripple={{color: '#eeeeee'}}>
          <Icon style={styles.icon} name="search" color="black" size={20} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#192031',
    height: 70,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    height: 30,
    width: '100%',
    paddingHorizontal: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  iconWrap: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  icon: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressedIcon: {
    opacity: 0.75,
  },
});

export default Input;
