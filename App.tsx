import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';
import { AddIcon, CheckIcon, CheckIcon2, CircleIcon, Icon } from './components/ui/icon';

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Open up App.tsx to start working on your app!</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <View style={{flex: 1}}>
            {/* Check Icon that needs to be "filled" */}
            <Icon as={CheckIcon2} size='xl' className='text-typography-black'/>
          </View>
          {/* Gluestack Check Icon (only needs `stroke`) */}
          <View style={{flex: 1}}>
            <Icon as={CheckIcon} size='xl' className='text-tertiary-500' />
          </View>
        </View>
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
