import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '@mobile/Components/reusable/styles/SearchBarStyles';
import { Colors, Metrics } from '@mobile/Themes/';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  onSearch: (text: string) => any,
  onCancel: (Event) => any,
  searchTerm: string,
}

export default (props: Props) => {
  const { onSearch, onCancel, searchTerm } = props;
  const onSubmitEditing = () => onSearch(searchTerm);
  return (
    <View style={styles.container}>
      <Icon name='search' size={Metrics.icons.tiny} style={styles.searchIcon} />
      <TextInput
        autoFocus={true}
        placeholder='Search'
        placeholderTextColor={Colors.snow}
        underlineColorAndroid='transparent'
        style={styles.searchInput}
        value={props.searchTerm}
        onChangeText={onSearch}
        autoCapitalize='none'
        onSubmitEditing={onSubmitEditing}
        returnKeyType={'search'}
        autoCorrect={false}
        selectionColor={Colors.snow}
      />
      <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
        <Text style={styles.buttonLabel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

