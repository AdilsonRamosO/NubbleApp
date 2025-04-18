import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
// import {Button} from './src/components/Button/Button';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
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
          <EyeOffIcon />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
