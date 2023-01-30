import React from 'react';
import {I18nManager} from 'react-native';
import '../__mock__/mig';

import AppNavigation from './navigations';

I18nManager.allowRTL(false);

const App = () => <AppNavigation />;

export default App;
