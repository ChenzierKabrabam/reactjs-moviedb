import React from 'react'
import { endURL } from '../api/request'
import Billboard from '../component/Billboard'
import Content from '../component/Content'
import Footer from '../component/Footer'
function Home() {
  return (
    <>
      <Billboard baseURL={endURL.nowPlaying} />
      <Content title='trending' baseURL={endURL.trending} />
      <Content title='upcoming' baseURL={endURL.upcoming} />
      <Content title='popular' baseURL={endURL.popular} />
      <Content title='top rated' baseURL={endURL.top_rated} />
      <Footer />
    </>
  )
}

export default Home
