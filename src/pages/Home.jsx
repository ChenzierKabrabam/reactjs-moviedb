import React from 'react'
import Content from '../component/Content'
import Header from '../component/Header'

function Home() {
  return (
    <>
      <Header />
      <Content title='trending' />
      <Content title='upcoming' />
      <Content title='popular' />
      <Content title='top rated' />
    </>
  )
}

export default Home
