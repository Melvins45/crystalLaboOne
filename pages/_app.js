import Layout from '../components/layouts/Layout' 
import "react-responsive-carousel/lib/styles/carousel.min.css" 
import 'bootstrap/dist/css/bootstrap.css';
import GlobalStyle from '../utils/styles/GlobalStyle'

 export default function App({ Component, pageProps }){
  return <Layout>
           <GlobalStyle/>
           <Component {...pageProps} />
         </Layout>
 }