function Footer() {
    return (
      <footer>
        <div className="foot-panel">Back to top</div>
  
        <div className="foot-panel2">
          {[1, 2, 3, 4].map((_, i) => (
            <ul key={i}>
              <p>Get to know us</p>
              <a>Careers</a>
              <a>Blog</a>
              <a>About Amazon</a>
              <a>Investor Relations</a>
              <a>Amazon Devices</a>
              <a>Amazon Science</a>
            </ul>
          ))}
        </div>
  
        <div className="foot-panel3">
          <div className="logo"></div>
        </div>
  
        <div className="foot-panel4">
          <div className="pages">
            <a>Conditions of Use</a>
            <a>Privacy Notice</a>
            <a>Your ads privacy choices</a>
          </div>
          <div className="copyright">© 1996-2025, Amazon.com, Inc. or its affiliates</div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  