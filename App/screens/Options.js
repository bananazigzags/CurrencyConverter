import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, ScrollView, Linking, Alert } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors'

import { RowItem, RowSeparator } from '../components/RowItem'

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, something went wrong.", 'Please try again later.');
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
})

export default () => {
    return (
      
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <ScrollView>
          <RowItem text="Themes" onPress={() => alert("todo!")} rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />} />

          <RowSeparator />

          <RowItem text="Bloomberg Currencies" onPress={() => openUrl('https://www.bloomberg.com/markets/currencies')} rightIcon={<Entypo name="export" size={20} color={colors.blue} />} />

          <RowSeparator />

          <RowItem text="Option 2" onPress={() => alert("todo!")} rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />} />

          <RowSeparator />
        </ScrollView>        
      </SafeAreaView>
    )
};
