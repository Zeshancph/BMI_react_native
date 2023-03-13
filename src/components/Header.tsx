import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {
  title: string;
} 
const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  ); 
};
const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
  },
});
export default Header;