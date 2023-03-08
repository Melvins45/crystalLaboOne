import Header from '../Header/Header'
import styled from 'styled-components'
import GlobalStyle from '../../utils/styles/GlobalStyle'
import Footer from '../Footer/Footer'

export default function Layout({children}) {
  return (
    <>
      <Header/>
      <main> {children} </main>
      <Footer/>
    </>
  )
}