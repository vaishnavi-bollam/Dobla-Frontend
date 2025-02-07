// import {Link} from 'react-router-dom'
// import Header from '../Header'

// import './index.css'

// const Home = () => (
//   <>
//     <Header />
//     <div className="home-container">
//       <div className="home-content">
//         <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
//           alt="clothes that get you noticed"
//           className="home-mobile-img"
//         />
//         <p className="home-description">
//           Fashion is part of the daily air and it does not quite help that it
//           changes all the time. Clothes have always been a marker of the era and
//           we are in a revolution. Your fashion makes you been seen and heard
//           that way you are. So, celebrate the seasons new and exciting fashion
//           in your own way.
//         </p>
//         <Link to="/products">
//           <button type="button" className="shop-now-button">
//             Shop Now
//           </button>
//         </Link>
//       </div>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
//         alt="clothes that get you noticed"
//         className="home-desktop-img"
//       />
//     </div>
//   </>
// )

// export default Home


import { Link } from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />

    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>



    <div className="home-container1">
      <div className="banner">
        <div className="banner-image">
          <img src="https://www.dukeindia.com/cdn/shop/articles/Summer_Shot-2_Duke_Fashions_1024x1024.jpg?v=1655471726" alt="Summer Collection" />
        </div>
        <div className="banner-content">
          <h1 className="banner-heading">Level up your style with our summer collections</h1>
          <Link to="/products">
            <button type="button" className="shop-now-button">Shop Now</button>
          </Link>
        </div>


      </div>



      <section className="brands-section">
        <h2>Brands</h2>
        <div className="brands-list">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9xQMMVG4BYPRFhFYdEqHvaCNSP948QbPphqZtO76NetywKtRQ" alt="Chanel" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIcW5N59nQu7KJBkkdOAjmaCPiI6rLULV9A&s" alt="Calvin Klein" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yy0b_b-QPYhkVh7y1TpanaPHxZhrOKdWNg&s" alt="Gucci" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2SYGbIDM6GPSlKXedxEMyecjdUq7vDCyQQ&s" alt="Dolce & Gabbana" />
        </div>
      </section>

      <section className="curated-picks">
        <h2>Curated Picks</h2>
        <div className="picks-grid">
          <div className="pick-item">Best Seller</div>
          <div className="pick-item">Shop Men</div>
          <div className="pick-item">Shop Women</div>
          <div className="pick-item">Shop Casual</div>
        </div>
      </section>

      <section className="discount-banner">
        <p>35% off only this Friday and get special gift</p>
        <Link to="/products">
          <button type="button" className="grab-now-button">Grab it now</button>
        </Link>
      </section>
    </div>
  </>
)

export default Home
