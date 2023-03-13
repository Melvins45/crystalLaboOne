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
//import Template from'../../components/layouts/Template-Content-Pages'
//import content from '../../utils/content/faq'

const QuestionTitle = styled.div`
    padding-top: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${colors.grey};
    & div.title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4{
        color: ${colors.blue};
      }
    }
`
const initialDrops = {
  'before': false,
  'between': false,
  'after' : false,
  'help_near': false,
  'retrieve_results': false,
  'rdv_house' : false,
  'facturation' : false
}

export default function Page(){
  //return (<Template content={content('home')}/>)
  
  const [questionDrop, setQuestionDrop] = useState(initialDrops)
  const { activePage, setActivePage } = useContext(ActivePageContext)
  const dropQuestion = (question) => 
    setQuestionDrop({
      ...questionDrop,
      [question] : !questionDrop[question]
    })
  
  useEffect( () => {
    setActivePage({ page: ''})
  }, [] )
  
  return (
    <div className="container">
      <Head>
        <title>{`Foire aux questions - Crystal Labo`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleSection>
        <ArticleContent className='alone' >
          <h1> Foire aux questions </h1>
          <h3> Laboratoire médical </h3>
          <QuestionTitle>
            <div 
            id='before_exam'
            onClick={(e)=> { e.stopPropagation(); dropQuestion('before') } }
            className='title' >
              <h4>Que faire avant un examen ?</h4>
              <h4> { questionDrop['before'] 
                    ? ( <> <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                    : (<> <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) } </h4>
            </div>
            <DropSimple shown={questionDrop} parent='before' >
              <p>
                Before
              </p>
            </DropSimple>
          </QuestionTitle>
          <QuestionTitle>
            <div 
            id='between_exam'
            onClick={(e)=> { e.stopPropagation(); dropQuestion('between') } }
            className='title' >
              <h4>Que se passe-t-il pendant un examen ?</h4>
              <h4> { questionDrop['between'] 
                    ? ( <> <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                    : (<> <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) } </h4>
            </div>
            <DropSimple shown={questionDrop} parent='between' >
              <p>
                Before
              </p>
            </DropSimple>
          </QuestionTitle>
          <QuestionTitle>
            <div 
            id='help_near'
            onClick={(e)=> { e.stopPropagation(); dropQuestion('help_near') } }
            className='title' >
              <h4>Je veux faire passer un examen à un proche, comment procéder ?</h4>
              <h4> { questionDrop['help_near'] 
                    ? ( <> <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                    : (<> <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) } </h4>
            </div>
            <DropSimple shown={questionDrop} parent='help_near' >
              <p>
                Before
              </p>
            </DropSimple>
          </QuestionTitle>
          <QuestionTitle>
            <div 
            id='after'
            onClick={(e)=> { e.stopPropagation(); dropQuestion('after') } }
            className='title' >
              <h4>Que faire après l'examen ?</h4>
              <h4> { questionDrop['after'] 
                    ? ( <> <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                    : (<> <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) } </h4>
            </div>
            <DropSimple shown={questionDrop} parent='after' >
              <p>
                Before
              </p>
            </DropSimple>
          </QuestionTitle>
          <QuestionTitle>
            <div 
            id='retrieve_results'
            onClick={(e)=> { e.stopPropagation(); dropQuestion('retrieve_results') } }
            className='title' >
              <h4>Comment récupérer ses résultats ?</h4>
              <h4> { questionDrop['retrieve_results'] 
                    ? ( <> <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                    : (<> <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) } </h4>
            </div>
            <DropSimple shown={questionDrop} parent='retrieve_results' >
              <p>
                Before
              </p>
            </DropSimple>
          </QuestionTitle>
          <QuestionTitle>
            <div 
            id='take_rdv_at_house'
            onClick={(e)=> { e.stopPropagation(); dropQuestion('rdv_house') } }
            className='title' >
              <h4>Comment prendre rendez-vous à domicile ?</h4>
              <h4> { questionDrop['rdv_house'] 
                    ? ( <> <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                    : (<> <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) } </h4>
            </div>
            <DropSimple shown={questionDrop} parent='rdv_house' >
              <p>
                Before
              </p>
            </DropSimple>
          </QuestionTitle>
          <QuestionTitle>
            <div 
            id='facturation'
            onClick={(e)=> { e.stopPropagation(); dropQuestion('facturation') } }
            className='title' >
              <h4>Comment Crystal Labo facture chaque examen ?</h4>
              <h4> { questionDrop['facturation'] 
                    ? ( <> <FontAwesomeIcon icon={faMinusCircle } ></FontAwesomeIcon> </> ) 
                    : (<> <FontAwesomeIcon icon={faPlusCircle } ></FontAwesomeIcon> </>) } </h4>
            </div>
            <DropSimple shown={questionDrop} parent='facturation' >
              <p>
                Before
              </p>
            </DropSimple>
          </QuestionTitle>
        </ArticleContent>
      </ArticleSection>
    </div>
)
}