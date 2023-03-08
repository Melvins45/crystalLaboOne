import {useState, useReducer, useEffect} from 'react'
import styled, {keyframes, css} from 'styled-components'
import Link from 'next/link'
import Dropdown from '../Dropdown/Dropdown'
//import logo from '../../assets/crystallabo-logo.png'
import colors from '../../utils/styles/colors'
import ProgressBar from '../Progressbar/Progressbar'
import {header_pages} from '../../utils/pages'
import devices from '../../utils/viewport breakpoints/viewportBreakpoints'

const burgerAppear = (lenght) => {
  console.log('burger lenght is ',lenght)
  return keyframes`
    from {
      transform: translateX(-${lenght}px);
    }
    to {
      transform: translateX(0px);
    }
`}
const burgerDisappear = (lenght) => {
  console.log('burger lenght is ',lenght)
  return keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-${lenght}px);
    }
`}

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
    width: 100%;//1200px;
    gap: 4em;
    z-index: 998;
    //filter: blur(8px);
    //-webkit-filter: blur(8px);
    box-shadow: 0px 0px 2px ${colors.secondary};
    @media ${devices.tablet} {
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding: 0;
      padding-right: 10px;
      padding-left: 10px;
      margin: 0;
    }
    @media ${devices.mobileM}{
      height: 50px;
    }
  `
const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    padding: 0;
    gap: 30px;
    @media ${devices.tablet} {
      flex-direction: column;
      padding-right: 1rem;
      width: 100%;
    }
  `
const NavLi = styled.li`
    position: relative;
    padding: 0px;
    border-bottom: 1px solid rgba(0,0,0,0);
    color: ${colors.secondary};
    &:hover{
      color: ${colors.primary};
      border-color: ${colors.primary};
    }
    & a:hover{
      color: ${colors.primary};
    }
    @media ${devices.tablet} {
      width: 100%;
      & > span{
        display: block;
        width: 100%;
      }
    }
  `
const NavImage = styled.img`
    height: 80px;
    @media ${devices.tablet} {
      height: 50px;
    }
    @media ${devices.mobileM} {
      height: 45px;
    }
`
const BurgerImg = styled.img`
    height: 80px;
    @media ${devices.tablet} {
      height: 50px;
    }
    @media ${devices.mobileM} {
      height: 40px;
    }
`
const BurgerLogoImg = styled.img`
    margin-bottom: 1rem;
`
const ProfileImg = styled.img`
    height: 80px;
    //border-radius: 50%;
    @media ${devices.tablet} {
      height: 50px;
    }
    @media ${devices.mobileM} {
      height: 40px;
    }
`
const Dropdowns = styled.ul`
    color: blue;
  `
  
const DropSeparatorDiv = styled.div`
    display: flex;
    justify-content: center;
    //width: 100%;
`
const DropSeparator = styled.hr`
    width: 80%;
    height: 1px;
    color: ${colors.black};
`

const BurgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100vh;
    //height: auto;
    overflow-x: hidden;
    overflow-y: auto;
    background: ${colors.backgroundLight};
    position: absolute;
    padding-top: 0.4rem; 
    padding-left: 0.4rem;
    top: 0;
    left: 0;
    margin: 0;
    z-index: 1000;
    ${({hadClicked, hadStarted}) => !hadClicked[1] ? hadClicked[0] ? 
      css`
      display: flex;
      transform: translateX(0);
      opacity: ${ hadStarted ? '1' : '0' };
      animation: ${ ({lenght}) => burgerAppear(lenght) } 200ms linear 100ms;` : 
      css`
      display: flex;
      transform: translateX(-${ ({lenght}) => lenght }px);
      animation: ${ ({lenght}) => burgerDisappear(lenght) } 300ms linear;` :
      css`display: none;`
    } 
`

const BurgerHide = styled.div`
    display: ${({hadClicked}) => !hadClicked[0] ? 'none' : 'block' };
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
`
  
const headerBigPages = header_pages
  .filter( page => page.sub == 0 )
  
const parentsSubPages = 
  header_pages
  .filter( subPage => (subPage.sub === 1 ) )
  .map( subPage => subPage.parent )

const pagesWithSubPages = 
    parentsSubPages
    .filter((item, index) => parentsSubPages.indexOf(item) === index)
    
let initialMobileDrop = {}
pagesWithSubPages.map( page => Object.assign(initialMobileDrop, {[page]: false}) )
    
//console.log('parents is ',parentsSubPages, ' and the unique list is ', pagesWithSubPages)


