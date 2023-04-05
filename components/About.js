import React from "react";
import { TouchableOpacity, Text } from "react-native";
const About = ({ navigation, route }) => {
  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <TouchableOpacity style={{ margin: 100 }} onPress={goToHome}>
      <Text> {route.params.name} Ceci est la page About !!!!</Text>
    </TouchableOpacity>
  );
};

export default About;
