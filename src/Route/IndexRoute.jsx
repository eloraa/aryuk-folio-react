import React from 'react'
import { Home } from '../components/Home'
export const IndexRoute = (prop) => {
  return (
    <Home _this={prop._this || null}/>
  )
}
