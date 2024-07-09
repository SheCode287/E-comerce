import React from 'react'
import cloth1 from '../src/assets/Rack of clothes in store.svg'
import cloth2 from '../src/assets/AdobeStock_348864804_Preview 1.svg'

function About() {
  return (
    <>
      <div><h2>About Us</h2></div>
      <div className='ctr'>
         <div className='content1'>
            <p> 
            <h3>Elevate Your Style with Our Exclusive Clothing Line</h3>
            Our clothing line is designed for those who believe in expressing their unique style with confidence and grace. Each piece in our collection is carefully curated to blend contemporary trends with timeless elegance, ensuring you always look your best, no matter the occasion. From casual wear that embodies comfort and chic, to sophisticated evening attire that turns heads, our range offers something for everyone. Dive into our latest collection and discover how our passion for fashion can elevate your wardrobe, helping you embrace every moment with unparalleled style.</p>

            <div><img src={cloth1} alt="Clothline" /></div>
        </div>
        

          <div className='content2'>

          <div><img src={cloth2} alt="Clothline" /></div>
          <div className='content2'>
            
            <p>
            <h3>Unleash Your Fashion Potential with Our Signature Clothing Line</h3>Step into a realm where your style knows no bounds. Our clothing line is more than just apparel; it's a celebration of individuality, a blend of modern chic and timeless sophistication crafted to make you stand out. Every piece is a masterpiece, designed to accentuate your personality and elevate your wardrobe. From effortlessly stylish casual wear to breathtaking evening outfits, our collection empowers you to express yourself with confidence and flair. Embrace the allure of high fashion, redefine your look, and make every day a runway moment with our exclusive selection.</p>
          </div>

          </div>
      </div>
    </>
  )
}

export default About
