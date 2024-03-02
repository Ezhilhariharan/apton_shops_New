import Router from './routes/Index';
import GlobalLoader from './components/commonComponents/Loader/globalLoader';
import Toast from './components/commonComponents/toast/ToastWrapper';
// import { useState, useEffect } from 'react';

function App() {
  // const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   toggleTheme();
  // }, [theme]);

  // const toggleTheme = () => {
  //   if (theme === 'dark') {
  //     document.querySelector('body').setAttribute('theme', 'dark');
  //   } else {
  //     document.querySelector('body').setAttribute('theme', 'light');
  //   }
  // };
  return (
    <>
      <GlobalLoader />
      <Router />
      <Toast />
    </>
  );
}

export default App;
