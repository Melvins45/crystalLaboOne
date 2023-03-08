import {useState, useEffect} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import {footer_pages} from '../../utils/pages'
import devices from '../../utils/viewport breakpoints/viewportBreakpoints' 
import ProgressBar from '../Progressbar/Progressbar'

export const FooterBig = styled.footer`
  padding-top: 18px;
  width: 100%;//1200px;
  box-shadow: 0px 0px 2px ${colors.secondary};
`

export const FooterPages = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  padding-left: 1rem; 
  @media ${devices.tablet} {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }
`

export const FooterAllPages = styled.div`
  display: flex;
  gap: 3rem;
  padding-left: 1rem; 
  flex-wrap: wrap;
  @media ${devices.tablet} {
    width: 100%;
    justify-content: center;
    padding: 0;
    & h3{
      font-size: 1.2rem;
    }
  }
`

export const FooterLotPage = styled.nav`
  //padding-bottom: 50px; 
  //max-width: 10rem;
  & h3{
   color: ${colors.black};
  }
  & > ul{
   list-style: none;
   padding: 0px;
  }
  @media ${devices.tablet} {
    max-width: 7rem;
  }
`

export const FooterPage = styled.li`
  color: ${colors.secondary};
  &:hover{
    text-decoration: underline;
  }
  &:active{
    text-decoration: none;
  }
`
export const FooterLast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0.4rem;
  //padding-bottom: 18px;
  left: 0;
  width: auto;
  @media ${devices.tablet} {
    justify-content: center;
    width: 100%;
    margin: 0;
  }
`
export const FooterLastImg = styled.img`
  width: 200px;
  padding-right: 35px;
  @media ${devices.tablet} {
    padding: 0;
  }
`

export const FooterDivSubscribe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 9px;
  padding-bottom: 9px;
  width: auto;
  //background: red;
  @media ${devices.tablet}{
    justify-content: center;
    //background: red;
  }
`

export const FooterLastSubscribe = styled.button`
  display: inline;
  color: ${colors.white};
  border: none;
  height: 1.4rem;
  font-size: 0.8rem;
  word-wrap: no-wrap;
  margin: 0;
  width: auto;
  border-radius: 0px 12px 12px 0px;
  background: ${colors.primary}; 
  &:hover{
    background: ${colors.blue};
  }
`

export const FooterLastSubscribeInput  = styled.input`
  display: inline;
  border-color: rgba(0,0,0,0);
  border-radius: 12px 0 0 12px;
  background: ${colors.backgroundLight2};
  height: 1.4rem;
  font-size: 0.6rem;
  margin-top: 0px;
  margin-right: 0.2rem;
  width: 150px;
  &:hover, &:focus{
    border: 3px solid ${colors.primary};
    box-shadow: none;
  }
`

export const FooterCopyright = styled.div`
  text-align: center;
  box-shadow: 0px 0px 2px ${colors.secondary};
  font-size: 0.6rem;
  & a{
    color: ${colors.blue};
  }
  & a:hover{
    text-decoration: underline;
  }
  & a:active{
    text-decoration: none;
  }
  @media ${devices.tablet}{
    margin-bottom: 8px;
  }
`

const footerBigPages = footer_pages
  .filter( page => page.sub == 0 )

export default function Footer(){
  
  const [topSommary,setTopSommary] = useState(0)
  const [subInput, setSubInput] = useState("")
  const [windowWidth, setWindowWidth] = useState(0)
  const handleOnChange = (e) => {
    setSubInput(e.target.value)
  }
  
  useEffect( ()=>{
      setWindowWidth(window.innerWidth)
      //const el = document.getElementById('burgerMenu')
      //setLenghtBurgerMenu(el.offsetWidth)
    } )
  
  /*useEffect( () => {
    const eltTop = (id) => {
    return document.querySelector('#'+id).getBoundingClientRect().top}
    setTopSommary(eltTop("sommary"))
    console.log('In effect top sommary is at', topSommary)
  } ,[])*/
  
  console.log("SubInput is ",subInput)
  console.log('Top of sommary is at ', topSommary)
  
  return (
    <FooterBig>
      <FooterPages>
        <FooterAllPages>
          {
            footerBigPages.map( (page, index) => (
              <FooterLotPage key={page.name+'-'+index}>
                <h3> {page.title} </h3>
                <ul>
                  {
                    footer_pages
                    .filter( subPage => (subPage.sub === 1 && subPage.parent === page.name ) )
                    .map( (subPage, index) => {
                      return (
                        <FooterPage key={subPage.name+'-'+index} >
                          <Link href={'/'+subPage.parent+subPage.slug} >
                            {subPage.title}
                          </Link>
                        </FooterPage>
                      )
                    } )
                  }
                </ul>
              </FooterLotPage>
            ) )
          }
        </FooterAllPages>
        <FooterLast>
          <FooterLastImg src="/crystallabo-logo.png" alt='logo' />    
        </FooterLast>
      </FooterPages>
      <FooterDivSubscribe>
        <FooterLastSubscribeInput type="text" name="subscribe" placeholder='Votre adresse e-mail' onChange={handleOnChange} />
        <FooterLastSubscribe> {'Abonnez-vous'} </FooterLastSubscribe>
      </FooterDivSubscribe>
      <FooterCopyright>
        Copyright © 2023 • Crystal Labo SARL • Tous droits réservés. <Link href='#' > Mentions Légales </Link>
      </FooterCopyright>
    </FooterBig>
  )
}