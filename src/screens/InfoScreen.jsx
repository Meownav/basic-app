import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";

const back = require("../assets/icons/left-arrow.png");
const dots = require("../assets/icons/dots.png");
import data from "../dataset/vehicles.json";

const imageV1 = require("../assets/vehicles/v-1.png");
const imageV2 = require("../assets/vehicles/v-2.png");
const imageV3 = require("../assets/vehicles/v-3.png");
const imageV4 = require("../assets/vehicles/v-4.png");

const statusBarHeight =
  Platform.OS === "android" ? StatusBar.currentHeight : 140;

const InfoScreen = ({ route }) => {
  const vehicle = data.vehicles.filter(
    (element) => element.id == route.params.id
  );

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

  return (
    <SafeAreaView style={[styles.safeArea, { paddingTop: statusBarHeight }]}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Image
            source={back}
            resizeMode="contain"
            style={styles.backIconStyle}
          />
          <Text style={styles.headerText}>Details</Text>
          <Image
            source={dots}
            resizeMode="contain"
            style={styles.dotsIconStyle}
          />
        </View>
        <View style={styles.imageSection}>
          <Image
            source={getImage(vehicle[0].id)}
            resizeMode="contain"
            style={styles.vehicleImage}
          />
        </View>

        <View style={styles.headSection}>
          <View style={styles.topTextArea}>
            <Text style={styles.makeModelText}>
              {vehicle[0].make}
              {vehicle[0].model}
            </Text>
            <Text style={styles.price}>
              <Text style={styles.amount}>
                ${vehicle[0].price_per_day} /day
              </Text>
            </Text>
          </View>
          <Text style={styles.typetranText}>
            {vehicle[0].type} - {vehicle[0].transmission}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerSection: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  backIconStyle: {
    width: 20,
    height: 20,
  },
  dotsIconStyle: {
    width: 20,
    height: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "400",
  },
  imageSection: {
    height: 100,
  },
  vehicleImage: {
    width: "100%",
    height: 300,
  },
  headSection: {
    top: 250,
  },
  topTextArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  makeModelText: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    fontWeight: "400",
  },
  amount: {
    fontWeight: "bold",
  },
  typetranText: {
    marginTop: 5,
    color: "#696969",
    fontWeight: "600",
    fontSize: 14,
  },
});
