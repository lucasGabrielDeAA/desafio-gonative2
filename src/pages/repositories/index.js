import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Proptypes from 'prop-types';

import api from 'services/api';

class Repositories extends Component {
    static navigationOptions = {
      header: null,
    };

    state = {
      data: [],
      loading: true,
      refreshing: false,
    };

    render() {
      return <View />;
    }
}

export default Repositories;
