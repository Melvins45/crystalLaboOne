import Template from'../../components/layouts/Template-Content-Pages'
import { useRouter } from 'next/router'
import content from '../../utils/content/faq'

export default function Speciality(){
  const router = useRouter()
  const {slug} = router.query
  
  return (<Template content={slug ? content(slug) : content('home')}/>)
}