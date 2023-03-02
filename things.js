animation: ${css`${translateTo(shown.prev)}`} 200ms linear;
animation: ${appear} 200ms linear;
transform: translateX(${(props) => eltHeight(shown.prev)});

{
            content.articleBreakPoints.map( (article, index) => {
              //console.log(article.name,' refers to ',article.title)
              return (
              <>
                <h3 key={'h3-'+article.name+'-'+index} under={article.sub} id={article.name} > {article.title} </h3>
                <p key={'p-'+article.name+'-'+index} >
                  {article.content}
                </p>
              </>
            ) } )
          }

useEffect( () => {
    /*
    const eltTop = (id) => {
    return document.querySelector('#'+id).getBoundingClientRect().top}
    let brink = {}
    articleBreakpoints.map((article)=>{
      brink = Object.assign(brink, {[article]:eltTop(article)})
      setTop(brink)
    })*/
  } ,[])

<li active ={ activeSommaryLink['intro'] ? 'active' : '' } >
              <Link href="#intro" >
                Intro
              </Link>
            </li>
            <li active ={ activeSommaryLink['body'] ? 'active' : '' } >
              <Link href="#body" >
                Corps
              </Link>
              <ul>
                <li under={1} active={ subActiveSommaryLink['body_1'] ? 'active' : '' } >
                  <Link href="#body_1" >
                    Corps_1
                  </Link>
                </li>
                <li under={1} active={ subActiveSommaryLink['body_2'] ? 'active' : '' } >
                  <Link href="#body_2" >
                    Corps_2
                  </Link>
                </li>
              </ul>
            </li>
            <li active ={ activeSommaryLink['conclu'] ? 'active' : '' } >
              <Link href="#conclu" >
                Conclu
              </Link>
            </li>

<Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/crystallabo-logo.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/crystallabo-logo.png"
                alt="Second slide"
              />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/crystallabo-logo.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


  switch(action.type){
    case'set_active':{
      let breaks = {
        'intro': false,
        'body': false,
        'conclu': false
      }
       breaks[action.active] = true
      return breaks
    }
  }
  
  
          <h3 id='intro' > Intro </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula id mauris mollis vulputate. Etiam vel turpis mollis, imperdiet urna sit amet, accumsan mauris. Donec dui massa, tristique vel sapien et, vehicula sodales sem. Mauris egestas, urna in volutpat cursus, diam quam feugiat sapien, eu gravida enim sem quis lectus. Integer ac ipsum egestas tellus condimentum tempor at vitae nulla. Vivamus ultricies tincidunt ex dictum rhoncus. Maecenas in efficitur neque. Curabitur at elit sed quam vestibulum facilisis. Donec eu enim efficitur, tincidunt risus id, vulputate mi. Maecenas sagittis arcu et erat cursus consequat. Praesent pulvinar metus quis est convallis, et feugiat elit vehicula.

Integer vestibulum dui ac vulputate euismod. Nam tristique faucibus risus non mattis. Praesent quis est eget magna euismod suscipit vel ut sapien. Morbi urna nibh, fermentum mollis dictum eu, rhoncus eget turpis. Fusce aliquet egestas gravida. In suscipit consequat dignissim. Curabitur et dolor vel felis molestie molestie vel non purus. Donec faucibus nisl urna, non volutpat eros ullamcorper eget. Phasellus congue, nulla vitae sodales sodales, leo nunc rutrum ante, ut imperdiet nibh purus a ex. Fusce ullamcorper odio ac ligula pretium, eu facilisis nisl tempor. Curabitur feugiat at felis in ornare.
          </p>
          <h3 id='body' > Corps </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula id mauris mollis vulputate. Etiam vel turpis mollis, imperdiet urna sit amet, accumsan mauris. Donec dui massa, tristique vel sapien et, vehicula sodales sem. Mauris egestas, urna in volutpat cursus, diam quam feugiat sapien, eu gravida enim sem quis lectus. Integer ac ipsum egestas tellus condimentum tempor at vitae nulla. Vivamus ultricies tincidunt ex dictum rhoncus. Maecenas in efficitur neque. Curabitur at elit sed quam vestibulum facilisis. Donec eu enim efficitur, tincidunt risus id, vulputate mi. Maecenas sagittis arcu et erat cursus consequat. Praesent pulvinar metus quis est convallis, et feugiat elit vehicula.

