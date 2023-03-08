import Template from'../../components/layouts/Template-Content-Pages'
import content from '../../utils/content/specialities'

export default function Page(){
  return (<Template 
  active={{ page: 'specialities', subPage: 'biochemistry' }}
  content={content('biochemistry')}/>)
}