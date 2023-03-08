import Template from'../../components/layouts/Template-Content-Pages'
import content from '../../utils/content/specialities'

export default function Speciality(){
  return (<Template content={content('medical_imaging')}/>)
}