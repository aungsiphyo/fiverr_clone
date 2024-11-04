import React from 'react'
import Navbar from './Layout/Navbar'
import Category from './Layout/Category'
import Banner from './Layout/Banner'
import CardsRow from './Layout/CardsRow'
import Gigs from './Layout/Gigs'
import UGC from './Layout/UGC'
import UGCtwo from './Layout/UGCtwo'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr></hr>
      <Category />
      <hr></hr>
      <Banner/>
      <CardsRow/>
      <Gigs />
      <UGC />
      <UGCtwo />
    </div>
  )
}

export default App