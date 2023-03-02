import {useReducer, useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { ArticleMenu,ArticleSection, ArticleContent, ArticleSommary, ArticlePub} from '../components/Main/Article'
import Sommary from '../components/Sommary/Sommary'
//import { Carousel } from 'react-responsive-carousel'
import Carousel from 'react-bootstrap/Carousel'
import content from '../utils/content/template-content'

export default function Home() {
  
  const [top,setTop] = useState({})
  
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  
  
  //console.log(window.scrollHeight)
  //console.log('In index tops are at', top)
  //console.log('content is ', content.articleBreakPoints[1].sub)
  
  return (
    <div className="container">
      <Head>
        <title>{content.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ArticleSection>
        <ArticleMenu>
          <Sommary content={content}/>
          <ArticlePub id="articlePub" top={680.4375} >
            Besoin d'assistance ? Contactez-nous ou prenez un rendez-vous.
          </ArticlePub>
        </ArticleMenu>
        <ArticleContent>
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
        </ArticleContent>
      </ArticleSection>
    </div>
  )
}
