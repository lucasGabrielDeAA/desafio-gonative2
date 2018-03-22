import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class RespositoryItem extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      organization: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,

    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  goToRepository = () => {
    this.props.navigation.navigate('Issues', { repository: this.props.repository });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: this.props.repository.avatar }} />
        <View style={styles.data}>
          <Text style={styles.name}>{this.props.repository.name}</Text>
          <Text style={styles.organization}>{this.props.repository.organization}</Text>
        </View>
        <TouchableOpacity onPress={this.goToRepository}>
          <Icon name="chevron-right" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default RespositoryItem;
