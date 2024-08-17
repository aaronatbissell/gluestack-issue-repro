import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';
import { AddIcon, CheckIcon, CheckIcon2, CircleIcon, Icon } from './components/ui/icon';

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <View style={{flex: 1}}>
        <Text>Open up App.tsx to start working on your app!</Text>
        </View>
        <View style={{flex: 3, flexDirection: 'row'}}>
        <Icon as={CheckIcon2} size='sm' className='text-typography-red'/>
        <Icon as={CheckIcon} className='text-typography-500' />
        </View>
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
