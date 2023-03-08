import * as Content from '../specialities/'

const content = (page) => {
  console.log('in spec index')
  return require(`./${page}.js`).default
}

export default content