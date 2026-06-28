import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Jobs from "./pages/Jobs";
import Registration from "./pages/Registration";
import Courses from "./pages/Courses";
import CourseRegistration from "./pages/CourseRegistration";
import ProjectDetails from "./pages/ProjectDetails";
import Companies from "./pages/Companies";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CompanyJobs from "./pages/CompanyJobs";

function App(){

return(

<BrowserRouter>


<Navbar/>


<Routes>


<Route path="/" element={<Home/>}/>


<Route path="/about" element={<About/>}/>


<Route path="/skills" element={<Skills/>}/>


<Route path="/projects" element={<Projects/>}/>


<Route path="/jobs" element={<Jobs/>}/>


<Route path="/registration" element={<Registration/>}/>


<Route path="/courses" element={<Courses/>}/>


<Route path="/course-registration" element={<CourseRegistration/>}/>


<Route path="/project/:id" element={<ProjectDetails/>}/>


<Route path="/companies" element={<Companies/>}/>


<Route path="/contact" element={<Contact/>}/>


<Route path="/company-jobs/:id" element={<CompanyJobs/>}/>
</Routes>

<Footer/>

</BrowserRouter>

)

}


export default App;
