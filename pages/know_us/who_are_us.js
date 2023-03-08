import Template from'../../components/layouts/Template-Content-Pages'
import content from '../../utils/content/know_us'

export default function Page(){
  return (<Template 
  active={{ page: 'know_us', subPage: 'who_are_us' }} 
  content={content('who_are_us')}/>)
}