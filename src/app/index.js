import ReactDom from 'react-dom';
import React from 'react';

import App from './App';
import LimitWrapper from './components/Limit/LimitWrapper';

window.onload = function() {
  const appEl = document.getElementById('cs-ai-product');
  if(appEl) {
    ReactDom.render(<App />, appEl);
  }

  const limitEl = document.getElementById('cs-ai-limit');
  if(limitEl) {
    ReactDom.render(<LimitWrapper />, limitEl);
  }
};
