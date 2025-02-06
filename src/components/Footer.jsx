import "./Footer.css"

export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          {`Clone of `}
          <a
            className="link"
            href="https://www.nytimes.com"
            target="_blank"
          >
            The New York Times
          </a>
          .
        </p>

        <p className="copyright">
          {` Created by `}
          <a
            className="link"
            href="https://github.com/LisaB404"
            target="_blank"
          >
            Lisa Bortoli
          </a>
          {` for educational purposes.`}
        </p>
        </div>
      <p
        className="copyright"
      >{`© All rights reserved to The New York Times.`}</p>
    </footer>
  );
}
