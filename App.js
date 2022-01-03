import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>HomeScreen</Text>
            <Button title='go to Detail' onPress={()=> navigation.navigate('Detail',{itemId:86,otherParam:'anything you want here',})}/>
            <Button title='go to Detail again' onPress={()=> navigation.push('Detail')}/>
            <Button title='go Home' onPress={()=> navigation.navigate('Home')}/>
        </View>
    );
};

function DetailScreen({route, navigation}){
    const{itemId,otherParam}=route.params;
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>DetailScreen</Text>
            <Button title='go to Detail again' onPress={()=> navigation.push('Detail')}/>
            <Button title='go to HomeScreen' onPress={()=> navigation.navigate('Home')}/>
            <Button title='go Back' onPress={()=> navigation.goBack()}/>
            <Button title='go back to first screen in stack' onPress={()=> navigation.popToTop('Detail')}/>
        </View>
    );
};

const Stack= createNativeStackNavigator();

function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' >
                <Stack.Screen name='Home' component={HomeScreen} options={{title:'set title as Home'}} />
                <Stack.Screen name='Detail' component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;