import React from 'react'
import '../Style/Navbar.css'
import * as Icons from 'react-bootstrap-icons'

const Navbar = () => {
  return (
    <>
      <div className="nav-main">
        <div className="nav-head">
          <div className="nav-head-com" style={{ display: 'flex' }}><Icons.Peace size={50} />
            <div style={{ marginLeft: '10px' }}>
              <div>AAFIYA</div>
              <div>MEDIRETREATS</div>
              <div style={{ fontSize: '10px' }}>Healing Globally...</div>
            </div>
          </div>
          <div className="nav-head-com" style={{ display: 'flex', alignItems: 'center' }}>
            <div><Icons.Peace size={50} /></div>
            <div style={{ marginLeft: '10px' }}><Icons.ChatDots size={30} /></div>
            <div>
              <div style={{ fontSize: '13px' }}>Second Medical Option</div>
              <div>Book Consultation</div>
            </div>
          </div>
          <div className="nav-head-com" style={{ display: 'flex', alignItems: 'center' }}>
            <div><Icons.PhoneVibrate size={30} /></div>
            <div style={{ marginLeft: '10px' }}>
              <div style={{ fontSize: '13px' }}>Call Us On</div>
              <div>985 896 2222</div>
            </div>
          </div>
          <div className="nav-head-com" style={{ display: 'flex', alignItems: 'center' }}>
            <div><Icons.Envelope size={30} /></div>
            <div style={{ marginLeft: '10px' }}>
              <div style={{ fontSize: '13px' }}>Email Us On</div>
              <div>info@mediatreats.com</div>
            </div>
          </div>
          <div className="nav-head-com" style={{ display: 'flex', alignItems: 'center' }} >
            <div><Icons.Flag /></div>
            <select name="" id="">
              <option value="">English</option>
              <option value="">Hindi</option>
              <option value="">latin</option>
            </select>
          </div>
        </div>

        <div className="nav-bot">
          <div className="nav-bot-content">
            <div className="nbcontent">Home</div>
            <div className="nbcontent">About Us</div>
            <div className="nbcontent">Treatments +</div>
            <div className="nbcontent">Destinations +</div>
            <div className="nbcontent">Hospitals</div>
            <div className="nbcontent">FAQs</div>
            <div className="nbcontent">Blog</div>
            <div className="nbcontent">Request A Quote</div>
          </div>
          <div className="nav-bot-search">
            <div className='nav-bot-searchBox'>
              <input type="text" placeholder='Search' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
