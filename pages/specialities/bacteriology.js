//import Template from'../../components/layouts/Template-Content-Pages'
import dynamic from 'next/dynamic'
import content from '../../utils/content/specialities'

const Template = dynamic(() => import('../../components/layouts/Template-Content-Pages'), {
  loading: () => <p>Loading...</p>,
})

/*const DynamicComponent = dynamic(() =>
  import('../components/hello').then((mod) => mod.Hello)
)*/

export default function Page(){
  return (<Template 
  active={{ page: 'specialities', subPage: 'bacteriology' }}
  content={content('bacteriology')}/>)
}