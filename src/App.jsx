import { useState } from 'react'
import Form from "./components/common/form";
import TaskbarButtons from './components/common/taskbarButtons'
import Contact from './components/common/contact';
import Home from './components/home/home';
import About from './components/about/about';
import Project from './components/projects/project';
import Experience from './components/experience/experience';

const App = () => {
  const [currentPage,setCurrentPage] = useState('home');
  const [formOpen, setFormOpen] = useState(false);
  
  const pages = {
    home: (<Home setCurrentPage={setCurrentPage} />),
    about: (<About/>),
    project: (<Project/>),
    experience: (<Experience/>)
  }
  const toggleFormOpen = () => {
    setFormOpen(!formOpen);
  }

  return (
    <>
    <header>
      <h1 className="portfolio">Portfolio</h1>
      <div className="navigations">
        <TaskbarButtons name="Home" active={currentPage==='home'} onClick={()=> setCurrentPage('home')}/>
        <TaskbarButtons name="About" active={currentPage==='about'} onClick={()=> setCurrentPage('about')}/>
        <TaskbarButtons name="Project" active={currentPage==='project'} onClick={()=> setCurrentPage('project')}/>
        <TaskbarButtons name="Experience" active={currentPage==='experience'} onClick={()=> setCurrentPage('experience')}/>
      </div>
    </header>
    <main className="main-view">
      {pages[currentPage]}
    </main>
    <Contact onClick={toggleFormOpen}/>
    {formOpen && (
      <>
        <div className="overlay"></div>
        <Form />
      </>
    )}
    </>
  )
}

export default App