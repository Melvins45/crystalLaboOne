import Template from'../../components/layouts/Template-Content-Pages'
import content from '../../utils/content/services'

export default function Page(){
  return (<Template 
  active={{ page: 'services', subPage: 'results' }}
  content={content('results')}/>)
}