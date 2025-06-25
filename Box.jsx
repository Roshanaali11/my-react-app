function App() {
  return (
    <Router>
      <div className="box">
        <nav className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to Home</h2>} />
          <Route path="/services" element={<h2>Our Services</h2>} />
          <Route path="/about" element={<h2>About Us</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;