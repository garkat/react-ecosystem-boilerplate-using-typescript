import * as React from 'react';
import { hydrate, render } from 'react-dom';

import App from '../shared/views/App';

const rootElement = document.getElementById('root');

if (module.hot) {
  const renderApp = (): void => {
    if (rootElement === null) {
      throw new Error('Element with id #root is not found.');
    }

    render(<App />, rootElement);
  };

  renderApp();

  module.hot.accept('../shared/views/App', () => {
    renderApp();
  });
} else {
  if (rootElement === null) {
    throw new Error('Element with id #root is not found.  ');
  }

  hydrate(<App />, rootElement);
}
