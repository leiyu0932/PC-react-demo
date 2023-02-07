import React from 'react';
import ReactDOM from 'react-dom/client'
import App from '@/App';

import { Provider } from 'mobx-react';
import * as stores from '@/store/index';

class ErrorBoundary extends React.Component {

  componentDidCatch(error) {
    if (error?.name === 'ChunkLoadError') {
      window.location.reload();
    }
  }

  render() {
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider {...stores}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
)
