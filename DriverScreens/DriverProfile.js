import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DriverProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [licenseNumber, setLicenseNumber] = useState("ABC123456");
  const [carMake, setCarMake] = useState("Toyota");
  const [carModel, setCarModel] = useState("Camry");
  const [carNumber, setCarNumber] = useState("WB 02 F 6787");
  const [carYear, setCarYear] = useState(2022);
  const [carColor, setCarColor] = useState("Silver");
  const [rating, setRating] = useState(4.5);
  const [totalTrips, setTotalTrips] = useState(128);
  const [age, setAge] = useState(35);
  const [aadhar, setAadhar] = useState("1234 5678 9012");
  const [zone, setZone] = useState("North Kolkata");
  const [gender, setGender] = useState("Female");

  return (
    <View style={styles.container}>
      {/* <View style={styles.upperView}>
        <Icon name="chevron-left" style={styles.icon} />
        <View style={styles.photoContainer}>
          <Image
            source={require("../assets/driver.jpg")} // Replace with the correct image path
            style={styles.photo}
          />
        </View>
        <Icon name="cog" style={styles.settingsIcon} />
      </View> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={{ height: 180 }}>
            <Image
              style={styles.profileImg}
              source={require("../assets/driver.jpg")}
            />
          </View>
          <View style={styles.lowerView}>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Name</Text>
              <Text style={styles.lightText}>{name}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Age</Text>
              <Text style={styles.lightText}>{age}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Gender</Text>
              <Text style={styles.lightText}>{gender}</Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Email Address</Text>
              <Text style={styles.lightText}>{email}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Phone Number</Text>
              <Text style={styles.lightText}>{phoneNumber}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>License Number</Text>
              <Text style={styles.lightText}>{licenseNumber}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Aadhar Number</Text>
              <Text style={styles.lightText}>{aadhar}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Car Make</Text>
              <Text style={styles.lightText}>{carMake}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Car Model</Text>
              <Text style={styles.lightText}>{carModel}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Car Number</Text>
              <Text style={styles.lightText}>{carNumber}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Car Year</Text>
              <Text style={styles.lightText}>{carYear}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Car Color</Text>
              <Text style={styles.lightText}>{carColor}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Rating</Text>
              <Text style={styles.lightText}>{rating} / 5.0</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Total Trips</Text>
              <Text style={styles.lightText}>{totalTrips}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.headingText}>Zone</Text>
              <Text style={styles.lightText}>{zone}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DriverProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom : 75
  },

  upperView: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // backgroundColor: "#b7ed55",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    // paddingTop: 40,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    // zIndex: 1,
  },
  icon: {
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 80,
    marginTop: 20, // Adjust the marginTop as desired
  },
  photoContainer: {
    position: "relative",
    marginBottom: 20, // Adjust the marginBottom as desired
  },
  settingsIcon: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "auto",
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  contentContainer: {
    flex: 6,
  },
  lowerView: {
    flex: 4,
    backgroundColor: "white",
    paddingHorizontal: 40,
    // paddingTop: 60,
    // marginTop: 150,
  },
  detailItem: {
    marginBottom: 10,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  lightText: {
    color: "#a8a8a8",
    backgroundColor: "#f5f5f5",
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  profileImg: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 140 / 2,
  },
});
