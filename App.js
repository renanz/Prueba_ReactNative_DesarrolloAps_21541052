import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
    temp.push(this.state.label);
    this.setState({
        textList: temp,
        label: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={this.row}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            editable = {true}
            onChangeText={(text) => this.setState({
              textList: this.state.textList,
              label: text
            })}
            placeholder='Write a Todo'
            value={this.state.label}
          />
          <Button title="+" onPress={this.onPress}/>
        </View>
        {this.state.textList.map(data=> (
          <Text>{data}</Text>
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
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
});
