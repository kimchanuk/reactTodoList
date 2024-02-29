import { useContext } from 'react';
import './App.css';
import Main from './components/Main/Main';
import { DarkModeContext } from './context/DarkMode/DarkMode';
import { TodoDataContext } from './context/TodoData/TodoData';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'App_dark' : 'App_light'}>
      <Main />
    </div>
  );
}

export default App;