export default function Header() {
    
  
  const [drop, setDrop]=useState({
    bool: false,
    actual: 0,
    prev:  0,
    event: 'click'
  })
  const [mobileDrop, setMobileDrop] = useState(initialMobileDrop)
  const [windowWidth, setWindowWidth] = useState(0)
  const [burgerClicked, setBurgerClicked] = useState([false, true])
  const [burgerStartAnimation, setBurgerStartAnimation] = useState(false)
  const [lenghtBurgerMenu, setLenghtBurgerMenu] = useState(0)
  const [isFirstTimeDropped, setIsFirstTimeDropped] = useState(true)
  const [ended, setEnded] = useState(initialMobileDrop)
  
  console.log(drop)
  
  const dropInMobile = (page) => {
    setMobileDrop({
      ...mobileDrop,
      [page] : !mobileDrop[page]
    })
  }
  const endBool = (page, bool) => {
    setEnded({
      ...ended,
      [page] : bool
    })
  }
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
    
    useEffect( ()=>{
      setWindowWidth(window.innerWidth)
      const el = document.getElementById('burgerMenu')
      setLenghtBurgerMenu(el.offsetWidth)
    } )
    
    const PageUlList = (
      <NavUl type={'none'} >
          {
            headerBigPages.map( (page, index) => (
              <NavLi key={page.name+'-'+index} id={'nav-li-'+index}>
                <span
                  onClick={(e) => {
                    e.stopPropagation(); 
                    if ( pagesWithSubPages.includes(page.name) ) 
                    {dropInMobile(page.name); 
                    setIsFirstTimeDropped(false) 
                    endBool(page.name, !mobileDrop[page.name])} 
                    }
                  }     
                >
                  <Link href={!pagesWithSubPages.includes(page.name) ? page.slug : "#" }>
                    {page.title}
                  </Link> 
                </span>
                { pagesWithSubPages.includes(page.name) &&
                (<Dropdown ended={ended} first={isFirstTimeDropped} windowWidth={windowWidth} parent={page.name} shown={mobileDrop} >
                {
                  header_pages
                  .filter( subPage => (subPage.sub === 1 && subPage.parent === page.name ) )
                  .map( (subPage, index) => 
                    subPage.separate?
                    (<div key={''+subPage.name+'-'+index} >
                      <DropSeparatorDiv  > 
                        <DropSeparator/>
                      </DropSeparatorDiv>
                      <Link href={'/'+subPage.parent+subPage.slug} >
                        <a><li>
                          {subPage.title}
                        </li></a>
                      </Link>
                    </div> ):
                    (<Link key={subPage.name+'-'+index} href={'/'+subPage.parent+subPage.slug}>
                      <a><li>
                        {subPage.title}
                      </li></a>
                    </Link>)
                  )
                }
                </Dropdown>)
                }
              </NavLi>
            ))
          }
        </NavUl>
    )
    
    console.log('in header windowWidth is', windowWidth)
  return (
    <HeaderDiv>
      <Nav>
        { windowWidth <= 768 &&
          ( <>
              <BurgerImg src='/burger.svg' alt='burger' onClick={ (e)=>{ setBurgerClicked([true, false]) } } /> 
                <BurgerMenu 
                hadClicked={burgerClicked} 
                hadStarted={burgerStartAnimation} 
                onAnimationStart={ () =>  { burgerClicked[0] && setBurgerStartAnimation(true) } } 
                id="burgerMenu" 
                lenght={lenghtBurgerMenu} >
                  <BurgerLogoImg src='/crystallabo-logo.png' width={lenghtBurgerMenu*80/100} alt='logo in burgerMenu'/>
                  {PageUlList}
                </BurgerMenu> 
                <BurgerHide hadClicked={burgerClicked} onTouchStart={ (e)=>{ setBurgerClicked([false, false]); setBurgerStartAnimation(false) } } />
            </>
          ) }
        <Link href='/'>
          <NavImage src={ windowWidth <= 768 ? '/crystallabo-simple-logo.png' : '/crystallabo-logo.png' } alt='logo' />
        </Link>
        { windowWidth <= 768 ? 
          ( <ProfileImg src='/profile.png' alt='profile'/> )
        : (<NavUl type={'none'} 
        onMouseLeave={()=> desactiveDrop()}
        >
          {
            headerBigPages.map( (page, index) => (
              <NavLi key={page.name+'-'+index} id={'nav-li-'+index}>
                <span
                  onClick={(e) => {e.stopPropagation(); activeDrop(index)} }
                  onMouseOver={(e) => {e.stopPropagation(); changeDrop(index)}}
                >
                  <Link href={!pagesWithSubPages.includes(page.name) ? page.slug : "#" }>
                    {page.title}
                  </Link> 
                </span>
                { pagesWithSubPages.includes(page.name) &&
                (<Dropdown windowWidth={windowWidth} parent={index} shown={drop} >
                {
                  header_pages
                  .filter( subPage => (subPage.sub === 1 && subPage.parent === page.name ) )
                  .map( (subPage, index) => 
                    subPage.separate?
                    (<>
                      <DropSeparator key={'hr'+subPage.name+'-'+index} />
                      <Link key={subPage.name+'-'+index} href={'/'+subPage.parent+subPage.slug} >
                        <a><li>
                          {subPage.title}
                        </li></a>
                      </Link>
                    </> ):
                    (<Link key={subPage.name+'-'+index} href={'/'+subPage.parent+subPage.slug}>
                      <a><li>
                        {subPage.title}
                      </li></a>
                    </Link>)
                  )
                }
                </Dropdown>)
                }
              </NavLi>
            ))
          }
        </NavUl>)
        }
      </Nav>
      <ProgressBar/>
    </HeaderDiv>
  )
}