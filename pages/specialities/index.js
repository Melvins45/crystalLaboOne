import {useReducer, useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Template from'../../components/layouts/Template-Content-Pages'
import content from '../../utils/content/specialities'

export default function Speciality(){
  return (<Template content={content('home')}/>)
}