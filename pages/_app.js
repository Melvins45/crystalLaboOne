import Layout from '../components/layouts/Layout' 
import "react-responsive-carousel/lib/styles/carousel.min.css" 
import 'bootstrap/dist/css/bootstrap.css';

 export default function App({ Component, pageProps }){
  return <Layout>
           <Component {...pageProps} />
         </Layout>
 }