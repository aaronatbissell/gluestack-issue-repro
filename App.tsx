import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';
import { AddIcon, CheckIcon, CheckIcon2, CircleIcon, Icon } from './components/ui/icon';

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            {/* Check Icon that needs to be "filled" */}
            <Icon as={CheckIcon2} size='sm' className='text-black'/>
          </View>
          {/* Gluestack Check Icon (only needs `stroke`) */}
          <View style={{flex: 1}}>
            <Icon as={CheckIcon} size='sm' className='text-black' />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
