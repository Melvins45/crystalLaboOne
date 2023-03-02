import {useState} from'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'


export default function FirstPost() {
  const [grow, setGrow] = useState(false)
  const TestH = styled.h1`
    transform: scale(1);
    color: red;
    transition: 200ms;
    &:active{
      color: blue;
      transform: scale(0.7);
      transition: 200ms;
    }
` 

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <TestH onClick={()=> setGrow(true)} >First Post</TestH>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}