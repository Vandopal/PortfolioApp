import React, { useState } from 'react';
import { FlatList, View, RefreshControl, StyleSheet } from 'react-native';
import LanguageItem from './components/LanguageItem';

const langs = [
  { id: '1', lang: 'JavaScript', text: 'Опыт работы 3 года', logo: './logo/js.png' },
  { id: '2', lang: 'Python', text: 'Опыт работы 0 лет', logo: './logo/python.png' },
  { id: '3', lang: 'Java', text: 'Опыт работы 0 лет', logo: './logo/java.png' },
];

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={langs}
        renderItem={({ item }) => <LanguageItem lang={item} />}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#B09A81',
  },
});