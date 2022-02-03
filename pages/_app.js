import '../styles/globals.css'
import { CookiesProvider } from "react-cookie"

// Start point for each page
function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
    )
}

export default MyApp
