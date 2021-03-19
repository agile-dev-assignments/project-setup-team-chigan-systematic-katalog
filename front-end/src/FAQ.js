import React from 'react'
import './FAQ.css'
import { Link } from 'react-router-dom'

const FAQ = (props) => {
  return (
    <div className="FAQ">
      <h1>Frequently Asked Questions</h1>
      
      <ul className="questions">
        <li><a href="#q1">What is Katalog?</a></li>
        <li><a href="#q2">How does it work?</a></li>
        <li><a href="#q3">How do I avoid getting scammed?</a></li>
        <li><a href="#q4">Why isn't (artist)'s photocards available on Katalog?</a></li>
        <li><a href="#q5">Can I send you scanned images of photocards I have?</a></li>
        <li><a href="#q6">I found a bug/glitch on the website, how can I contact you?</a></li>
        <li><a href="#q7">Commonly Used Terminology</a></li>
      </ul>

      <hr className="line"></hr>

      <div className="answers">
        <h3 id="q1">What is Katalog?</h3>
        <p>Katalog is a website made to help Kpop photocard collectors with their collections.
          It is a platform where Kpop fans can trade/buy/sell their photocards.
        </p>

        <h3 id="q2">How does it work?</h3>
        <p>You can find photocards by using the search feature. Each photocard page will display information about the photocard
          along with all the users who are selling/trading/looking-for that photocard. Create an account to be able to add listings,
          keep a wishlist and more!
        </p>

        <h3 id="q3">How do I avoid getting scammed?</h3>
        <p>Here are some tips to avoid getting scammed:</p>
        <ul>
          <li>Ask them to send a video of the photocard with their username written on a piece of paper in the background</li>
          <li>Ask them for proofs of past trades/sales</li>
          <ul>
            <li>If they don't have past proofs, ask them to send first</li>
          </ul>
          <li>Ask for a picture of the photocard when it is all packaged</li>
          <li>Ask for a picture of your address on the envelope/mailer for confirmation</li>
          <li>Ask them to record themselves dropping off the photocard in the mail or ask for postal receipt</li>
        </ul>
        <p>Disclaimer: These tips won't 100% guarantee not getting scammed. 
          Katalog is not responsible for any transactions that does not go as planned.</p>

        <h3 id="q4">Why isn't (artist)'s photocards available on Katalog?</h3>
        <p>There are hundreds of artists that each need photocard pages! We are working to get them all available!</p>

        <h3 id="q5">Can I send you scanned images of photocards I have?</h3>
        <p>Yes! If you have high quality scanned images of photocards that are not yet available on our website 
          please reach out to us through email or social media. Find our contact information <Link to="/about">here</Link>.
        </p>

        <h3 id="q6">I found a bug/glitch on the website, how can I contact you?</h3>
        <p>You can contact us through email or social media! You can find our contact information <Link to="/about">here</Link>.
        </p>

        <h3 id="q7">Commonly Used Terminology</h3>
        <ul>
          <li>WTT: Willing To Trade</li>
          <li>WTS: Willing To Sell</li>
          <li>WTB: Willing To Buy</li>
          <li>NFT: Not For Trade</li>
          <li>NFS: Not For Sale</li>
          <li>LFT: Looking For Trader</li>
          <li>LFS: Looking For Seller</li>
          <li>LFB: Looking For Buyer</li>
          <li>ISO: In Search Of</li>
        </ul>
        
      </div>
      
    </div>
  )
}

export default FAQ
