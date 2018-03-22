import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import api from 'services/api';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    loadRepositories: PropTypes.func.isRequired,
  };

  state = {
    repository: '',
  };

  addRepository = async () => {
    const { repository } = this.state;

    if (repository.length === 0) return;

    console.tron.log(repository);

    const response = await api.get(`/repos/${repository}`);
    const newRepository = this.addRespository(response);

    let repositories = await AsyncStorage.getItem('@Github:repositories');
    repositories = repositories !== null ? JSON.parse(repositories) : [];
    repositories = [...repositories, newRepository];

    await AsyncStorage.setItem('@Github:repositories', JSON.stringify(repositories));
    this.props.loadRepositories();
    this.setState({ repository: '' });
  };

  addRespository = response => (
    {
      id: response.data.id,
      name: response.data.full_name,
      organization: response.data.organization ? response.data.organization.login : response.data.owner.login,
      avatar: response.data.organization ? response.data.organization.avatar_url : response.data.owner.avatar_url,
    }
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar repositório"
            underlineColorAndroid="transparent"
            value={this.state.repository}
            onChangeText={repository => this.setState({ repository })}
          />
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={this.addRepository}>
            <Icon name="plus" size={16} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
