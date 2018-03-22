import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  AsyncStorage,
} from 'react-native';

import api from 'services/api';

import FilterList from './components/FilterList';
import IssueItem from './components/IssueItem';

import styles from './styles';

class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.repository.name,
  });

  state = {
    repository: null,
    issues: [],
    loading: true,
    refreshing: false,
    filter: 'all',
  };

  async componentDidMount() {
    const { repository } = this.props.navigation.state.params;
    const filter = await AsyncStorage.getItem('@Github:filter');
    this.setState({ repository, filter }, this.loadIssues);
  }

  componentDidUpdate(oldProp, oldState) {
    const { filter } = this.state;
    if (oldState.filter !== filter) {
      this.loadIssues();
    }
  }

  handleFilterUpdate = async ({ filter }) => {
    await AsyncStorage.setItem('@Github:filter', filter);
    this.setState({ filter });
  };

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { repository, filter } = this.state;

    const response = await api.get(`repos/${repository.name}/issues`, {
      params: { state: filter },
    });

    const issues = response.data.map(issue => ({
      title: issue.title,
      author: issue.user.login,
      avatar: issue.user.avatar_url,
      html_url: issue.html_url,
    }));

    this.setState({ issues, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => (
    <FlatList
      data={this.state.issues}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadIssues}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FilterList updateFilter={this.handleFilterUpdate} selectedFilter={this.state.filter} />
        { this.state.loading ?
          <ActivityIndicator style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}

export default Issues;
