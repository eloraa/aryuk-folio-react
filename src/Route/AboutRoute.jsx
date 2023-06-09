import React from 'react'
import { About } from '../components/About'
export const AboutRoute = (prop) => {
  return (
    <About _this={prop._this || null}/>
  )
}
