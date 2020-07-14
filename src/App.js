import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Button as RNButton } from "./components/native";
import { Button as RNEButton } from "react-native-elements";

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

const Link = ({ style, ...rest }) => (
  <Text
    {...rest}
    accessibilityRole="link"
    style={StyleSheet.compose(styles.link, style)}
  />
);

const App = () => (
  <>
    <style type="text/css">
      {`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
        }
        @font-face {
          font-family: 'FontAwesome';
          src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
        }
      `}
    </style>
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>React Native for Web</Text>
      </View>
      <Text style={styles.text}>
        This is an example of an app built with{" "}
        <Link href="https://github.com/facebook/create-react-app">
          Create React App
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/necolas/react-native-web">
          React Native for Web
        </Link>
      </Text>
      <Text style={styles.text}>
        To get started, edit{" "}
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          src/App.js
        </Link>
        .
      </Text>
      <Button onPress={() => {}} title="Example button" />
      <RNButton
        textColor="white"
        backgroundColor="#C91F37"
        onPress={() => console.log("Clicked Native Button")}
      >
        Native Button
      </RNButton>
      <RNEButton title="I'm a button from React Native Elements" />
    </View>
  </>
);

export default App;
