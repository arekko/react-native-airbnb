import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  TextInput,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Explore extends React.Component {
  componentWillMount() {
    this.startHeaderHight = 80;
    this.marginHeader = 10;
    if (Platform.OS === "android") {
      // this.startHeaderHight = 100 + StatusBar.currentHeight;
      this.marginHeader = StatusBar.currentHeight + 10;
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: this.startHeaderHight,
              marginTop: this.marginHeader,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 20 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try Helsinki"
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  fontWeight: "700",
                  backgroundColor: "white"
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
