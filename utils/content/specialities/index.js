//import * as Content from '../specialities/'

import styled from 'styled-components'

export const DivInLi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ImgInLi = styled.img`
    width: 80%;
`

const content = (page) => {
  console.log('in spec index')
  return require(`./${page}.js`).default
}

export default content