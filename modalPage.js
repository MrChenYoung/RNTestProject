import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './HomePage';

const StackNavigatorRouteConfig = {
  page1:{
    screen:HomePage
  }
}

const MyStackNavigation = StackNavigator(StackNavigatorRouteConfig,{initialRouteParams:{user: 'Join'}});
export default MyStackNavigation;
