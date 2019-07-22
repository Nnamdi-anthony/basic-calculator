/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

const App = () => {
  constructor (props){
    super(props)
    this.state={
      first: null,
      second: null,
      total: null
    }
  }

  onAddition(){
        const {first, second} = this.state

        const total = Number(first) + Number(second)
        this.setState{(total : total)}
  }

  onSubtraction(){
        const {first, second} = this.state

        const total = Number(first) - Number(second)
        this.setState{(total : total)}
  }

  onMultiplication(){
        const {first, second} = this.state

        const total = Number(first) * Number(second)
        this.setState{(total : total)}
  }

  onDivision(){
        const {first, second} = this.state

        const total = Number(first) / Number(second)
        this.setState{(total : total)}
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="write first number.." values={this.state.first} onChangeText={text => this.setState({first:text})}/>
      <TextInput placeholder="write second number.." values={this.state.second} onChangeText={text => this.setState({second:text})}/>
      <Button title="+" onPress={this.onAddition.bind(this)}/>
      <Button title="-" onPress={this.onSubtraction.bind(this)}/>
      <Button title="*" onPress={this.onMultiplication.bind(this)}/>
      <Button title="/" onPress={this.onDivision.bind(this)}/>
      <Text>{this.state.total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default App;
