import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';

function App() {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{color: 'red'}}>
        Hello World
      </Text>
      <Text preset="paragraphCaption" style={{color: 'red'}}>
        Hello World
      </Text>
      <Text preset="paragraphMedium">Hello World</Text>
    </SafeAreaView>
  );
}

export default App;
