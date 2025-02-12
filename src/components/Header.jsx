import logo from "../assets/img/logo.png";
import "./Header.css"
import SearchBar from "./Searchbar";

export default function Header({ onSearch, isMobile }) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('en-US', options);
  
  return (
    <>
    <div className={`top ${isMobile ? "hidden" : ""}`}>
        <SearchBar onSearch={onSearch} />
        <button type="button" className="loginBtn" onClick={() => window.location.href = "https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=vi&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2Fsubscription%2Fonboarding-offer%3FcampaignId%3D7JFJX%26EXIT_URI%3Dhttps%253A%252F%252Fwww.nytimes.com%252Finternational%252F&asset=masthead"}>LOG IN</button>
    </div>
    <div className="titleContainer">
        <p className="date">{date}</p>
        <a href="https://lisab404.github.io/React-Project-NYT-Clone/"><img src={logo} className="titleLogo" /></a>
    </div>
    </>
  )
}
