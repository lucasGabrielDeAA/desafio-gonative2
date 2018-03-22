import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingVertical: metrics.baseMargin,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  item: {
    marginTop: metrics.basePadding * 2,
  },
});

export default styles;
