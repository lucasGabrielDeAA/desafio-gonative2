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
    justifyContent: 'flex-start',
    flexGrow: 1,
    paddingHorizontal: metrics.basePadding,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
  organiztion: {
    fontSize: 12,
    color: colors.regular,
  },
  icon: {
    color: colors.darker,
  },
});

export default styles;
