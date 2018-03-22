import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.light,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.basePadding,
    padding: 5,
    borderRadius: metrics.baseRadius,
  },
  filter: {
    color: colors.dark,
  },
  active: {
    fontWeight: 'bold',
  },
});

export default styles;
