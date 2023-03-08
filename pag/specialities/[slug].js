import Template from'../../components/layouts/Template-Content-Pages'
import { useRouter } from 'next/router'
import content from '../../utils/content/specialities'

export default function Speciality(){
  const router = useRouter()
  const {slug} = router.query
  
  return (<Template content={content(slug ? slug : 'parisotology' )}/>)
}