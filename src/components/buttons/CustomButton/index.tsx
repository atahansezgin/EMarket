import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';

type CustomButtonProps = TouchableOpacityProps & {
  label: string;
};

const CustomButton: FC<CustomButtonProps> = props => {
  return (
    <TouchableOpacity {...props} style={[props.style, styles.container]}>
      <Text style={styles.label}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;