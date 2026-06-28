import {useState} from "react";
import {Link} from "react-router-dom";


function Navbar(){


const [open,setOpen]=useState(false);



return(


<nav className="bg-black px-6 py-5">



<div className="flex justify-between items-center">



<h1 className="text-2xl md:text-3xl font-bold text-blue-400">

Akash DevOps Hub

</h1>





<button

onClick={()=>setOpen(!open)}

className="md:hidden text-3xl"

>

☰

</button>





</div>








<div

className={`

${open ? "block":"hidden"}

md:flex

md:space-x-8

mt-5

md:mt-0

`}

>



<Link to="/" className="block py-2">

Home

</Link>


<Link to="/about" className="block py-2">

About

</Link>


<Link to="/skills" className="block py-2">

Skills

</Link>


<Link to="/projects" className="block py-2">

Projects

</Link>


<Link to="/jobs" className="block py-2">

Jobs

</Link>


<Link to="/courses" className="block py-2">

Courses

</Link>


<Link to="/companies" className="block py-2">

Companies

</Link>


<Link to="/contact" className="block py-2">

Contact

</Link>



</div>




</nav>


)


}



export default Navbar;
