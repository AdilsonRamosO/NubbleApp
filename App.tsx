import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text italic bold preset="headingLarge">
            Coffstack
          </Text>

          <Box marginBottom="s24">
            <Button title="Entrar" />
          </Box>
          <Button loading title="Lading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
