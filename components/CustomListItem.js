import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
	return (
		<ListItem>
			<Avatar
				rounded
				source={{
					uri:
						"http://www.cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
				}}
			/>

			<ListItem.Content>
				<ListItem.Title style={{ fontWeight: "800" }}>
					Elliot Alderson
				</ListItem.Title>
				<ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
					This is a test chat This is a test chat This is a test chat This is a
					test chat This is a test chat This is a test chat
				</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	);
};

export default CustomListItem;

const styles = StyleSheet.create({});
