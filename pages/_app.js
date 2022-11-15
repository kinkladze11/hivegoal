import App from 'next/app'

import GlobalStateWrapper from '../global_state'

import '../styles/form.css'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateWrapper>
      <Component {...pageProps} />
    </GlobalStateWrapper>
  )
}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext)
//
//   return { ...appProps }
// }
export default MyApp
