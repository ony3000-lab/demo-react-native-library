import { Text, View, type TextProps, type ViewProps } from 'react-native';

export function multiply(a: number, b: number): number {
  return a * b;
}

type BoxProps = ViewProps & {
  textProps?: Omit<TextProps, 'children'>;
};

export function Box({ children, textProps, ...otherProps }: BoxProps) {
  return (
    <View {...otherProps}>
      <Text {...textProps}>{children}</Text>
    </View>
  );
}
