import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


import { initialState, reducer } from './context';
import { Favorites, Restaurants } from './pages';

const Tab = createBottomTabNavigator();

const store = createStore(reducer, initialState)


function Router() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="RestaurantsPage"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ _, color, size }) => {
              let iconName;

              if (route.name === 'FavoritesPage') {
                iconName = "gratipay"
              } else if (route.name === 'RestaurantsPage') {
                iconName = "cutlery"
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="FavoritesPage" component={Favorites} options={{ title: 'Favori Mekanlar' }} />
          <Tab.Screen name="RestaurantsPage" component={Restaurants} options={{ title: 'Restoranlar' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default Router;