module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-private-methods', { loose: true }],  // loose 설정 추가
    ['@babel/plugin-transform-class-properties', { loose: true }], // loose 설정 추가
    ['@babel/plugin-transform-private-property-in-object', { loose: true }], // loose 설정 추가
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
