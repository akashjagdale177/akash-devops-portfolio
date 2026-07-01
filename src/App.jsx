import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Jobs from "./pages/Jobs";
import Courses from "./pages/Courses";
import Companies from "./pages/Companies";
import Contact from "./pages/Contact";


import Registration from "./pages/Registration";
import CourseRegistration from "./pages/CourseRegistration";


import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";


import CompanyJobs from "./pages/CompanyJobs";
import ProjectDetails from "./pages/ProjectDetails";



function App(){


return(

<BrowserRouter>


<Navbar/>


<Routes>


<Route path="/" element={<Home/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/skills" element={<Skills/>}/>


<Route path="/projects" element={<Projects/>}/>

<Route path="/project/:id" element={<ProjectDetails/>}/>


<Route path="/jobs" element={<Jobs/>}/>


<Route path="/companies" element={<Companies/>}/>

<Route path="/company-jobs/:company" element={<CompanyJobs/>}/>



<Route path="/courses" element={<Courses/>}/>


<Route path="/contact" element={<Contact/>}/>



<Route path="/registration" element={<Registration/>}/>


<Route path="/course-registration" element={<CourseRegistration/>}/>



<Route path="/admin" element={<Admin/>}/>


<Route path="/admin-login" element={<AdminLogin/>}/>



</Routes>


<Footer/>


</BrowserRouter>

)

}


export default App;
