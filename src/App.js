import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import customTheme from './utils/customTheme';
import Navbar from './components/Layout/Navbar';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import ContactForm from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <ThemeProvider theme={customTheme()}>
        <Router >
          <Navbar />
          <Introduction />
          <Skills />
          <ContactForm />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
