The goal was to convert a static HTML website template into a React application by breaking the template into modular and reusable components.

✅ Work Done
Set Up the React Project

Used Vite to scaffold a fast React environment.

Installed required dependencies like react, react-dom, and gh-pages for deployment.

Analyzed the HTML Template

Reviewed the HTML file to identify repeated or logically grouped elements such as the header, footer, and content sections.

Created React Components
Extracted sections of the HTML into the following React components:

Component Name	Description
Header.jsx	Contains the logo and navigation menu.
Footer.jsx	Contains copyright and social links.
Home.jsx	Hero section or main content visible on page load.
About.jsx	About us information section.
Contact.jsx	Contact form or details section.
Navbar.jsx (optional)	If the nav bar was separate from the header.

Converted HTML to JSX

Changed all class attributes to className.

Made sure all self-closing tags were properly closed (<img />, <input />, etc.).

Replaced hardcoded paths if needed.

Structured the App

Created a components/ folder to store all component files.

Assembled all components in App.jsx for rendering.

jsx
Copy
Edit
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
🧠 Learnings
Learned to structure a React app with reusable components.

Understood JSX conversion and React syntax rules.

Improved understanding of component hierarchy and modular development.
