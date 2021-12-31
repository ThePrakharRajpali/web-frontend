import React, { useState, useEffect, useRef } from "react";

import logo from "../public/photos/logo_english.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "../public/css/navbar.css";

import {
  Navbar as NavbarBS,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

// const useOutsideAlerter = (ref, dropdown, setDropdown) => {
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         // alert("Clicked outside");
//         if (dropdown == "") {
//           setDropdown("");
//         }
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// };
// const Navbar = () => {
//   const [colorChange, setColorChange] = useState(false);
//   const [activeTab, setActiveTab] = useState("Home");
//   const [dropdown, setDropdown] = useState("none");

//   const wrapperRef = useRef(null);

//   const changeNavbarColor = () => {
//     if (window.scrollY >= 80) {
//       setColorChange(true);
//     } else {
//       setColorChange(false);
//     }
//   };

//   const changeActiveTab = (data) => {
//     setActiveTab(data);
//   };

//   const activateDropwdown = () => {
//     setDropdown("");
//   };
//   const deactivateDropdown = () => {
//     setDropdown("none");
//   };

//   useEffect(() => {
//     changeNavbarColor();
//     window.addEventListener("scroll", changeNavbarColor);
//     window.addEventListener("mousedown", () => {
//       if (dropdown === "") {
//         setDropdown("none");
//         console.log("Hello");
//       }
//     });
//   }, []);

//   useOutsideAlerter(wrapperRef, dropdown, setDropdown);

//   return (
//     <React.Fragment>
//       <nav ref={wrapperRef} className={colorChange ? "solid-nav" : ""}>
//         <div className="nav-logo">
//           <img src={logo} alt="" />
//         </div>
//         <div className="nav-items">
//           <ul>
//             <li className={activeTab === "Home" ? "active" : ""}>
//               <Link to="/#" onClick={() => changeActiveTab("Home")}>
//                 Home
//               </Link>
//             </li>
//             <li className={activeTab === "About" ? "active" : ""}>
//               <Link to="/about#" onClick={() => changeActiveTab("About")}>
//                 About Us
//               </Link>
//             </li>
//             <li className={activeTab === "Service" ? "active" : ""}>
//               <a
//                 // href="/#service-section"
//                 onClick={() => {
//                   changeActiveTab("Service");
//                   if (dropdown === "none") activateDropwdown();
//                   else deactivateDropdown();
//                 }}
//               >
//                 Services
//               </a>
//             </li>
//             <li className={activeTab === "Partner" ? "active" : ""}>
//               <Link
//                 to="/partner/#partner"
//                 onClick={() => changeActiveTab("Partner")}
//               >
//                 Partner
//               </Link>
//             </li>
//             <li className={activeTab === "Contact" ? "active" : ""}>
//               <Link
//                 to="/#contact-section"
//                 onClick={() => changeActiveTab("Contact")}
//               >
//                 Contact Us
//               </Link>
//             </li>

//             <li></li>
//           </ul>

//           <div />
//         </div>
//       </nav>
//       <div className="extra-class" style={{ display: dropdown }}>
//         <div
//           className={
//             colorChange ? "Service-Dropdown solid-nav" : "Service-Dropdown"
//           }
//         >
//           <Link to="/FullTruck#">Full truck Load</Link>
//           <hr />
//           <Link to="/LastMile#">Last Mile Delivery</Link>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) setColorChange(true);
    else setColorChange(false);
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <NavbarBS bg="light" expand="lg" fixed="top">
      <Container fluid="md">
        <NavbarBS.Brand href="/#home">
          <img src={logo} alt="" />
        </NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="NavItem" id="NavItem-Home">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="NavItem" id="NavItem-About">
              About Us
            </Nav.Link>
            <NavDropdown
              title={<span id="NavItem-Services">Services</span>}
              className="NavItem"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="NavItem" href="/FullTruck">
                Full Truck Load
              </NavDropdown.Item>
              <NavDropdown.Item className="NavItem" href="/LastMile">
                Last Mile Delivery
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="NavItem" href="/partner" id="NavItem-Partner">
              Partner
            </Nav.Link>
            <Nav.Link
              className="NavItem"
              href="/#contact-section"
              id="NavItem-Contact"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
