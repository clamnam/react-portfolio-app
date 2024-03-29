import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import ProjectsIndex from './pages/projects/Index';
import ProjectsShow from './pages/projects/Show';
import Demo from './pages/projects/Demo';


// import components
import Navbar from './components/Navbar';

import Footer from './components/Footer';

const App = () => {
  return (

    <div className='container-fluid mx-auto bg-stone-900'>
    <Router>
      <div className=''>
      <Navbar/>

      <div className='min-h-screen'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<ProjectsIndex/>} />

          <Route path="/projects/:slug/demo" element={<Demo/>} />

          <Route path="/projects/:slug" element={<ProjectsShow/>} />

          <Route path='*' element={<PageNotFound/>} />
      </Routes>
      </div>
      <Footer/>
      </div>
    </Router>
    
    </div>

  );
}

export default App;
