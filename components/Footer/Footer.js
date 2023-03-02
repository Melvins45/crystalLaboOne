import {useState, useEffect} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const FooterBig = styled.footer`
  width: 1200px;
  box-shadow: 0px 0px 2px ${colors.secondary};
`

export const FooterPages = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  padding-left: 1rem; 
`

export const FooterAllPages = styled.div`
  display: flex;
  gap: 3rem;
  padding-left: 1rem; 
`

export const FooterLotPage = styled.nav`
  & h3{
   color: ${colors.black};
  }
  & > ul{
   list-style: none;
   padding: 0px;
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
  justify-content: center;
  align-items: center;
  margin-right: 0.4rem;
  left: 0;
  width: 300px;
`
export const FooterLastImg = styled.img`
  width: 200px;
`

export const FooterDivSubscribe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
`

export const FooterLastSubscribe = styled.button`
  display: inline;
  color: ${colors.white};
  border: none;
  height: 1.4rem;
  border-radius: 0px 12px 12px 0px;
  background: ${colors.primary}; 
  &:hover{
    background: ${colors.blue};
  }
`

export const FooterLastSubscribeInput  = styled.input`
  display: inline;
  border-radius: 12px 0 0 12px;
  height: 1.4rem;
  margin-right: 0.5rem;
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
`

export default function Footer(){
  const [topSommary,setTopSommary] = useState(0)
  const [subInput, setSubInput] = useState("")
  const handleOnChange = (e) => {
    setSubInput(e.target.value)
  }
  
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
          <FooterLotPage>
            <h3> Nos specialités </h3>
            <ul>
              <FooterPage>
                <Link href='#' >
                  Paristologie
                </Link>
              </FooterPage>
            </ul>
          </FooterLotPage>
          <FooterLotPage>
            <h3> Nos specialités </h3>
            <ul>
              <FooterPage>
                <Link href='#'>
                  Paristologie
                </Link>
              </FooterPage>
            </ul>
          </FooterLotPage>
          <FooterLotPage>
            <h3> Nos specialités </h3>
            <ul>
              <FooterPage>
                <Link href='#'>
                  Paristologie
                </Link>
              </FooterPage>
            </ul>
          </FooterLotPage>
        </FooterAllPages>
        <FooterLast>
          <FooterLastImg src="/crystallabo-logo.png" alt='logo' />
          <FooterDivSubscribe>
            <FooterLastSubscribeInput type="text" name="subscribe" onChange={handleOnChange} />
            <FooterLastSubscribe> Abonnez-vous </FooterLastSubscribe>
          </FooterDivSubscribe>
        </FooterLast>
      </FooterPages>
      <FooterCopyright>
        Copyright © 2023 • Crystal Labo SARL • Tous droits réservés. <Link href='#' > Mentions Légales </Link>
      </FooterCopyright>
    </FooterBig>
  )
}