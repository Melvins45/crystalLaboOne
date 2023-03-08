import Template from'../../components/layouts/Template-Content-Pages'
import content from '../../utils/content/faq'

export default function Page(){
  return (<Template content={content('home')}/>)
}