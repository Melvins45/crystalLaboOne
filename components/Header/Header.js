import {useState, useReducer} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Dropdown from '../Dropdown/Dropdown'
//import logo from '../../assets/crystallabo-logo.png'
import colors from '../../utils/styles/colors'
import ProgressBar from '../Progressbar/Progressbar'
import {header_pages} from '../../utils/pages'

const HeaderDiv = styled.div`
  position: sticky;
  top: 0;
`

const Nav = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    align-items: flex-end;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(3px);
    width: 1200px;
    gap: 4em;
    z-index: 998;
    //filter: blur(8px);
  //-webkit-filter: blur(8px);
    box-shadow: 0px 0px 2px ${colors.secondary};
  `
const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    padding: 0;
    gap: 30px;
  `
const NavLi = styled.li`
    position: relative;
    padding: 0px;
    border-bottom: 1px solid white;
    color: ${colors.secondary};
    &:hover{
      color: ${colors.primary};
      border-color: ${colors.primary};
    }
  `
const Dropdowns = styled.ul`
    color: blue;
  `
  
const DropSeparator = styled.hr`
    width: 100%;
    margin: 2px;
    color: ${colors.black};
`
  
const headerBigPages = header_pages
  .filter( page => page.sub == 0 )

export default function Header() {
  
  const [drop, setDrop]=useState({
    bool: false,
    actual: 0,
    prev:  0,
    event: 'click'
  })
  console.log(drop)
  const activeDrop = (index) => 
    setDrop({
      bool: true,
      prev: 0,
      actual: index,
      event: 'click'
    })
  const changeDrop = (index) => 
    drop.bool  && setDrop({
      bool: drop.bool,
      prev: drop.actual !== index ? drop.actual : drop.prev,
      actual: index,
      event: 'mouseOver'
    })
  const desactiveDrop = () => 
    setDrop({
      bool: false,
      prev: 0,
      actual: 0,
      event: 'mouseOut'
    })
  return (
    <HeaderDiv>
      <Nav>
        <img src='/crystallabo-logo.png' height={80} alt='logo' />
        <NavUl type={'none'} 
        onMouseLeave={()=> desactiveDrop()}
        >
          {
            headerBigPages.map( (page, index) => (
              <NavLi key={page.name+'-'+index} id={'nav-li-'+index}>
                <span
                  onClick={(e) => {e.stopPropagation(); activeDrop(index)} }
                  onMouseOver={(e) => {e.stopPropagation(); changeDrop(index)}}
                >
                  {page.title}
                </span>
                <ul parent={index} shown={drop} >
                {
                  header_pages
                  .filter( subPage => (subPage.sub === 1 && subPage.parent === page.name ) )
                  .map( (subPage, index) => { console.log('subPage of page ',page.name,' is ', subPage); return 
                    /*subPage.separate ?
                      (<div key={subPage.name+'-'+index}>
                        <DropSeparator/>
                        <li>
                          <Link href='#'>
                            {subPage.name}
                          </Link>
                        </li>
                      </div> ):*/
                      (<li key={subPage.name+'-'+index} >
                        <Link href='#'>
                          {subPage.name}
                        </Link>
                      </li>)
                  } )
                }
                </ul>
              </NavLi>
            ))
          }
        </NavUl>
      </Nav>
      <ProgressBar/>
    </HeaderDiv>
  )
}