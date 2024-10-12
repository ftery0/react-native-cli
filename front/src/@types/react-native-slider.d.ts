declare module 'react-native-slider' {
    import { Component } from 'react';
    import { ViewStyle } from 'react-native';
  
    interface SliderProps {
      value?: number;
      onValueChange?: (value: number) => void;
      step?: number;
      minimumValue?: number;
      maximumValue?: number;
      minimumTrackTintColor?: string;
      maximumTrackTintColor?: string;
      thumbTintColor?: string;
      style?: ViewStyle;
    }
  
    export default class Slider extends Component<SliderProps> {}
  }
  