import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textList: [], label: '' };
  }
  
  onPress = () => {
    let temp = [];
    const tempList = this.state.textList;
    for (let index = 0; index < tempList.length; index += 1) {
      temp.push(tempList[index]);
    }
    if(this.state.label)
      temp.push(this.state.label);
    this.setState({
        textList: temp,
        label: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            style={styles.textInput}
            editable = {true}
            onChangeText={(text) => this.setState({
              textList: this.state.textList,
              label: text
            })}
            placeholder='Write a Todo'
            value={this.state.label}
          />
          <Button style={styles.bt} title="+" onPress={this.onPress}/>
        </View>
        
        {this.state.textList.map((data, key)=> (
            <View key={key} style={styles.withBottomBorder}>
              <Text >{data}</Text>
            </View>
          ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40
  },
  row: {
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1,
    width: 0.4 * width,
    marginLeft: 0.2
  },
  bt: {
    flex: 1,
    width: 0.6 * width
  },
  withBottomBorder: {
    borderBottomColor: '#bbb',
    borderBottomWidth: 2,
  }
});
