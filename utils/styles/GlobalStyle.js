import {createGlobalStyle} from'styled-components'
import colors from './colors'

const GlobalStyles = createGlobalStyle`
    html,
        body, main{
          padding: 0;
          margin: 0;
          width: 100%;//1200 px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          selection-color: white;
          selection-background-color: ${colors.primary};
        }

        * {
          box-sizing: border-box;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
`

export default function GlobalStyle(){
    return < GlobalStyles />
}