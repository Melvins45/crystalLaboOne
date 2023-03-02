import {useEffect} from'react'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const ProgressDiv = styled.div`
  background: ${colors.primary};
  width: 100%;
  height: 10px;
  z-index: 998;
  &::before{
    content:'';
    top: 0;
    left: 0;
    position: absolute;
    z-index: 997;
    width: 100%;
    height: 10px;
    background: ${colors.white};
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