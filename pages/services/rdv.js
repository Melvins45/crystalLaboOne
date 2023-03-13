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

const RdvButton = styled.button`
    display: block;
    background: ${colors.blue};
    color: white;
    align-self: center;
    font-size: 1.1rem;
    padding-top: .2rem;
    padding-bottom: .2rem;
    border: none;
    & a:hover, a:active{
      color: inherit;
    }
`
const initialDrops = {
  'online' : false,
  'phone' : false,
  'email' : false,
  'irl' : false
}
const DivRdv = styled.ol`
    //display: flex;
    //flex-direction: column;
    margin-top: 3rem;
    list-style: none; 
    counter-reset: li;
    & > li {
      counter-increment: li;
      padding-bottom: .3rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid ${colors.grey};
      span{
        font-size: 1.3rem;
      }
      span.see{
        display: block;
        width: 100%;
        font-size: 1rem;
        color: ${colors.blue};
      }
      
    }
    & a {
      color: ${colors.blue} !important;
      text-decoration: underline ;
    }
    & > li::before {
      font-size: 1.3rem;
      content: counter(li); 
      color: ${colors.blue};
      display: inline-block; 
      width: 1em;
      margin-left: -1em;
    }
`


export default function Page(){
  
  const [paragraphDrop, setParagraphDrop] = useState(initialDrops)
  const { activePage, setActivePage } = useContext(ActivePageContext)
  const dropParagraph = (paragraph) => 
    setParagraphDrop({
      ...paragraphDrop,
      [paragraph] : !paragraphDrop[paragraph]
    })
  const remark = (
    <p>
                  Remarque :
                  <ul>
                    <li> Crystal Labo ne recueillera vos renseignements personnels qu'aux seules fins de la planification de votre rendez-vous. N'incluez pas de renseignements personnels autres que ceux requis par le système de planification de rendez-vous dans vos courriels, vos clavardages en ligne, vos SMS ou toute autre communication électronique non sécurisée. </li>
                    <li> Un avis sera envoyé par courriel ou par SMS 24 heures avant la date du rendez-vous. </li>
                    <li> Veuillez prévoir d'arriver dans l'une de nos agences 15 minutes avant l'heure de votre rendez-vous. </li>
                  </ul>
                </p>
  )
  
  useEffect( () => {
    setActivePage({ page: 'services', subPage: 'rdv' })
  }, [] )
  
  
  return (
    <div className="container">
      <Head>
        <title>{`Prenez rendez-vous en ligne - Crystal Labo`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleSection>
        <ArticleContent className='alone' >
          <h1> Prendre rendez-vous pour vos consultations et vos examens médicaux </h1>
          <p> Rendez-vous Crystal Labo est un service gratuit, disponible pour tous, qui permet de prendre un rendez-vous en ligne avec un médecin. </p>
          <p className='align-self'>
            <RdvButton><Link href='#'><a>Acc￼édez à Rendez-vous Crystal Labo</a></Link></RdvButton>
          </p>
          <p>
            Ce service en ligne gratuit, convivial et sécuritaire vous permet :
            <ul>
              <li> de prendre rendez-vous avec un professionnel de la santé;</li>
              <li> d’annuler un rendez-vous pris en ligne;</li>
              <li> de recevoir une confirmation de votre rendez-vous et des rappels par courriel.</li>
            </ul>
          </p>
          <h3> RENSEIGNEMENTS PERSONNELS</h3>
          <p> 
            Les renseignements personnels du demandeur seront recueillis par Crytal Labo dans le seul but de fixer un rendez-vous. Ils ne seront divulgués à aucune entreprise partenaire tierce.
          </p>
          <DivRdv>
            <li>
              <span onClick={(e)=> { e.stopPropagation(); dropParagraph('online') } } >
                En ligne <br/>
                <span 
                  className='see'> 
                  Voir 
                  { paragraphDrop['online'] 
                  ? ( <> Moins <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                  : (<> Plus <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) }
                </span>
              </span> 
              <DropSimple shown={paragraphDrop} parent='online' >
                <p>
                  <Link href='#' >Cliquez ici</Link> pour prendre rendez-vous.
Vous serez redirigé vers un écran de connexion pour la prise de rendez-vous, qui vous permettra de: 
                  <ul>
                    <li> Prendre rendez-vous </li>
                    <li> Reporter un rendez-vous </li>
                    <li> Annuler un rendez-vous </li>
                  </ul>
                </p>
                <p>
                  Veuillez suivre les instructions figurant sur la page pour créer vos identifiants de connexion personnels et prendre rendez-vous.
                </p>
                {remark}
              </DropSimple>
            </li>
            <li>
              <span onClick={(e)=> { e.stopPropagation(); dropParagraph('phone') } } >
                Téléphone <br/>
                <span 
                  className='see'> 
                  Voir 
                  { paragraphDrop['phone'] 
                  ? ( <> Moins <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                  : (<> Plus <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) }
                </span>
              </span> 
              <DropSimple shown={paragraphDrop} parent='phone' >
                <p>
                  Si vous souhaitez prendre rendez-vous par téléphone, vous pouvez appeler le numéro de la ligne d'assistance<br/> +237222207793
                </p>
                <p>
                  Vous serez mis en contact avec un agent du centre d'appels qui vous aidera à fixer, décaler ou annuler votre rendez-vous.
                </p>
                {remark}
              </DropSimple>
            </li>
            <li>
              <span onClick={(e)=> { e.stopPropagation(); dropParagraph('email') } } >
                Courriel <br/>
                <span 
                  className='see'> 
                  Voir 
                  { paragraphDrop['email'] 
                  ? ( <> Moins <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                  : (<> Plus <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) }
                </span>
              </span> 
              <DropSimple shown={paragraphDrop} parent='email' >
                <p>
                  Si vous souhaitez prendre rendez-vous par courriel, vous pouvez utiliser le <Link href='#'>formulaire électronique</Link>. 
                </p>
                {remark}
              </DropSimple>
            </li>
            <li>
              <span onClick={(e)=> { e.stopPropagation(); dropParagraph('irl') } } >
                En personne <br/>
                <span 
                  className='see'> 
                  Voir 
                  { paragraphDrop['irl'] 
                  ? ( <> Moins <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                  : (<> Plus <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) }
                </span>
              </span> 
              <DropSimple shown={paragraphDrop} parent='irl' >
                <p>
                  Si vous souhaitez :
                  <ul>
                    <li> Prendre rendez-vous en personne </li>
                    <li> Annuler un rendez-vous en personne </li>
                    <li> Reporter un rendez-vous en personne </li>
                  </ul>
                </p>
                <p> Vous pouvez vous rendre dans l'une de nos agences pendant les heures d'ouverture indiquées et demander ce service ou prendre un rendez-vous en utilisant la méthode libre-service. </p>
                <p> Remarque: Crystal Labo ne recueillera vos renseignements personnels qu'aux seules fins de la planification de votre rendez-vous. N'incluez pas de renseignements personnels autres que ceux requis par le système de planification de rendez-vous dans vos courriels, vos clavardages en ligne, vos SMS ou toute autre communication électronique non sécurisée. </p>
              </DropSimple>
            </li>
          </DivRdv>
        </ArticleContent>
      </ArticleSection>
    </div>
  )
}