import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import SearchHeader from './components/SearchHeader';
import RepositoryItem from './components/RepositoryItem';

import styles from './styles';

class Repositories extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    header: <SearchHeader { ...navigation.state.params } />,
  });

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.props.navigation.setParams({ loadRepositories: this.loadRepositories });
    await this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const repositories = await AsyncStorage.getItem('@Github:repositories');

    console.tron.log(repositories);
    this.setState({
      data: repositories !== null ? JSON.parse(repositories) : [],
      loading: false,
      refreshing: false,
    });
  }

  renderListItem = ({ item }) => (
    <RepositoryItem repository={item} navigation={this.props.navigation} />
  );

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepositories}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View>
          { this.state.loading ?
            <ActivityIndicator style={styles.loading} />
            : this.renderList()
          }
        </View>
      </View>
    );
  }
}

export default Repositories;
