import hero from "../assets/hero_image.jpg";

function Hero() {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-msg">
        <p>
          You are on amazon.com, you can also shop on amazon.in for millions of
          products with fast local delivery. <a>Click here to go to amazon.in</a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
