import {useState, useReducer} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Dropdown from '../Dropdown/Dropdown'
//import logo from '../../assets/crystallabo-logo.png'
import colors from '../../utils/styles/colors'
import ProgressBar from '../Progressbar/Progressbar'

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
          <NavLi id='nav-li-1' >
            <span
            onClick={(e) => {e.stopPropagation(); activeDrop(1)} } 
            onMouseOver={(e) => {e.stopPropagation(); changeDrop(1)}}
            >
              Nos specialités
            </span>
            <Dropdown parent={1} shown={drop} >
              <li>
                <Link href='#' >
                  Parisotologie
                </Link>
              </li>
            </Dropdown>
          </NavLi>
          <NavLi id='nav-li-2'>
            <span 
            onClick={(e) => {e.stopPropagation(); activeDrop(2)}}
            onMouseOver={(e) => {e.stopPropagation(); changeDrop(2)}}
          >
              Nos services
            </span>
            <Dropdown parent={2} shown={drop}>
              <li>
                <Link href='#' >
                  Parisotologie
                </Link>
              </li>
            </Dropdown>
          </NavLi>
        </NavUl>
      </Nav>
      <ProgressBar/>
    </HeaderDiv>
  )
}