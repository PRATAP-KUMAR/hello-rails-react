import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GreetingPage from './components/GreetingPage';

import store from './redux/configureStore';

function App() {
  return (
    <Routes>
      <h1>Thank You</h1>
      <Route path="/" element={<GreetingPage />} />
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />,
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)


