import React, { Component } from 'react'
import { AppRegistry, View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native'


class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
]

const extractKey = ({id}) => id


export default class CounterScreen extends Component {
  static navigationOptions = {
    title: 'Counter',
  };

  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.text}>Make America great again!</Text>
        </View>

        <View style={styles.center}>
          <Image
            style={styles.image}
            source={{uri: 'http://cdn.iphonehacks.com/wp-content/uploads/2016/02/Donald-Trump.jpg'}} />
          </View>

        <View style={styles.center}>
          <Counter color={'steelblue'} size={80} />
          <Counter color={'darkblue'} size={160} />
        </View>

        <View style={styles.boxLarge} />

        <ScrollView horizontal>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>

        <View style={styles.center}><Text style={styles.text}>FlatList:</Text></View>

      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 200,
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'green',
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'red',
  },
})

AppRegistry.registerComponent('App', () => App)