import '../styles/globals.css'
import { UserContextProvider } from '../context/UserContext'

import Layout from "../component/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}
export default MyApp;
