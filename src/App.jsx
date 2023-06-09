import React from "react"
import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Headers"
import { IndexRoute } from "./Route/IndexRoute"
import { AboutRoute } from "./Route/AboutRoute"
import { Footer } from "./components/Footer"
import { Preloader } from "./components/Preloader"
import { Photography } from "./components/Photography"
import { Not_found } from "./components/404"

const _this = {
    initHeader: function() {
        return null
    },
    initFooter: function() {
        return null
    },
    initPage: function() {
        return null
    }
}

function App() {
  return (
    <div className='_container h-full flex flex-col'>
      <Header _this={_this}/>
      <div className='flex-fill'></div>
      <Routes>
        <Route exact path="/" element={ <IndexRoute _this={_this}/> }/>
        <Route path="/about" element={ <AboutRoute _this={_this} /> }/>
        <Route path="/Photography" element={ <Photography _this={_this}/> }/>
        <Route path="*" element={<Not_found/>}/>
      </Routes>
      <div className='flex-fill'></div>
      <Footer _this={_this}/>
      <Preloader _this={_this}/>
    </div>
  )
}

export default App
