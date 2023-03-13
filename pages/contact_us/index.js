import {useContext, useEffect, useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import {ActivePageContext} from '../../utils/context/context'
import colors from '../../utils/styles/colors'
import {DropSimple} from '../../components/Dropdown/Dropdown'
import { ArticleMenu, ArticleSection, ArticleContent, ArticleSommary, ArticlePub} from '../../components/Main/Article'

const ATag = styled.a`
    color: ${colors.blue};
`
const H3Title = styled.h3`
    font-size: 20rem;
`

const PAlone = styled.p`
    margin-top: 1.8rem;
    margin-bottom: 1.8rem;
`

const DepositButton = styled.a`
    display: block;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    color: ${colors.blue};
    border: 1px solid ${colors.blue};
    border-radius: .5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-top: .7rem;
    padding-bottom: .7rem;
    &:hover{
      background: ${colors.blue};
      color: ${colors.white};
    }
`

export default function Page(){
  /*return (<Template 
  active={{page:'contact_us'}} 
  content={content('home')}/>)*/
  
  const { activePage, setActivePage } = useContext(ActivePageContext)
  
  useEffect( () => {
    setActivePage({ page: 'contact_us'})
  }, [] )
  
  return (
    <div className="container">
      <Head>
        <title>{`Contactez-nous - Crystal Labo`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleSection>
        <ArticleContent className='alone' >
          <h1> Nous contacter </h1>
          <h3 className='big' > Service d'assistance téléphonique </h3>
          <p> 
            Veuillez nous contacter pour tout renseignement concernant le processus d'examen médical ou une assistance médicale:<br/>
Contactez-nous par téléphone au numéro suivant : +237222207793 <br/>
Contactez-nous par courriel à l'adresse suivante : <Link href="#"><ATag>écrivez-nous maintenant</ATag></Link> 
          </p>
          <PAlone>
            Contactez-nous par chat: <Link href="#"><ATag>écrivez-nous maintenant</ATag></Link>
          </PAlone>
          <h3 className='big'>
            Expérience client et commentaires
          </h3>
          <p> 
            Crystal Labo s'engage à fournir un service de qualité. Afin d'y parvenir, Crystal Labo apprécie de recevoir des commentaires de la part de ses clients. Tous les commentaires reçus feront l'objet d'un examen complet.
          </p>
          <h3 className='big'>
            Compliments de nos clients
          </h3>
          <p>
            Les commentaires sont toujours les bienvenus. Si vous avez un commentaire à formuler sur nos services, n'hésitez pas à nous contacter.
          </p>
          <DepositButton>
            <Link href='#'> Déposer un compliment </Link>
          </DepositButton>
          <h3 className='big'>
            Plaintes de clients
          </h3>
          <p>
            Nous prenons les plaintes au sérieux et celles-ci s'inscrivent dans une logique d'amélioration continue de notre entreprise et de notre personnel. Lorsque vous nous communiquerez vos commentaires, vous obtiendrez une réponse et une résolution rapide de votre plainte, conformément à notre procédure de traitement des plaintes. Vous pouvez déposer vos commentaires en ligne :
          </p>
          <DepositButton>
            Déposer une plainte
          </DepositButton>
        </ArticleContent>
      </ArticleSection>
    </div>
    )
}