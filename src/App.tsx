import 'react-native-gesture-handler';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './modules/StackNavigator';
import thunk from 'redux-thunk';
import { Root } from 'native-base';
import { loadFavoriteList } from './store/book/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {

  componentDidMount() {
    // @ts-ignore
    store.dispatch(loadFavoriteList());
  }

  render() {
    return (
      <Root>
        <Provider store={store}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </Provider>
      </Root>
    );
  }
}

export default App;
