import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssueItem = ({ issue }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: issue.avatar }} />
    <View style={styles.data}>
      <View style={styles.limiter}>
        <Text style={styles.title} numberOfLines={1}>
          {issue.title}
        </Text>
      </View>
      <Text style={styles.author}>{issue.author}</Text>
    </View>
    <TouchableOpacity onPress={() => Linking.openURL(issue.html_url)}>
      <Icon name="chevron-right" size={20} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default IssueItem;
