import React from 'react';
import Calendar from './src/page/Calendar'
import HomePage from './src/page/HomePage';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#0057b8'

          }}
        >
          <Tab.Screen name="Home" options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHome} color={color} />
            )

          }} component={HomePage} />
          <Tab.Screen name="Calendar" options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faCalendarDays} color={color} />
            )
          }} component={Calendar} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>



  );
};

export default App;