import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen'; // Make sure this path is correct
import NewsList from './News';
import BlogList from './Blogs';
import BlogDetail from './BlogDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index" component={HomeScreen} />
      <Stack.Screen name="News" component={NewsList} />
      <Stack.Screen name="Blogs" component={BlogList} />
      <Stack.Screen name="Blog Details" component={BlogDetail} />
      {/* Other screens */}
    </Stack.Navigator>
  );
}
