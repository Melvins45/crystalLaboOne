import {useEffect} from'react'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import devices from '../../utils/viewport breakpoints/viewportBreakpoints'

const ProgressDiv = styled.div`
  background: ${colors.primary};
  width: 100%;
  height: 10px;
  //z-index: 998;
  opacity: 0.9;
  backdrop-filter: blur(3px);
  &::before{
    content:'';
    top: 0;
    left: 0;
    position: absolute;
    //z-index: 997;
    width: 100%;
    height: 100%;
    background: ${colors.blue};
  }
  @media ${devices.tablet} {
    margin-top: 416px;
    //bottom: 0;
    //top: 100%;
    //left: 0;
    position: absolute;
    z-index: -996;
    //background: red;
    height: 8px;
    // display: none;
    &::before{
      position: relative;
      bottom: 0;
    }
  }
`

export default function ProgressBar(){
  useEffect(() => {
    let totalHeight = document.body.scrollHeight - window.innerHeight
    const propTo = (num) => limit( (num/totalHeight) * 100 )
    const limit = (num) => num > 100 ? 100 : num
    /*window.addEventListener( 'scroll', ()=>{
      document.getElementById("progressBar").style.width = propTo(window.pageYOffset)+'%'
      console.log("In progress bar, width is at "+propTo(window.pageYOffset)+'%')
    })*/
  })
  
  return <ProgressDiv id="progressBar" />
}