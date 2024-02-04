import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Cart, Detail, Search, Barcode, Like, Profile } from './src/screens/index';
import { icons } from './src/constants/index';


const App = () => {

  const Stack = createStackNavigator();

  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'INITIAL';

    if (routeName == 'Cart') {
      return false;
    }
    if (routeName == 'Detail') {
      return false;
    }
    return true;
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              display: getTabBarVisibility(route) ? 'flex' : 'none',
              position: 'absolute',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowColor: 'black',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 20,
              elevation: 10,
            },
            tabBarIcon: ({ focused }) => {
              let icon = "";
              let size = 24;

              if (route.name === 'INITIAL') {
                icon = focused ? icons.home_active : icons.home;
                size = 24;
              } else if (route.name === 'Search') {
                icon = focused ? icons.search_active : icons.search;
                size = 24;
              } else if (route.name === 'Barcode') {
                icon = icons.barcode;
                size = 20;
              } else if (route.name === 'Like') {
                icon = focused ? icons.like_active : icons.like;
                size = 24;
              } else if (route.name === 'Profile') {
                icon = focused ? icons.profile_active : icons.profile;
                size = 24;
              }

              if (route.name === 'Barcode') {
                return (
                  <View style={styles.footerMainButton}>
                    <Image source={icon} resizeMode="contain" style={{ width: size }} />
                  </View>
                )
              } else {
                return (
                  <Image source={icon} resizeMode="contain" style={{ width: size }} />
                )
              }
            }
          })}
        >
          <Tab.Screen name="INITIAL" component={StackNavigator} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Barcode" component={Barcode} />
          <Tab.Screen name="Like" component={Like} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  footerIconStyle: {},
  footerMainButton: {
    position: 'absolute',
    top: -25,
    width: 65,
    height: 65,
    borderWidth: 4,
    borderColor: '#EBEBEB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FF0000',
  }
});

export default App;
