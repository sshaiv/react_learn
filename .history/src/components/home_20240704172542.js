/* Navbar container */
.navbar {
    background-color: #333; /* Dark background */
    color: #fff; /* Light text color */
    padding: 10px 0;
  }
  
  /* Container for centering content */
  .navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px; /* Adjust as needed */
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* Logo link */
  .navbar .logo {
    font-size: 1.5rem;
    margin: 0;
  }
  
  .navbar .logo a {
    color: #fff;
    text-decoration: none;
  }
  
  /* Navigation links */
  .navbar .nav-links {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  .navbar .nav-links li {
    margin-right: 20px;
  }
  
  .navbar .nav-links li:last-child {
    margin-right: 0;
  }
  
  .navbar .nav-links li a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
  }
  
  .navbar .nav-links li a:hover {
    color: #ffc107; /* Change color on hover */
  }
  