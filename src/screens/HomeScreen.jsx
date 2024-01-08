import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const menu = require("../assets/icons/menu.png");
const face = require("../assets/face.png");
const magnifyingGlass = require("../assets/icons/magnifying-glass.png");

const imageV1 = require("../assets/vehicles/v-1.png");
const imageV2 = require("../assets/vehicles/v-2.png");
const imageV3 = require("../assets/vehicles/v-3.png");
const imageV4 = require("../assets/vehicles/v-4.png");

import data from "../dataset/vehicles.json";

const HomeScreen = ({ navigation }) => {
  const [filteredVehicles, setFilteredVehicles] = useState(data.vehicles);
  const [vehicles, setVehicles] = useState(data.vehicles);
  const getImage = (id) => {
    if (id == 1) {
      return imageV1;
    } else if (id == 2) {
      return imageV2;
    } else if (id == 3) {
      return imageV3;
    } else if (id == 4) {
      return imageV4;
    }
  };

  const searchVehicles = (query) => {
    const results = vehicles.filter((vehicle) => {
      return vehicle.make.toLocaleLowerCase().includes(query.toLowerCase());
    });
    setFilteredVehicles(results);
  };

  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight : 140;

  return (
    <SafeAreaView style={[styles.safeArea, { paddingTop: statusBarHeight }]}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Image
            source={menu}
            resizeMode="contain"
            style={styles.menuIconStyle}
          />
          <Image
            source={face}
            resizeMode="contain"
            style={styles.faceIconStyle}
          />
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.title}>Rent a Car</Text>
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchPallet}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for a car"
              onChangeText={(text) => searchVehicles(text)}
            />
            <View style={styles.searchIconArea}>
              <Image
                source={magnifyingGlass}
                resizeMode="contain"
                style={styles.magnifyingGlassIconStyle}
              />
            </View>
          </View>
        </View>

        <View style={styles.typesSection}>
          <Text style={styles.typesText}>All</Text>
          <Text style={styles.typesTextActive}>SUV</Text>
          <Text style={styles.typesText}>Sedan</Text>
          <Text style={styles.typesText}>Mpv</Text>
          <Text style={styles.typesText}>Hatchback</Text>
        </View>

        <ScrollView style={styles.listSection}>
          <Text style={styles.headText}>Most Rented</Text>
          <View style={styles.elementPallet}>
            {filteredVehicles.map((v) => {
              return (
                <TouchableOpacity
                  style={styles.element}
                  key={v.id}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("Info", { id: v.id })}
                >
                  <View style={styles.infoArea}>
                    <Text style={styles.infoTitle}>{v.make}</Text>
                    <Text style={styles.infoSub}>{v.type}</Text>
                    <Text style={styles.infoPrice}>
                      <Text style={styles.infoAmount}>${v.price_per_day}</Text>
                      /day
                    </Text>
                  </View>
                  <View style={styles.imageArea}>
                    <Image
                      source={getImage(v.id)}
                      resizeMode="contain"
                      style={styles.vehicleImage}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  container: {
    flex: 1,
  },
  headerSection: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  menuIconStyle: {
    width: 28,
    height: 28,
  },
  faceIconStyle: {
    width: 40,
    height: 40,
  },
  titleSection: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
  },
  searchSection: {
    padding: 20,
  },
  searchPallet: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
  },
  searchInput: {
    display: "flex",
    // backgroundColor: "red",
    width: "75%",
  },
  searchIconArea: {
    display: "flex",
  },
  magnifyingGlassIconStyle: {
    width: 32,
    height: 32,
  },
  typesSection: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-evenly",
  },
  typesTextActive: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  typesText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#696969",
  },
  listSection: {
    marginTop: 15,
  },
  headText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  elementPallet: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 60,
  },
  element: {
    height: 160,
    backgroundColor: "white",
    padding: 16,
    marginBottom: 12,
    borderRadius: 16,
    flexDirection: "row",
  },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoSub: {
    fontSize: 12,
    fontWeight: "600",
    color: "#696969",
  },
  infoPrice: {
    position: "absolute",
    bottom: 0,
    fontSize: 12,
    color: "#696969",
    fontWeight: "bold",
  },
  infoAmount: {
    fontSize: 12,
    color: "black",
    fontWeight: "600",
  },
  imageArea: {
    flex: 1,
  },
  vehicleImage: {
    position: "absolute",
    width: "130%",
    height: "140%",
    top: -10,
    left: -15,
  },
});

export default HomeScreen;
