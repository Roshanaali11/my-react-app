function Footer(){

    return(
<footer className="footer">
  <div className="footer-links">
    <a href="https://wa.me/917999356097?text=Hi%20Zosh!%20I%20want%20to%20know%20more%20about%20robot%20food."
  target="_blank"
  rel="noopener noreferrer">  Contact <img className="whatsapplogo"
    src="/whatsapp.logo.jpg"
    alt="WhatsApp"
    style={{ width: '20px', marginRight: '5px' }}
  />  </a>
    <span>|</span>
    <a href="#newsletter">Newsletter</a> <input placeholder="Enter Email"></input>
  </div>
  <div className="footer-copy">
    © Zosh. All rights reserved. Since 2023.
  </div>
</footer>

    )

}

export default Footer