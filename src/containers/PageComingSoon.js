import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class PageComingSoon extends Component {
  static navigationOptions = {
    tabBarLabel: '即將上映',
  };

  render() {
    return (
      <ScrollView>
        <Text>Just like tt</Text>
      </ScrollView>
    );
  }
}
