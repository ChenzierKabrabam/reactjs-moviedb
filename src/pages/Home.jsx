import React from 'react'
import { endURL } from '../api/request'
import Content from '../component/Content'

function Home() {
  return (
    <>
      <Content title='trending' baseURL={endURL.trending} />
      <Content title='upcoming' baseURL={endURL.upcoming} />
      <Content title='popular' baseURL={endURL.popular} />
      <Content title='top rated' baseURL={endURL.top_rated} />
    </>
  )
}

export default Home
