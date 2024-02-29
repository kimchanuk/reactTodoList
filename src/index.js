import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeContextProvider } from './context/DarkMode/DarkMode';
import { TodoDataContextProvider } from './context/TodoData/TodoData';
import {
  ResetModalContext,
  ResetModalContextProvider,
} from './context/resetModal/ResetModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeContextProvider>
    <ResetModalContextProvider>
      <TodoDataContextProvider>
        <App />
      </TodoDataContextProvider>
    </ResetModalContextProvider>
  </DarkModeContextProvider>
);

reportWebVitals();
