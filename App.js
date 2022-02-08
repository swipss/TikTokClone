import { SafeAreaView, StatusBar, View } from 'react-native';
import 'react-native-gesture-handler'
import Home from './src/screens/Home/Home';

import Navigation from './src/navigation/navigation';
import RootNavigation from './src/navigation/navigation';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <RootNavigation />
    </SafeAreaView>
    
  );
}


