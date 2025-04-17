import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text italic bold preset="headingLarge">
            Coffstack
          </Text>
          <Button preset='primary' title="Primary" marginBottom='s12' />
          <Button preset='primary' disabled title="Primary" marginBottom='s12' />
          <Button preset='outline' title="Outline" marginBottom='s12' />
          <Button preset='outline' disabled title="Outline" marginBottom='s12' />
          <Button loading title="Lading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
