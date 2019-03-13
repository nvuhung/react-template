import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';

import './styles/App.scss';

import RouteConfig from './configs/RouteConfig';
import store from './redux';

export default class App extends React.Component {
  componentDidMount() {
    i18n.on('languageChanged', () => this.forceUpdate());
  }

  componentWillUnmount() {
    i18n.off('languageChanged', () => this.forceUpdate());
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <RouteConfig />
        </Provider>
      </I18nextProvider>
    );
  }
}
