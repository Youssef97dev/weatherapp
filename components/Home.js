import React, { useEffect, useState } from "react";
import { Button, ListItem, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, View, Image } from "react-native";
import Flag from "react-native-flags";

const Home = ({ navigation }) => {
  const [textCity, setTextCity] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [DataSuccess, setDataSuccess] = useState(false);

  const [data, setData] = useState([]);

  const onChangeText = (city) => {
    setTextCity(city);
  };

  const getWeatherData = () => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${textCity}&appid=d688348070b52c44d53dfea741fef683&units=metric`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        setDataSuccess(true);
      });
  };

  const goToWeatherDetail = () => {
    navigation.navigate("WeatherDetail", { data });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="City"
        style={{ margin: 16 }}
        onChangeText={onChangeText}
      />

      <Button
        title="Search"
        loading={isLoading}
        onPress={getWeatherData}
        style={{ width: 200, alignSelf: "center" }}
      />

      {DataSuccess && (
        <View style={styles.listItem}>
          <Image
            style={{ width: 150, height: 150, alignSelf: "center" }}
            source={{
              uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
            }}
          />
          <ListItem
            leading={<Flag code={`${data.sys.country}`} size={32} />}
            trailing={
              <Icon name="menu" size={24} onPress={goToWeatherDetail} />
            }
          />
          <ListItem
            title={`${data.main.temp}°`}
            leading={<Icon name="thermometer" size={24} />}
          />

          <ListItem
            title={`${data.main.pressure} P`}
            leading={<Icon name="weather-cloudy" size={24} />}
          />

          <ListItem
            title={`${data.main.humidity}°C`}
            leading={<Icon name="water" size={24} />}
          />

          <ListItem
            title={`${data.weather[0].description}`}
            leading={<Icon name="information-variant" size={24} />}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listItem: {
    width: 350,
    marginTop: 20,
    alignSelf: "center",
  },
});

export default Home;