Integer vestibulum dui ac vulputate euismod. Nam tristique faucibus risus non mattis. Praesent quis est eget magna euismod suscipit vel ut sapien. Morbi urna nibh, fermentum mollis dictum eu, rhoncus eget turpis. Fusce aliquet egestas gravida. In suscipit consequat dignissim. Curabitur et dolor vel felis molestie molestie vel non purus. Donec faucibus nisl urna, non volutpat eros ullamcorper eget. Phasellus congue, nulla vitae sodales sodales, leo nunc rutrum ante, ut imperdiet nibh purus a ex. Fusce ullamcorper odio ac ligula pretium, eu facilisis nisl tempor. Curabitur feugiat at felis in ornare.
          </p>
          <h3 under={1} id='body_1' > Corps_1 </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula id mauris mollis vulputate. Etiam vel turpis mollis, imperdiet urna sit amet, accumsan mauris. Donec dui massa, tristique vel sapien et, vehicula sodales sem. Mauris egestas, urna in volutpat cursus, diam quam feugiat sapien, eu gravida enim sem quis lectus. Integer ac ipsum egestas tellus condimentum tempor at vitae nulla. Vivamus ultricies tincidunt ex dictum rhoncus. Maecenas in efficitur neque. Curabitur at elit sed quam vestibulum facilisis. Donec eu enim efficitur, tincidunt risus id, vulputate mi. Maecenas sagittis arcu et erat cursus consequat. Praesent pulvinar metus quis est convallis, et feugiat elit vehicula.
          </p>
          <h3 under={1} id='body_2' > Corps_2 </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula id mauris mollis vulputate. Etiam vel turpis mollis, imperdiet urna sit amet, accumsan mauris. Donec dui massa, tristique vel sapien et, vehicula sodales sem. Mauris egestas, urna in volutpat cursus, diam quam feugiat sapien, eu gravida enim sem quis lectus. Integer ac ipsum egestas tellus condimentum tempor at vitae nulla. Vivamus ultricies tincidunt ex dictum rhoncus. Maecenas in efficitur neque. Curabitur at elit sed quam vestibulum facilisis. Donec eu enim efficitur, tincidunt risus id, vulputate mi. Maecenas sagittis arcu et erat cursus consequat. Praesent pulvinar metus quis est convallis, et feugiat elit vehicula.
          </p>
          <h3 id='conclu'> Conclu </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula id mauris mollis vulputate. Etiam vel turpis mollis, imperdiet urna sit amet, accumsan mauris. Donec dui massa, tristique vel sapien et, vehicula sodales sem. Mauris egestas, urna in volutpat cursus, diam quam feugiat sapien, eu gravida enim sem quis lectus. Integer ac ipsum egestas tellus condimentum tempor at vitae nulla. Vivamus ultricies tincidunt ex dictum rhoncus. Maecenas in efficitur neque. Curabitur at elit sed quam vestibulum facilisis. Donec eu enim efficitur, tincidunt risus id, vulputate mi. Maecenas sagittis arcu et erat cursus consequat. Praesent pulvinar metus quis est convallis, et feugiat elit vehicula.

Integer vestibulum dui ac vulputate euismod. Nam tristique faucibus risus non mattis. Praesent quis est eget magna euismod suscipit vel ut sapien. Morbi urna nibh, fermentum mollis dictum eu, rhoncus eget turpis. Fusce aliquet egestas gravida. In suscipit consequat dignissim. Curabitur et dolor vel felis molestie molestie vel non purus. Donec faucibus nisl urna, non volutpat eros ullamcorper eget. Phasellus congue, nulla vitae sodales sodales, leo nunc rutrum ante, ut imperdiet nibh purus a ex. Fusce ullamcorper odio ac ligula pretium, eu facilisis nisl tempor. Curabitur feugiat at felis in ornare.
          </p>

/*
export function ArticleSection({children})
{ 
  const ArticleSectioni = 
  styled.section`
    display: flex;
    width: 1200px;
    gap: 5em;
    & h3{
      color: ${colors.primary};
    }
  `
  return <ArticleSectioni>
          {children} 
         </ArticleSectioni>
 }
export function ArticleContent({children}){
  const ArticleContenti = 
  styled.article`
    display: block;
    margin-right: 4em;
    width: 90%;
    & h3{
      color: ${colors.primary};
    }
  `
  return <ArticleContenti>
           {children}
         </ArticleContenti>
  }
  
export default function ArticleMenu({children}){
 let top = 0 
  useEffect(()=>{
   const eltTop = (id) => {
    return document.querySelector('#'+id).getBoundingClientRect().top}
   top = eltTop("menu")
  },[])
  console.log(top)
  const ArticleMenui = 
  styled.nav`
    margin-left: 2em;
    position: sticky;
    z-index: 998;
    top: 20px;
    width: 10%;
    gap: 30rem;
  `
  return <ArticleMenui id="menu">{children}
      </ArticleMenui>
  }
  
export function ArticleSommary({children}){ const ArticleSommaryi =
  styled.ul`
    list-style: none;
    padding-left: 1em;
    color: ${colors.secondary};
    & li:hover{
      color: ${colors.primary};
    }
  `
  return <ArticleSommaryi>
     {children}
  </ArticleSommaryi>
  }

export function ArticlePub({children}){
  const ArticlePubi = 
  styled.div`
    text-align: center;
    margin-top: 30em;
  `
  return <ArticlePubi>{children}
  </ArticlePubi>
  }
  */
  
  
        //console.log("In map articleBreakpoints "+article+ " is at top at " + eltTop(article) + "and window scroll Height is " + (/*window.pageYOffset/*/window.innerHeight) )
  
  

      {/*<style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          //width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          //max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        
      `}</style>*/}