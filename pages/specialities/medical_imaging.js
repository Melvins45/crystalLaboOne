import Template from'../../components/layouts/Template-Content-Pages'
import content from '../../utils/content/specialities'

export default function Page(){
  return (<Template 
  active={{ page: 'specialities', subPage: 'medical_imaging' }}
  content={content('medical_imaging')}/>)
}