import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className='Hero'>
      <div className='HeroGroup'>
        <h1>Hi Samit Barai!</h1>
        <p>Welcome to your new Gatsby site. This is our first website built using React</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
   
  </div>
)

export default IndexPage
