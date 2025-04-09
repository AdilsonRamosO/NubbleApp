import React from 'react';
// import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../Box/Box';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
    const {colors} = useTheme<Theme>();

  return (
    <Box
      backgroundColor='buttonPrimary'
      paddingHorizontal='s20'
      // style={{
      //   paddingHorizontal: 20,
      //   paddingVertical: 10,
      //   backgroundColor: colors.carrotSecondary,
      //   alignItems: 'center',
      //   borderRadius: 16
      // }}
      >
      <Text preset='paragraphMedium' bold style={{color: 'white'}}>{title}</Text>
    </Box>
  );
}

