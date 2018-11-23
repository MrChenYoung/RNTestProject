import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HomePage extends Component<Props> {


  render(){
    let text = this.props.navigation.state.params.user;

    return (
      <Text>{text}</Text>
    );
  }
}
