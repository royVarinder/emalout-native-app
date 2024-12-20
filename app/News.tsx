import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Example Data (You can replace this with an API call for real data)
const newsData = [
  { id: '1', title: 'Breaking News: React Native Update', description: 'React Native 0.70 has been released with new features and fixes.' },
  { id: '2', title: 'New iPhone Launch', description: 'Apple is launching a new iPhone with improved camera and battery.' },
  { id: '3', title: 'Global Warming Concerns', description: 'Scientists are warning about the accelerating effects of global warming.' },
  { id: '4', title: 'Tech Industry Booms in 2024', description: 'The tech industry is seeing explosive growth with new advancements in AI.' },
  // Add more items as needed
];

const NewsList = () => {
  // Function to render each news item
  const renderItem = ({ item }: { item: { title: string, description: string } }) => (
    <TouchableOpacity style={styles.newsItem} onPress={() => alert('News item clicked')}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  newsItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,  // This is for Android shadow
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default NewsList;
