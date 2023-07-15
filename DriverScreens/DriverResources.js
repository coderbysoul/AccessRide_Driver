import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import * as Linking from "expo-linking";

const DriverResources = () => {
  const [tutorialVideos, setTutorialVideos] = useState([
    {
      id: 1,
      title: "Introduction to Accessibility",
      thumbnail: require("../assets/thumbnail1.png"),
      url: "https://www.youtube.com/watch?v=j6zotzE6Qkg",
    },
    {
      id: 2,
      title: "Assisting Passengers with Mobility Devices",
      thumbnail: require("../assets/thumbnail2.png"),
      url: "https://www.youtube.com/watch?v=xI1j1V1SyjE",
    },
    {
      id: 3,
      title: "Communication Techniques with Deaf Passengers",
      thumbnail: require("../assets/thumbnail3.png"),
      url: "https://www.youtube.com/watch?v=ZxF_S3thP-4",
    },
  ]);

  const [tutorialModules, setTutorialModules] = useState([
    { id: 1, title: "Understanding Different Disabilities" },
    { id: 2, title: "Accessible Vehicle Features" },
    { id: 3, title: "Proper Use of Wheelchair Ramps" },
  ]);

  const [offlineTrainingSessions, setOfflineTrainingSessions] = useState([
    {
      id: 1,
      date: "2023-07-15",
      time: "10:00 AM - 12:00 PM",
      location: "Training Center A",
    },
    {
      id: 2,
      date: "2023-07-20",
      time: "2:00 PM - 4:00 PM",
      location: "Training Center B",
    },
    {
      id: 3,
      date: "2023-07-25",
      time: "9:00 AM - 11:00 AM",
      location: "Training Center A",
    },
  ]);

  const [progress, setProgress] = useState(75);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.lowerView}>
          <Text style={styles.heading}>Driver Resources</Text>
          <Text style={styles.sectionHeading}>Progress Report</Text>
          <Text style={styles.progressText}>Your progress: {progress}%</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressValue, { width: `${progress}%` }]} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Tutorial Videos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {tutorialVideos.length > 0 ? (
                tutorialVideos.map((item) => (
                  <TouchableOpacity
                    style={styles.videoCard}
                    key={item.id}
                    onPress={() => {
                      Linking.canOpenURL(item.url).then((supported) => {
                        if (supported) {
                          Linking.openURL(item.url);
                        } else {
                          console.log(
                            "Don't know how to open URI: " + item.url
                          );
                        }
                      });
                    }}
                  >
                    <Image style={styles.thumbnail} source={item.thumbnail} />
                    <Text style={styles.resourceTitle}>{item.title}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.emptyText}>
                  No tutorial videos available.
                </Text>
              )}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Tutorial Modules</Text>
            {tutorialModules.length > 0 ? (
              tutorialModules.map((item)=>{return(
                <TouchableOpacity style={styles.resourceItem} key={item.id}>
                    <Text style={styles.resourceTitle}>{item.title}</Text>
                  </TouchableOpacity>
              )})
            ) : (
              <Text style={styles.emptyText}>
                No tutorial modules available.
              </Text>
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionHeading}>Offline Training Sessions</Text>
            {offlineTrainingSessions.length > 0 ? (
              offlineTrainingSessions.map((item)=>{
                return(
                  <View style={styles.trainingSessionItem} key={item.id}>
                    <Text style={styles.trainingSessionDate}>{item.date}</Text>
                    <Text style={styles.trainingSessionTime}>{item.time}</Text>
                    <Text style={styles.trainingSessionLocation}>
                      {item.location}
                    </Text>
                  </View>
                )
              })
            ) : (
              <Text style={styles.emptyText}>
                No offline training sessions available.
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DriverResources;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 65,
  },
  lowerView: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 15,
  },
  section: {
    marginTop: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  videoCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    width: 150,
  },
  thumbnail: {
    width: "100%",
    height: 100,
    marginBottom: 5,
    borderRadius: 8,
  },
  resourceItem: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  resourceTitle: {
    fontSize: 16,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
  },
  trainingSessionItem: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  trainingSessionDate: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  trainingSessionTime: {
    fontSize: 14,
    marginBottom: 5,
  },
  trainingSessionLocation: {
    fontSize: 14,
    color: "#888888",
  },
  progressText: {
    fontSize: 16,
    marginBottom: 5,
  },
  progressBar: {
    height: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    overflow: "hidden",
  },
  progressValue: {
    height: "100%",
    backgroundColor: "#b7de55",
  },
});
