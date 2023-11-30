import React from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import IncrementDecrement from '../hook/IncrementDecrement'
import Effect from '../hook/Effect'
import DataFetch from '../components/DataFetch'


const HomePage = () => {
  return (
     <>
     <Carousel/>
     <Card/>
     <IncrementDecrement/>
     <Effect/>
     <DataFetch/>
     </>
  )
}

export default HomePage