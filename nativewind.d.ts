// src/types/nativewind.d.ts or just in root
import { NativeWindStyleSheet } from 'nativewind/types';
import 'react-native';

declare module 'react-native' {
  interface ViewProps extends NativeWindStyleSheet {}
  interface TextProps extends NativeWindStyleSheet {}
  interface ImageProps extends NativeWindStyleSheet {}
  interface ScrollViewProps extends NativeWindStyleSheet {}
  interface TouchableOpacityProps extends NativeWindStyleSheet {}
}