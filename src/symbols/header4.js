import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class header4 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center vertical>
          <TouchableOpacity style={styles.leftIconButton}>
            <Icon
              style={styles.leftIcon}
              name="menu"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
        </Center>
        <Center vertical>
          <View style={styles.textWrapper}>
            <Text style={styles.title} numberOfLines={1}>
              Title
            </Text>
          </View>
        </Center>
        <Center vertical>
          <View style={styles.leftWrapper}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon
                style={styles.rightIcon1}
                name="magnify"
                type="MaterialCommunityIcons"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon
                style={styles.rightIcon2}
                name="heart"
                type="MaterialCommunityIcons"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon
                style={styles.rightIcon3}
                name="refresh"
                type="MaterialCommunityIcons"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon
                style={styles.rightIcon4}
                name="dots-vertical"
                type="MaterialCommunityIcons"
              />
            </TouchableOpacity>
          </View>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3F51B5",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  leftIconButton: {
    left: 0,
    position: "absolute",
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    left: 72,
    position: "absolute"
  },
  title: {
    backgroundColor: "transparent",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Roboto",
    lineHeight: 18,
    color: "#FFFFFF"
  },
  leftWrapper: {
    right: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center"
  },
  iconButton: {
    padding: 11
  },
  rightIcon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon4: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  }
});
