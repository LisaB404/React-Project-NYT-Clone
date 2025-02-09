import "./Dropdown.css";

export default function Dropdown({sections}) {

  return (
    <div className="dropdownContainer">
      <p className="section">SECTIONS</p>
      <ul>
        {sections.map((section, index) => (
          <li key={index}><a href="/">{section}</a></li>
        ))}
      </ul>
    </div>
  );
}