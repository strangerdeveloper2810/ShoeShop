import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../Components/Header'
type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <div>
        <Header/>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}