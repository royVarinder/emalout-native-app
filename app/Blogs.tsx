import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Example Blog Data (You can replace this with an API call for real data)
const blogData = [
    { id: '1', title: 'Understanding React Native', excerpt: 'In this blog, we dive deep into the core concepts of React Native and how to build performant mobile apps.' },
    { id: '2', title: 'JavaScript Best Practices', excerpt: 'Explore some of the best practices for writing clean and maintainable JavaScript code in modern development.' },
    { id: '3', title: 'Exploring Node.js', excerpt: 'Learn about Node.js, its features, and why it’s widely used for building scalable backend applications.' },
    { id: '4', title: 'Tips for Better UX/UI Design', excerpt: 'User experience and user interface design are key factors in building successful applications. Here are some tips.' },
    // Add more blog items here
];

const BlogList = ({ navigation }: { navigation: any }) => {
    // Function to render each blog item
    const renderItem = ({ item }: { item: { id: Number, title: string, excerpt: string } }) => (
        <TouchableOpacity
            style={styles.blogItem}
            onPress={() => navigation.navigate('Blog Details', { blogId: item.id })} // Navigate to blog detail screen
        >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.excerpt}>{item.excerpt}</Text>
            <Text style={styles.viewMore}>Read More...</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={blogData}
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
    blogItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,  // For Android shadow
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    excerpt: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    viewMore: {
        fontSize: 14,
        color: '#1e90ff',  // Link-like color
        fontWeight: 'bold',
    },
});

export default BlogList;
