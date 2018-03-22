import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class FilterList extends Component {
  static propTypes = {
    updateFilter: PropTypes.func.isRequired,
    selectedFilter: PropTypes.string.isRequired,
  };

  selectFilter = ({ filter }) => {
    this.props.updateFilter({ filter });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.selectFilter({ filter: 'all' })}>
          <Text style={[styles.filter, this.props.selectedFilter === 'all' && styles.active]}>
            Todas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.selectFilter({ filter: 'open' })}>
          <Text style={[styles.filter, this.props.selectedFilter === 'open' && styles.active]}>
            Abertas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.selectFilter({ filter: 'closed' })}>
          <Text style={[styles.filter, this.props.selectedFilter === 'closed' && styles.active]}>
            Fechadas
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FilterList;
