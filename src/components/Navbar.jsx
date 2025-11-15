import logo from "../assets/amazon_logo.png";

function Navbar() {
  return (
    <header>
      <div className="navbar">
        {/* Logo */}
        <div className="nav-logo border">
          <img src={logo} alt="Amazon Logo" className="logo-img" />
        </div>

        {/* Address */}
        <div className="nav-address border">
          <p className="add-first">Deliver to</p>
          <div className="add-icon">
            <i className="fa-solid fa-location-dot"></i>
            <p className="add-second">India</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="nav-search">
          <select className="search-select">
            <option>ALL</option>
          </select>
          <input placeholder="Search Amazon" className="search-input" />
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {/* Sign in */}
        <div className="nav-signin border">
          <p><span>Hello, sign in</span></p>
          <p className="nav-second">Account & List</p>
        </div>

        {/* Returns */}
        <div className="nav-return border">
          <p><span>Return</span></p>
          <p className="nav-second">& Orders</p>
        </div>

        {/* Cart */}
        <div className="nav-cart border">
          <i className="fa-solid fa-cart-shopping"></i> Cart
        </div>
      </div>

      {/* Panel / menu items */}
      <div className="panel">
        <div className="panel-all">
          <i className="fa-solid fa-bars"></i> All
        </div>

        <div className="panel-ops">
          <p>MX PLAYER</p>
          <p>Sell</p>
          <p>Bestsellers</p>
          <p>Today's Deals</p>
          <p>Mobiles</p>
          <p>Prime</p>
          <p>Customer Service</p>
        </div>

        <div className="panel-deals border">Shop deals in electronics</div>
      </div>
    </header>
  );
}

export default Navbar;
