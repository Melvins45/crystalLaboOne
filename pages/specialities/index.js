import {useReducer, useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ArticleMenu,ArticleSection, ArticleContent, ArticleSommary, ArticlePub} from '../../components/Main/Article'
import Sommary from '../../components/Sommary/Sommary'
//import { Carousel } from 'react-responsive-carousel'
//import Carousel from 'react-bootstrap/Carousel'
import content from '../../utils/content/template-content'

export default function Home() {
  
  const [top,setTop] = useState({})
  
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  
  
  //console.log(window.scrollHeight)
  //console.log('In index tops are at', top)
  //console.log('content is ', content.articleBreakPoints[1].sub)
  
  return (
    <div className="container">
      <Head>
        <title>{content.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ArticleSection>
        <ArticleMenu>
          <Sommary content={content}/>
          <ArticlePub id="articlePub" top={680.4375} >
            Besoin d'assistance ? Contactez-nous ou prenez un rendez-vous.
          </ArticlePub>
        </ArticleMenu>
        <ArticleContent>
          
          {
            content.articleBreakPoints.map( (article, index) => {
              //console.log(article.name,' refers to ',article.title)
              return (
              <div  key={''+article.name+'-'+index} >
                <h3 under={article.sub} id={article.name} > {article.title} </h3>
                <p>
                  {article.content}
                </p>
              </div>
            ) } )
          }
          
        </ArticleContent>
      </ArticleSection>
    </div>
  )
}
