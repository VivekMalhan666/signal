import React, { useLayoutEffect } from "react";
import CustomListItem from "../components/CustomListItem";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
	const signOut = () => {
		auth.signOut().then(() => navigation.replace("Login"));
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Signal",
			headerStyle: { backgroundColor: "white" },
			headerTitleStyle: { color: "black" },
			headerTintColor: "black",
			headerLeft: () => (
				<View style={{ marginLeft: 20 }}>
					<TouchableOpacity activeOpacity={0.5} onPress={signOut}>
						<Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
					</TouchableOpacity>
				</View>
			),
		});
	}, []);

	return (
		<SafeAreaView>
			<ScrollView>
				<CustomListItem />
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
