import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Catalog from './catalog/Catalog';
import Favorites from './favorites/Favorites';
import { Icon } from 'native-base';
import { NavigationContainerRef } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const TabNavigator = ({ navigation }: { navigation:  NavigationContainerRef }): JSX.Element => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{ tabBarIcon: () => (<Icon type="Ionicons" name="book-sharp" />) }} name="Catalog" component={Catalog} />
            <Tab.Screen options={{ tabBarIcon: () => (<Icon type="Ionicons" name="heart" />) }} name="Favorites" component={Favorites} />
        </Tab.Navigator>
    );
}