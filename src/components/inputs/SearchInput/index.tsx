import { TextInput, View } from 'react-native';
import React from 'react';
import { Search } from 'assets/icons';
import { styles } from './styles';

type SearchInputProps = {
  searchValue: string;
  onSearch: (value: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ searchValue, onSearch }) => {
  return (
    <View style={styles.container}>
      <Search />
      <TextInput
        style={styles.input}
        value={searchValue}
        onChangeText={onSearch}
        placeholder='Ara...'
        placeholderTextColor={"gray"}
      />
    </View>
  );
};

export default SearchInput;