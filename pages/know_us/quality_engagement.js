import Template from'../../components/layouts/Template-Content-Pages'
import content from '../../utils/content/know_us'

export default function Page(){
  return (<Template 
  active={{ page: 'know_us', subPage: 'quality_engagement' }} 
  content={content('quality_engagement')}/>)
}