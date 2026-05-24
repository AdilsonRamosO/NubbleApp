import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';

function App() {
  return (
    <SafeAreaView>
      <Text preset="paragraphMedium" italic bold>
        Coffstack
      </Text>
      <Text preset="headingLarge" italic >Coffstack</Text>
      <Text preset="paragraphMedium">Coffstack</Text>
    </SafeAreaView>
  );
}

export default App;
