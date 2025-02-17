import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";

export default function Navbar({ onSectionSelect }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const sections = [
    {
      name: "U.S.",
      key: "us",
      sections: [
        "U.S.",
        "Politics",
        "New York",
        "Education",
        "Health",
        "Obituaries",
        "Science",
        "Climate",
        "Business",
        "Tech",
        "The Upshot",
        "The Magazine",
      ],
    },
    {
      name: "World",
      key: "world",
      sections: ["World", "Europe", "Asia", "Africa", "Middle East"],
    },
    {
      name: "Business",
      key: "business",
      sections: [
        "Business",
        "Economy",
        "Tech",
        "Media",
        "Finance",
        "DealBook",
        "Personal Tech",
        "Energy Transition",
        "Your Money",
      ],
    },
    {
      name: "Arts",
      key: "arts",
      sections: [
        "Today's Arts",
        "Book Review",
        "Best Sellers",
        "Dance",
        "Movies",
        "Music",
        "Television",
        "Theater",
        "Pop Culture",
        "T Magazine",
        "Visual Arts",
      ],
    },
    {
      name: "Lifestyle",
      key: "lifestyle",
      sections: [
        "All Lifestyle",
        "Well",
        "Travel",
        "Style",
        "Real Estate",
        "Food",
        "Love",
        "Your Money",
        "Personal Tech",
        "T Magazine",
      ],
    },
    {
      name: "Opinion",
      key: "opinion",
      sections: [
        "Opinion",
        "Guest Essays",
        "Editorials",
        "Op-Docs",
        "Videos",
        "Letters",
        "Politics",
        "World",
        "Business",
        "Tech",
        "Climate",
        "Health",
        "Culture",
      ],
    },
  ];

  return (
    <div className="navbar">
      <ul className="navbarList">
        {sections.map((section) => (
          <li
            key={section.key}
            className="navbarLink"
            onMouseEnter={() => setActiveDropdown(section.key)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a href="/">
              {section.name}{" "}
              <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </a>
            {activeDropdown === section.key && (
              <Dropdown
                sections={section.sections}
                onSelect={onSectionSelect}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
