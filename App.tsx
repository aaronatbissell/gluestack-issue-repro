import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';
import { AddIcon, CheckIcon, CheckIcon2, ChevronDownIcon, CircleIcon, createIcon, Icon } from './components/ui/icon';
import { Path, Rect } from 'react-native-svg';
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectFlatList, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from './components/ui/select';
import { Input, InputField } from './components/ui/input';

export default function App() {

  const GluestackIcon = createIcon({
    // createIcon function is imported from '@gluestack-ui/themed'
    viewBox: "0 0 32 32",
    path: (
      <>
        {/* Rect, Path is imported from 'react-native-svg' */}
        <Rect width="32" height="32" rx="2" fill="currentColor" />
        <Path
          d="M9.5 14.6642L15.9999 9.87633V12.1358L9.5 16.9236V14.6642Z"
          fill="white"
        />
        <Path
          d="M22.5 14.6642L16.0001 9.87639V12.1359L22.5 16.9237V14.6642Z"
          fill="white"
        />
        <Path
          d="M9.5 19.8641L15.9999 15.0763V17.3358L9.5 22.1236V19.8641Z"
          fill="white"
        />
        <Path
          d="M22.5 19.8642L16.0001 15.0764V17.3358L22.5 22.1237V19.8642Z"
          fill="white"
        />
      </>
    ),
  });

  let options = [];
  for(let i=0; i<100; i++){
    options.push({
      label: `Testing ${i}`,
      value: `t${i}`,
        });
  }
  
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Open up App.tsx to start working on your app!</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          {/* <View style={{flex: 1}}>
            <Icon as={CheckIcon2} size='xl' className='text-tertiary-500' />
            <Icon as={CheckIcon2} size='xl' className='text-primary-500' />
            <Icon as={CheckIcon2} size='xl' className='text-secondary-500' />
            <Icon as={CheckIcon2} size='xl' className='text-typography-950' />
            <Icon as={GluestackIcon} size="xl" className="text-tertiary-500" />
          </View>
          <View style={{flex: 1}}>
            <Icon as={CheckIcon} size='xl' className='text-tertiary-500' />
            <Icon as={CheckIcon} size='xl' className='text-primary-500' />
            <Icon as={CheckIcon} size='xl' className='text-secondary-500' />
            <Icon as={CheckIcon} size='xl' className='text-typography-950' />
          </View> */}
          <View style={{flex: 1, backgroundColor: 'grey'}}>
            {/* <Select selectedValue={options[1].value} initialLabel={options[1].label} isRequired={true}>
              <SelectTrigger variant="outline" size="xl">
                <SelectInput placeholder="Select option" />
                <SelectIcon className="mr-3" as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal snapPoints={[75]}>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectFlatList
                    data={options}
                    renderItem={({item}) => (
                      <SelectItem label={item.label} value={item.value} />
                    )}
                    keyExtractor={item => item.value}
                  />
                </SelectContent>
              </SelectPortal>
            </Select> */}
            <Input className='data-[focus=true]:border-custom-test'>
            <InputField className='text-custom-test' />
            </Input>
            <Input className='data-[focus=true]:border-tertiary-500'>
            <InputField className='text-tertiary-500'/>
            </Input>
            <Input className='data-[focus=true]:border-indicator-error'>
            <InputField  className='text-indicator-error'/>
            </Input>
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
