import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const WeatherDetail = ({ navigation, route }) => {
  const { main } = route.params.data;
  return (
    <View>
      <ListItem
        title={`Temperature : ${main.temp}°`}
        leading={<Icon name="thermometer" size={24} />}
      />

      <ListItem
        title={`Feels Like : ${main.feels_like}°`}
        leading={<Icon name="thermometer-alert" size={24} />}
      />

      <ListItem
        title={`Minimum Temperature : ${main.temp_min}°`}
        leading={<Icon name="thermometer-low" size={24} />}
      />

      <ListItem
        title={`Maximum Temperature : ${main.temp_max}°`}
        leading={<Icon name="thermometer-high" size={24} />}
      />
      <ListItem
        title={`Pressure : ${main.pressure} P`}
        leading={<Icon name="weather-cloudy" size={24} />}
      />

      <ListItem
        title={`Humidity : ${main.humidity}°C`}
        leading={<Icon name="water-outline" size={24} />}
      />
    </View>
  );
};

export default WeatherDetail;
