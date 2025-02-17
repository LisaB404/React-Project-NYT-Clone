import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import SearchBar from "../Searchbar/Searchbar";
import { useState } from "react";
import "./BurgerMenu.css";


export default function BurgerMenu({ onSelect, onSearch }) {
const [open, setOpen] = useState(false);
  
const sections = [
    { name: "U.S.", key: "us", sections: ["U.S.", "Politics", "New York", "Education", "Health", "Obituaries", "Science", "Climate", "Business", "Tech", "The Upshot", "The Magazine"] },
    { name: "World", key: "world", sections: ["World", "Europe", "Asia", "Africa", "Middle East"] },
    { name: "Business", key: "business", sections: ["Business", "Economy", "Tech", "Media", "Finance", "DealBook", "Personal Tech", "Energy Transition", "Your Money"] },
    { name: "Arts", key: "arts", sections: ["Today's Arts", "Book Review", "Best Sellers", "Dance", "Movies", "Music", "Television", "Theater", "Pop Culture", "T Magazine", "Visual Arts"] },
    { name: "Lifestyle", key: "lifestyle", sections: ["All Lifestyle", "Well", "Travel", "Style", "Real Estate", "Food", "Love", "Your Money", "Personal Tech", "T Magazine"] },
    { name: "Opinion", key: "opinion", sections: ["Opinion", "Guest Essays", "Editorials", "Op-Docs", "Videos", "Letters", "Politics", "World", "Business", "Tech", "Climate", "Health", "Culture"] },
  ];


    return (
        <div className="burgerMenuContainer">
        <FontAwesomeIcon 
          icon={faBars} 
          className="menuIcon" 
          onClick={() => setOpen(!open)}
        />
  
        {/* Show menu if open is true */}
        {open && (
          <div className="burgerNavbar">
            <div className="burgerTop">
            <SearchBar
              onSearch={(query) => {
                onSearch(query);
                setOpen(false);
              }}
              alwaysOpen={true}
              setOpen={setOpen}
            />
              <button type="button" className="loginBtnBurger" onClick={() => window.location.href = "https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=vi&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2Fsubscription%2Fonboarding-offer%3FcampaignId%3D7JFJX%26EXIT_URI%3Dhttps%253A%252F%252Fwww.nytimes.com%252Finternational%252F&asset=masthead"}>LOG IN</button>
            </div>
            <ul className="burgerNavbarList">
              {sections.map((section) => (
                <li key={section.key} className="burgerNavbarSection">
                  <span className="burgerSectionName">{section.name}</span>
                  <ul className="burgerSubsectionList">
                    {section.sections.map((sub, index) => (
                      <a key={index} className="burgerSubsectionItem"
                        onClick={() => {
                          onSearch("");
                          onSelect(sub);
                          setOpen(!open);
                        }}>{sub}</a>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }