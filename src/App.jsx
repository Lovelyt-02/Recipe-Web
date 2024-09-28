import './App.css'
import Home from './components/Home.jsx';
import NavBar from './components/navBar'
import { ThemeProvider } from './components/ThemeContext';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetailspage from './components/RecipeDetailspage.jsx';

function App() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }
  return (
    <>
      <ThemeProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
          <Router>
            <NavBar></NavBar>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/recipe/:id' element={<RecipeDetailspage />} />
            </Routes>
          </Router>
        </ClerkProvider>
      </ThemeProvider>

    </>
  );
}

export default App
