import { StatusBar } from 'expo-status-bar'
import { ImageBackground } from 'react-native'

import blurBg from './src/assets/bg-blur.png'

export default function App() {
  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StatusBar translucent />
    </ImageBackground>
  )
}
