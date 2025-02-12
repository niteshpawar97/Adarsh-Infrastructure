import "../styles/globals.css"; // ✅ Correct place to import global styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
