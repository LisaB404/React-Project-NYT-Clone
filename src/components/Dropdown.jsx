import "./Dropdown.css";

export default function Dropdown({ sections, onSelect }) {
  return (
    <div className="dropdownContainer">
      <p className="section">SECTIONS</p>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect(section); // Notifica il componente genitore della selezione
              }}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}