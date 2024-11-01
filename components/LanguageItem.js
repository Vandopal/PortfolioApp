import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LanguageCard = ({ lang }) => {
  return (
    <View style={styles.card}>
      <View style={styles.logo}>
        <Image source={lang.logo} style={{ width: 160, height: 160 }} />
      </View>
      <View style={styles.textColumn}>
        <View style={styles.logoText}>
          <Text style={styles.languageName}>{lang.lang}</Text>
        </View>
        <Text style={styles.experienceText}>{lang.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 40,
    display: 'flex',
    backgroundColor: '#ffffff',
    width: 400,
    height: 200,
    borderRadius: 40,
    flexDirection: 'row',
    padding: 20,
    marginBottom: 40,
  },
  logoText : {
    marginBottom: 30
  },

  logo: {
    width: 160,
    height: 160,
    marginRight: 20,
    justifyContent: 'center',
  },
  textColumn: {
    flex: 1,
  },
  languageName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  experienceText: {
    fontSize: 16,
  },
});

export default LanguageCard;