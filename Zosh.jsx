import '@fortawesome/fontawesome-free/css/all.min.css';
function Header(){


  return (
    <div>
      <nav className="navbar">
       <div className='navbar-brand'>
        <h1>Zosh</h1>
         <img src="/brandlogo.avif" alt="Zosh Logo" className="logo" />
       
       </div> 
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>

          <div className="dropdown">
      <button className="dropbtn">Products </button>
      <div className="dropdown-content">
        <a href="#energy">Energy Cubes</a>
        <a href="#fuel">Oil Fuel Cells</a>
        <a href="#snacks">Circuit Snacks</a>
        <a href="#hydration">AI Hydration Gels</a>
      </div>
    </div>



          <a href="#contact">Contact</a>

        </div>
      </nav>

      <div className="content">
        <h2>Welcome to Zosh</h2>
        <p>
          Zosh is the future of nutrition for artificial intelligence. 
          We specialize in creating optimized, nutrient-rich food exclusively
           designed for robots and intelligent machines. Whether your bot needs energy cubes, oil-based fuel cells, or next-gen circuit-boosting meals, Zosh is your go-to platform.
        </p>
        <p>
          Our products are engineered to enhance performance, reduce overheating, 
          and increase battery life. Join us in revolutionizing how machines refuel!
        </p>
      </div>
     
     

    </div>
  );
}

export default Header;