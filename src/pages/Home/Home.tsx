import React from 'react'
import {useSelector} from "react-redux"
import { RootState } from '../../redux/configStore';
type Props = {}

export default function Home({}: Props) {
  const number = useSelector((state: RootState)=> state.number);
  return (
    <div>
      number : {number}
    </div>
  )
}