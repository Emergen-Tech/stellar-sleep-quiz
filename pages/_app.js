import { store } from '@/app/store.js';
import '@/styles/globals.css';
import { Provider } from 'react-redux';

function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
