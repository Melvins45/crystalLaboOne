import Template from'../../components/layouts/Template-Content-Pages'
import content from '../../utils/content/contact_us'

export default function Page(){
  return (<Template 
  active={{page:'contact_us'}} 
  content={content('home')}/>)
}