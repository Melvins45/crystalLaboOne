import Template from'../../components/layouts/Template-Content-Pages'
import content from '../../utils/content/know_us'

export default function Page(){
  return (<Template 
  active={{ page: 'know_us', subPage: 'innovation_crystal_labo' }} 
  content={content('innovation_of_crystal_labo')}/>)
}