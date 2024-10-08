import {mapNavigations} from '@/constants';
import MapHomeScreen from '@/screens/Map/MapHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
export type MapStackParamList = {
  [mapNavigations.MAP_HOME]: undefined;
};
const Stack = createStackNavigator<MapStackParamList>();
function MapStackNavigator() {
    
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          shadowColor: 'gray',
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={mapNavigations.MAP_HOME}
        component={MapHomeScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default MapStackNavigator;