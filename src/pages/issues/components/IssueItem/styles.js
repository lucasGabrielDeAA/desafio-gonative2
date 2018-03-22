import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.basePadding,
  },
  avatar: {
    width: 45,
    height: 45,
  },
  data: {
    flexGrow: 1,
    paddingHorizontal: metrics.basePadding,
  },
  limiter: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
    flex: 1,
  },
  author: {
    fontSize: 12,
    color: colors.regular,
  },
  icon: {
    color: colors.darker,
  },
});

export default styles;
