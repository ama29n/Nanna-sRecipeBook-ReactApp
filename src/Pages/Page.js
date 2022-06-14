import Categories from "../Components/Categories"
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Search from "../Components/Search"
import Header from "../Components/Header"
import React, { Suspense } from 'react'
// import Home from './Home'

const Home = React.lazy(() => import('./Home'));
const Cuisine = React.lazy(() => import('./Cuisine'));
const Searched = React.lazy(() => import('./Searched'))
const Recipe = React.lazy(() => import('./Recipe'))

function Page() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <Search />
        <Categories />
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/cuisine/:type' element = {<Cuisine/>}/>
          <Route path = '/search/:search' element ={<Searched/>} />
          <Route path = '/recipe/:id' element = {<Recipe />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Page;