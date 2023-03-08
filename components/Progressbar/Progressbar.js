import {useEffect} from'react'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import devices from '../../utils/viewport breakpoints/viewportBreakpoints'

const ProgressDiv = styled.div`
  background: ${colors.primary};
  width: 0;//100%;
  height: 10px;
  //z-index: 998;
  opacity: 0.9;
  backdrop-filter: blur(3px);
  &.back{
    width: 100%;
    background: ${colors.white};
  }
  @media ${devices.tablet} {
    //margin-top: 416px;
    bottom: 0;
    //top: 100%;
    //left: 0;
    position: fixed;
    z-index: -996;
    //background: red;
    height: 8px;
  }
`

export default function ProgressBar(){
  useEffect(() => {
    let totalHeight = document.body.scrollHeight - window.innerHeight
    const propTo = (num) => limit( (num/totalHeight) * 100 )
    const limit = (num) => num > 100 ? 100 : percent(num)
    const percent = (num) => 
    {
      num=parseInt(num)
      if(num%5 === 0 ){ return num } 
      else { return parseInt(num/5)*5 }
    }
    window.addEventListener( 'scroll', ()=>{
      document.getElementById("progressBar").style.width = propTo(window.pageYOffset)+'%'
      //console.log("In progress bar, width is at "+propTo(window.pageYOffset)+'%')
    })
  })
  
  return <>
      <ProgressDiv className="back" />
      <ProgressDiv id="progressBar" />
        </>
}