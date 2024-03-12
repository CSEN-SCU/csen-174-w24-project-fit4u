import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuIcon from "./MenuIcon.png";
import UserIcon from "./UserIcon.png";
import Menu from './Menu';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuDisplay = useRef();
  const navigation = useNavigation();

  const getMenu = () => {
    return menu;
  };

  return (
    <View style={styles.wrapper}>
      {menu ? <Menu getMenu={getMenu} /> : null}
      <TouchableOpacity onPress={() => setMenu(!menu)} style={styles.menuButton}>
        <Image
          source={require(MenuIcon)}
          style={[styles.menuIcon, { transform: [{ rotate: menu ? "90deg" : "0deg" }] }]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("/app")} style={styles.homeButton}>
        <Text style={styles.title}>FIT4U</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("/app/user")} style={styles.userButton}>
        <Image source={require(UserIcon)} style={styles.userIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#B82A25",
    width: "100%",
    position: "absolute",
    top: 0,
    height: 60, // Adjust as needed
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 3,
  },
  title: {
    color: "#332929",
    textAlign: "center",
    fontFamily: "Koulen",
    fontSize: 25, // Adjust as needed
    fontWeight: "400",
  },
  menuButton: {
    height: "100%",
    justifyContent: "center",
  },
  menuIcon: {
    width: 30, // Adjust as needed
    height: 30, // Adjust as needed
    resizeMode: "contain",
  },
  homeButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userButton: {
    height: "100%",
    justifyContent: "center",
    paddingRight: 10, // Adjust as needed
  },
  userIcon: {
    width: 30, // Adjust as needed
    height: 30, // Adjust as needed
    resizeMode: "contain",
  },
});

export default Header;
