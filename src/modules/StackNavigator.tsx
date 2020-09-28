import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetail from './book-detail/BookDetail';
import { TabNavigator } from './TabNavigator';

const Stack = createStackNavigator();

export const StackNavigator = (): JSX.Element => {
    return (
        <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen options={{ headerShown: false }} name="Tabs" component={TabNavigator} />
            <Stack.Screen options={{ headerShown: false }} name="Detail" component={BookDetail} />
        </Stack.Navigator>
    );
}