import React from 'react'
import Navbar from './Layout/Navbar'
import Category from './Layout/Category'
import Banner from './Layout/Banner'
import Categories from './Layout/Categories'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr></hr>
      <Category />
      <hr></hr>
      <Banner/>
      <Categories/>
    </div>
  )
}

export default App