import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null); // Stato per tracciare il dropdown attivo

  const usSections = ["U.S.", "Politics", "New York", "Education", "Health", "Obituaries", "Science", "Climate", "Business", "Tech", "The Upshot", "The Magazine"];
  const worldSections = ["World", "Europe", "Asia", "Africa", "Middle East"];
  const businessSections = ["Business", "Economy", "Tech", "Media", "Finance", "DealBook", "Personal Tech", "Energy Transition", "Your Money"];
  const artsSections = ["Today's Arts", "Book Review", "Best Sellers", "Dance", "Movies", "Music", "Television", "Theater", "Pop Culture", "T Magazine", "Visual Arts"];
  const lifestyleSections = ["All Lifestyle", "Well", "Travel", "Style", "Real Estate", "Food", "Love", "Your Money", "Personal Tech", "T Magazine"];
  const opinionSections = ["Opinion", "Guest Essays", "Editorials", "Op-Docs", "Videos", "Letters", "Politics", "World", "Business", "Tech", "Climate", "Health", "Culture"];

  return (
    <div className="navbar">
      <ul className="navbarList">
        <li 
          className="navbarLink" 
          onMouseEnter={() => setActiveDropdown("us")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <a href="#">
            U.S. <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </a>
          {activeDropdown === "us" && <Dropdown sections={usSections} />}
        </li>

        <li 
          className="navbarLink" 
          onMouseEnter={() => setActiveDropdown("world")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <a href="#">
            World <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </a>
          {activeDropdown === "world" && <Dropdown sections={worldSections} />}
        </li>

        <li 
          className="navbarLink" 
          onMouseEnter={() => setActiveDropdown("business")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <a href="#">
            Business <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </a>
          {activeDropdown === "business" && <Dropdown sections={businessSections} />}
        </li>

        <li 
          className="navbarLink" 
          onMouseEnter={() => setActiveDropdown("arts")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <a href="#">
            Arts <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </a>
          {activeDropdown === "arts" && <Dropdown sections={artsSections} />}
        </li>

        <li 
          className="navbarLink" 
          onMouseEnter={() => setActiveDropdown("lifestyle")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <a href="#">
            Lifestyle <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </a>
          {activeDropdown === "lifestyle" && <Dropdown sections={lifestyleSections} />}
        </li>

        <li 
          className="navbarLink" 
          onMouseEnter={() => setActiveDropdown("opinion")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <a href="#">
            Opinion <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </a>
          {activeDropdown === "opinion" && <Dropdown sections={opinionSections} />}
        </li>
      </ul>
    </div>
  );
}
