import "./index.css";
import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
const Website = () => {
  const [display, setDisplay] = useState("block");
  const [display2, setDisplay2] = useState("none");
  const [class2, setClass2] = useState("ullinks2");
  const [display3, setDisplay3] = useState("none");
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWindow = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("updating width");
      console.log(newWidth);
    };
    window.addEventListener("resize", updateWindow);
    return () => window.removeEventListener("resize", updateWindow);
  }, []);

  const Toggle = () => {
    if (display2 == "flex") {
      setDisplay2("none");
      setDisplay("block");
    } else {
      setDisplay2("flex");
      setDisplay("none");
    }
  };
  useEffect(() => {
    if (width < 1100) {
      setDisplay("block");
    }
  }, [width]);
  return (
    <>
      <div className="wrapper">
        <div className="navbar">
          <div className="logo">
            <div className="logoV">V</div>
            <div className="venue">venu</div>
          </div>
          <div className="links">
            <ul
              className={width < "1100" ? class2 : "ullinks"}
              style={{ display: width < "1100" ? display2 : "flex" }}
              onMouseLeave={width < "1100" ? () => Toggle() : ""}
            >
              <li className="li">Popular</li>
              <li
                className="li arrowdown"
                onMouseEnter={() => setDisplay3("block")}
                onMouseLeave={() => setDisplay3("none")}
              >
                Most Visited <ArrowDropDownIcon className="arrowdrop" />
                <ul className="uldown" style={{ display: display3 }}>
                  <li className="lid">page 1</li>
                  <li className="lid">page 2</li>
                  <li className="lid">page 3</li>
                  <li className="lid">page 3</li>
                </ul>
              </li>
              <li className="li">Blog Entries</li>
              <li className="li">Our Services</li>
              <li className="li">Contact Us</li>
            </ul>
          </div>
          <div
            className="menuicon"
            style={{ display: width < 1100 ? display : "none" }}
            onClick={() => Toggle()}
          >
            <MenuIcon />
          </div>
        </div>
        <div className="main">
          <div className="intromain">
            <div className="linemain"></div>
            <h1 className="h1main">Best Finder For You</h1>
            <p className="pmain">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="buttonmain">Discover More</button>
          </div>
          <div className="formmain">
            <input type="text" placeholder="Your name" className="inputmain" />
            <input type="text" placeholder="Your name" className="inputmain" />
            <select name="" id="" className="selectmain">
              <option value="" className="optionmain">
                Meeting 1
              </option>
              <option value="" className="optionmain">
                Meeting 2
              </option>
              <option value="" className="optionmain">
                Meeting 3
              </option>
              <option value="" className="optionmain">
                Meeting 4
              </option>
            </select>
            <button className="buttonmain2">Search Now</button>
          </div>
        </div>
        <div className="popular">
          <h2 className="h2popular">Popular Places</h2>
          <h1 className="h1popular">Integer sapien odio</h1>
        </div>
        <div className="gallery">
          <div className="card">
            <div className="left">
              <h3 className="h1gallery">Mauris tempus</h3>
              <p className="pgallery">76 Listings</p>
            </div>
            <div className="right">
              <AddIcon />
            </div>
          </div>
          <div className="card">
            <div className="left">
              <h3 className="h1gallery">Mauris tempus</h3>
              <p className="pgallery">76 Listings</p>
            </div>
            <div className="right">
              <AddIcon />
            </div>
          </div>
          <div className="card">
            <div className="left">
              <h3 className="h1gallery">Mauris tempus</h3>
              <p className="pgallery">76 Listings</p>
            </div>
            <div className="right">
              <AddIcon />
            </div>
          </div>
          <div className="card">
            <div className="left">
              <h3 className="h1gallery">Mauris tempus</h3>
              <p className="pgallery">76 Listings</p>
            </div>
            <div className="right">
              <AddIcon />
            </div>
          </div>
          <div className="card">
            <div className="left">
              <h3 className="h1gallery">Mauris tempus</h3>
              <p className="pgallery">76 Listings</p>
            </div>
            <div className="right">
              <AddIcon />
            </div>
          </div>
        </div>
        <div className="threedots">
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
        <section className="section">
          <div className="featured">
            <p className="ffeatured">Featured Places</p>
            <p className="pfeatured">Present nec dec send Unri</p>
          </div>
          <div className="cards2">
            <div className="card2">
              <div className="top2">
                <div className="stars">
                  <ul className="starsul">
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                  </ul>
                </div>
                <div className="date">
                  <h2 className="h2date">28</h2>
                  <p className="p2date">AUGUST</p>
                </div>
              </div>
              <div className="center2">
                <h2 className="h2">Lorem ipsum dolor</h2>
                <p className="category">Category One</p>
                <p className="pfianl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  necessitatibus optio neque adipisci quas consequuntur.
                </p>
              </div>
              <div className="bottom2">
                <div className="leftbottom">ADD TO FAVORITE</div>
                <div className="divline"></div>
                <div className="rightbottom">CONTINUE READING</div>
              </div>
            </div>
            <div className="card2">
              <div className="top2">
                <div className="stars">
                  <ul className="starsul">
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                  </ul>
                </div>
                <div className="date">
                  <h2 className="h2date">28</h2>
                  <p className="p2date">AUGUST</p>
                </div>
              </div>
              <div className="center2">
                <h2 className="h2">Lorem ipsum dolor</h2>
                <p className="category">Category One</p>
                <p className="pfianl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  necessitatibus optio neque adipisci quas consequuntur.
                </p>
              </div>
              <div className="bottom2">
                <div className="leftbottom">ADD TO FAVORITE</div>
                <div className="divline"></div>
                <div className="rightbottom">CONTINUE READING</div>
              </div>
            </div>{" "}
            <div className="card2">
              <div className="top2">
                <div className="stars">
                  <ul className="starsul">
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                    <li className="listar">
                      <StarIcon />
                    </li>
                  </ul>
                </div>
                <div className="date">
                  <h2 className="h2date">28</h2>
                  <p className="p2date">AUGUST</p>
                </div>
              </div>
              <div className="center2">
                <h2 className="h2">Lorem ipsum dolor</h2>
                <p className="category">Category One</p>
                <p className="pfianl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  necessitatibus optio neque adipisci quas consequuntur.
                </p>
              </div>
              <div className="bottom2">
                <div className="leftbottom">ADD TO FAVORITE</div>
                <div className="divline"></div>
                <div className="rightbottom">CONTINUE READING</div>
              </div>
            </div>
          </div>
        </section>
        <div className="services">
          <p className="ps">Our Services</p>
          <p className="pbest">Best Template Site</p>
        </div>
        <div className="cards3">
          <div className="card3">
            <div className="topcard">
              <TuneIcon
                sx={{ fontSize: "40px" }}
                style={{ fill: "blue" }}
                className="tuneIcon"
              />
            </div>
            <div className="center">
              <h2 className="high">High Quality Design</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quia consequuntur rerum harum labore, neque ratione cum animi
                dolor quibusdam.
              </p>
            </div>
          </div>
          <div className="card3">
            <div className="topcard">
              <TuneIcon
                sx={{ fontSize: "40px" }}
                style={{ fill: "blue" }}
                className="tuneIcon"
              />
            </div>
            <div className="center">
              <h2 className="high">High Quality Design</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quia consequuntur rerum harum labore, neque ratione cum animi
                dolor quibusdam.
              </p>
            </div>
          </div>
          <div className="card3">
            <div className="topcard">
              <TuneIcon
                sx={{ fontSize: "40px" }}
                style={{ fill: "blue" }}
                className="tuneIcon"
              />
            </div>
            <div className="center">
              <h2 className="high">High Quality Design</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quia consequuntur rerum harum labore, neque ratione cum animi
                dolor quibusdam.
              </p>
            </div>
          </div>
        </div>
       
      </div>{" "}
    </>
  );
};
export default Website;
