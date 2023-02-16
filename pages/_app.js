import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/app/store.js";

function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script src="/example.js" strategy="beforeInteractive" /> */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
