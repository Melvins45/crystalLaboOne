import {useReducer, useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Template from'../../components/latouts/Template-Content-Pages'
import content from '../../utils/content/specialities'

export default function Speciality(){
  const router = useRouter()
  const {slug} = router.query
  
  return (<Template content={content[slug]}/>)
}