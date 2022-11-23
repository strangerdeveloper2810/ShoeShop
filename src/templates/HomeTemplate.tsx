import React from 'react'
import {Outlet} from "react-router-dom"
type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <div>
        <header>Header</header>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}