import box1 from "../assets/box1_image.jpg";
import box2 from "../assets/box2_image.jpg";
import box3 from "../assets/box3_image.jpg";
import box4 from "../assets/box4_image.jpg";
import box5 from "../assets/box5_image.jpg";
import box6 from "../assets/box6_image.jpg";
import box7 from "../assets/box7_image.jpg";
import box8 from "../assets/box8_image.jpg";

const images = [box1, box2, box3, box4, box5, box6, box7, box8];

const titles = [
  "Clothes",
  "Health Care",
  "Furniture",
  "Electronics",
  "Makeup",
  "Petcare",
  "Flight Tickets",
  "Fashion",
];

function BoxGrid() {
  return (
    <div className="shop-section">
      {titles.map((title, index) => (
        <div className="box" key={index}>
          <div className="box-content">
            <h2>{title}</h2>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${images[index]})` }}
            ></div>
            <p>See more</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoxGrid;
