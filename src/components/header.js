import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container-fluid wrap center-xs">
      <h1 className="headline">Pixelarticons</h1>
      <h4 className="subheadline">
        A set of 359 retro icons in 24x24 designed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/halfmage"
        >
          @halfmage
        </a>
      </h4>
      <div className="row center-xs">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/halfmage/pixelarticons/releases/tag/v1.2.0"
          className="button primary"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.9998 17.0001L12.9998 3.00006H10.9998L10.9998 13H9.00006V11H7.00006V13H8.99994V15H10.9998V17.0001H12.9998ZM20.9998 19V15H18.9998V19L4.99982 19L4.99982 15H2.99982V19V21V21L4.99982 21V21L18.9998 21V21L20.9998 21V21V19ZM13 13V15H15V13H17V11H15V13H13Z"
              fill="currentColor"
            />
          </svg>
          Download
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/halfmage/pixelarticons"
          className="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 0H21H23V2V18V20H21H7H5V18V2V0H7ZM21 18V2H7V18H21ZM9 4H19V6H9V4ZM19 8H9V10H19V8ZM9 12H16V14H9V12ZM19 22H3V4H1V22V24H3H19V22Z"
              fill="currentColor"
            />
          </svg>
          Repository
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/halfmage/pixelarticons/issues/new"
          className="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1H14V9H22V11V13H20V11H14H12V9V5H10V3H12V1ZM8 7V5H10V7H8ZM6 9V7H8V9H6ZM4 11V9H6V11H4ZM14 19V21H12V23H10V15H2V13V11H4V13H10H12V15V19H14ZM16 17V19H14V17H16ZM18 15V17H16V15H18ZM18 15H20V13H18V15Z"
              fill="currentColor"
            />
          </svg>
          Request icon
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `pixelarticons`,
}

export default Header
