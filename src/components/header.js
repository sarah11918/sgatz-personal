import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header style={{marginBottom: `0.5rem`}}>
      <div class="nav-container">
        <nav>
          <input type="checkbox" id="nav-toggle" />
          <label for="nav-toggle" class="burger-menu">
              MENU
          </label>
          <div class="left-menu">
            <a href="/about/">About</a>
            <a href="/join/">Join The Choir</a>
            <a href="/calendar/">Calendar</a>
            <a href="/performances/">Performances</a>
            <a href="/blog/">News</a>
          </div>
          <Link to="/"><StaticImage src="../images/scclogo.png" alt="SCC Logo" width="150" /></Link>
        </nav>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"


// function changeBackground(event) {
//   event.target.style.color = 'black';
// } 

// function revertBackground(event) {
//   event.target.style.color = '#8b2004';
// }

// const NavLink = (props) => (
//   <Link 
//     onMouseOver={changeBackground} 
//     onMouseLeave={revertBackground}
//     style ={{
//       color: '#8b2004',
//       textDecoration: 'none',     
//     }}
//     activeStyle={{
//       fontWeight: 'bolder',
//       fontStyle: 'italic',
      
//     }}

//     to={props.to}
//     >
//     {props.children}
//   </Link>
// )

// const NavLink = (props) => (
//   <Link 
//     style ={{
//       color: 'lavender',
//       textDecoration: 'none'
//     }}
//     activeStyle={{
//       fontWeight: 'bold',
//       color: 'yellow'
//     }}

//     to={props.to}
//     >
//     {props.children}
//   </Link>
// )


// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `lavender`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//       <nav 
//         style={{ 
//           listStyle: `none`, 
//           float: `right`,
           
//         }}
//       >
//         <NavLink activeClassName="active" to="/">Home</NavLink>{'  '}
//         <NavLink activeClassName="active" to="/blog/">Blog</NavLink>{'  '}
//         <NavLink activeClassName="active" to="/about/">About</NavLink>{'  '}
//         <NavLink activeClassName="active" to="/contact/">Contact</NavLink>
//       </nav>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header


      //      {/* 
      //      <Link to="/"><StaticImage src="../images/scclogo.png" alt="SCC Logo" width="150" /></Link>

      //      <ul 
      //   style={{ 
      //     listStyle: `none`, 
      //     float: `right`,  
      //   }}

      // >
      //   <NavLink onMouseOver={changeBackground} onMouseLeave={revertBackground} activeClassName="active" to="/">Home</NavLink>{'    '}
      //   <NavLink activeClassName="active" to="/about">About</NavLink>{'    '}
      //   <NavLink activeClassName="active" to="/performances/">Performances</NavLink>{'    '}
      //   <NavLink activeClassName="active" to="/calendar/">Calendar</NavLink>{'    '}
      //   <NavLink activeClassName="active" to="/join/">Join</NavLink>
      // </ul> */}
