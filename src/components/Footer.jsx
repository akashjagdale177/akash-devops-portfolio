import {Link} from "react-router-dom";


function Footer(){


return(


<footer className="bg-black mt-20 px-10 py-10">



<div className="container mx-auto grid md:grid-cols-3 gap-10">






<div>


<h1 className="text-3xl font-bold text-blue-400">

Akash DevOps Hub

</h1>


<p className="mt-4 text-gray-300">

DevOps Engineer | Cloud & Automation Enthusiast

</p>



</div>









<div>


<h2 className="text-xl font-bold">

Quick Links

</h2>



<div className="mt-4 space-y-2">



<p>

<Link to="/">Home</Link>

</p>


<p>

<Link to="/projects">Projects</Link>

</p>


<p>

<Link to="/jobs">Jobs</Link>

</p>


<p>

<Link to="/courses">Courses</Link>

</p>



</div>



</div>










<div>


<h2 className="text-xl font-bold">

Connect

</h2>





<div className="mt-4 space-y-3">



<a

href="https://github.com/akashjagdale177"

target="_blank"

rel="noreferrer"

className="block text-blue-400"

>

GitHub

</a>







<a

href="https://www.linkedin.com/in/akash-jagdale"

target="_blank"

rel="noreferrer"

className="block text-blue-400"

>

LinkedIn

</a>






<p>

📧 akashjagdale177@gmail.com

</p>





</div>




</div>







</div>






<div className="text-center mt-10 border-t border-gray-700 pt-5 text-gray-400">


© 2026 Akash Jagdale | Built with React & DevOps 🚀


</div>






</footer>


)


}


export default Footer;
