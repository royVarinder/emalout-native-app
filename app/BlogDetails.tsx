import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Example blog data (can be fetched from an API using the blogId passed through the route)
const blogData = {
    1: {
        title: 'Understanding React Native',
        content: 'React Native allows you to build mobile applications using JavaScript and React. It provides a way to write cross-platform apps using native components and APIs.',
        author: 'John Doe',
        date: '2024-11-10',
    },
    2: {
        title: 'JavaScript Best Practices',
        content: 'JavaScript best practices include writing clean, readable code, managing asynchronous operations effectively, and ensuring code quality through testing and linting.',
        author: 'Jane Smith',
        date: '2024-11-09',
    },
    3: {
        title: 'Exploring Node.js  Exploring Node.jsExploring Node.jsExploring Node.jsExploring Node.js',
        content: 'Node.js is a popular JavaScript runtime used for building scalable server-side applications. It’s built on Chrome’s V8 JavaScript engine and is event-driven and non-blocking.',
        author: 'Alice Johnson',
        date: '2024-11-08',
    },
    // Add more blog details here as needed
};

const BlogDetail = ({ route, navigation }: { route: any, navigation: any }) => {
    const { blogId } = route.params; // blogId passed via navigation params
    // Update the header title dynamically

    // Get blog details based on blogId (fallback if not found)
    const blog = blogData[blogId] || { title: 'Blog Not Found', content: 'No content available.' };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: blog.title,
        });
    }, [navigation]);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{blog.title}</Text>
            <Text style={styles.date}>Published on: {blog.date}</Text>
            <Text style={styles.author}>By: {blog.author}</Text>

            <Text style={styles.content}>{blog.content}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    date: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
    },
    author: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#555',
        marginBottom: 20,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
});

export default BlogDetail;
