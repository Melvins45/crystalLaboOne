import {useReducer, useState, useEffect, useContext} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ArticleMenu, ArticleSection, ArticleContent, ArticleSommary, ArticlePub} from '../Main/Article'
import {ActivePageContext} from '../../utils/context/context'
import Sommary from '../Sommary/Sommary'
//import { Carousel } from 'react-responsive-carousel'
import Carousel from 'react-bootstrap/Carousel'

export default function Template({active, content}) {
  
  const [top,setTop] = useState({})
  
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  
  const [topSommary, setTopSommary] = useState(0)
  const [topPub, setTopPub] = useState(0)
  const { activePage, setActivePage } = useContext(ActivePageContext)
  
  console.log('active Page in template is', activePage)
  
  useEffect( () => {
    const eltTop = (id) => {
      return document.querySelector('#'+id).getBoundingClientRect().top}
    const eltHeight = (id) => {
      return document.querySelector('#'+id).getBoundingClientRect().bottom}
    setTopPub(eltHeight("sommary")+15)
    setActivePage(active)
    console.log('In effect of index, top pub is at', topPub)
  } ,[])
  
  //console.log(window.scrollHeight)
  //console.log('In index tops are at', top)
  //console.log('content is ', content.articleBreakPoints[1].sub)
  console.log('Out of effect of index, top pub is at', topPub)
  
  return (
    <div className="container">
      <Head>
        <title>{`${content.title} - Crystal Labo`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleSection>
        <ArticleMenu>
          <Sommary content={content}/>
          <ArticlePub id="articlePub" top={topPub} >
            {content.articlePub}
          </ArticlePub>
        </ArticleMenu>
        <ArticleContent>
          {
            content.articleBreakPoints.map( (article, index) => {
              //console.log(article.name,' refers to ',article.title)
              return (
              <div  key={''+article.name+'-'+index} >
                { index===0 ? (<h1 under={article.sub} id={article.name} > {article.title} </h1>) : (<h3 under={article.sub} id={article.name} > {article.title} </h3>)}
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
