import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/app/store.js";
// // import Script from "next/script";
// import { wrapper } from "@/app/store";

// const { Provider } = require("react-redux");
// const { wrapper } = require("@/app/store");

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script src="/example.js" strategy="beforeInteractive" /> */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

// export default wrapper.withRedux(App);
