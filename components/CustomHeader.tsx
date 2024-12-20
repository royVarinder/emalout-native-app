import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Font5Icon from 'react-native-vector-icons/FontAwesome5';
import { Link } from "expo-router";
import { useNavigationState } from "@react-navigation/native";
const CustomHeader = ({ title, onBackPress, navigation }: any) => {

    const routeName = useNavigationState(
        (state) => state.routes[state.index].name
    );

    console.log('routeName :>> ', routeName);
    return (
        <View style={styles.header}>
            {/* {onBackPress && (
                <TouchableOpacity onPress={onBackPress}>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
            )} */}
            {/* <Text style={styles.title}>{title}</Text> */}
            <View style={styles?.innerViewStyle}>
                {/* <Link href={`/home`} style={styles?.linkStyle}> */}
                    <Icon style={styles.iconStyle} name="home" size={25} />
                    <Text style={styles.title}>{"Home"}</Text>
                {/* </Link> */}
            </View>
            <View style={styles?.innerViewStyle}>
                <Link href={`/News`} style={styles?.linkStyle} >
                    <Entypo style={styles.iconStyle} name="news" size={25} />
                    <Text style={styles.title}>{"News"}</Text>
                </Link>
            </View>
            <View style={styles?.innerViewStyle}>
                <Link href={`./Blogs`} style={styles?.linkStyle}>
                    <Font5Icon style={styles.iconStyle} name="blog" size={25} />
                    <Text style={styles.title}>{"Blogs"}</Text>
                </Link>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#6200ea",
        paddingHorizontal: 20,
        gap: 20,
        elevation: 4,
        // marginTop: 50,
        // padding:10
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    backButton: {
        color: "white",
        fontSize: 18,
        paddingHorizontal: 10,
    },
    iconStyle: {
        color: "white"
    },
    innerViewStyle: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5
    },
    linkStyle: {
        flexDirection: 'row',
        gap: 5,
        display: 'flex',
        alignItems: 'center'
    }
});

export default CustomHeader;
