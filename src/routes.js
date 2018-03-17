import { StackNavigator } from 'react-navigation';

import Issues from 'pages/issues';
import Repositories from 'pages/repositories';

const Routes = StackNavigator({
  Repositories: {
    screen: Repositories,
  },
  Issues: {
    screen: Issues,
  },
}, {
  initialRouteName: 'Repositories',
});

export default Routes;
