import Layout from '../components/layouts/Layout' 
import {ActivePageProvider} from '../utils/context/context'
import "react-responsive-carousel/lib/styles/carousel.min.css" 
import 'bootstrap/dist/css/bootstrap.css';
import GlobalStyle from '../utils/styles/GlobalStyle'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

 export default function App({ Component, pageProps }){
  return <ActivePageProvider>
           <Layout>
             <GlobalStyle/>
             <Component {...pageProps} />
           </Layout>
         </ActivePageProvider>
 }