import React from 'react';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {Box, TouchableOpacityBox} from '../Box/Box';
import {ActivityIndicator} from 'react-native';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="carrotSecondary"
      paddingHorizontal="s20"
      height={50}
      alignItems='center'
      justifyContent='center'
      borderRadius='s16'
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: 'white'}}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
