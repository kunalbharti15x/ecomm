import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const MainBanner = ({ mainBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beats-solo">
          {mainBanner.smallText}
          </p>
          <h3>
          {mainBanner.midText}
          </h3>
          <h1>
          {mainBanner.largeText1}
          </h1>
          <img src={urlFor(mainBanner.image)} alt="headphones" className='hero-banner-image'/> 
          <div> 
            <Link href = {`/product/${mainBanner.product}`}>
              <button type="button">{mainBanner.buttonText}</button>
            </Link>
            <div className="desc">
              <h5>Description</h5>
              <p>
                {mainBanner.desc}
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainBanner