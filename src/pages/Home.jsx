import {Link} from "react-router-dom";
import akash from "../assets/akash.jpg";


function Home(){


return(


<section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">





<div className="container mx-auto px-5 md:px-10 py-10 md:py-20">





<div className="grid md:grid-cols-2 gap-10 items-center">





<div>



<p className="text-blue-400 text-xl">

Welcome To My DevOps World 🚀

</p>





<h1 className="text-4xl md:text-6xl font-bold mt-5">


Hi, I'm Akash Jagdale


</h1>






<h2 className="text-2xl md:text-3xl mt-5 text-blue-400">


DevOps Engineer | Cloud & Automation Enthusiast


</h2>







<p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">


I build cloud infrastructure, automate deployments and explore modern DevOps technologies like AWS, Docker, Kubernetes and CI/CD.


</p>






<div className="mt-8 flex flex-wrap gap-5">



<Link to="/projects">


<button className="px-6 py-3 bg-blue-600 rounded-xl">


Explore Projects


</button>


</Link>






<Link to="/contact">


<button className="px-6 py-3 border rounded-xl">


Contact Me


</button>


</Link>






<a href="/resume/Akash_Jagdale_DevOps_Resume.pdf" download>


<button className="px-6 py-3 bg-green-600 rounded-xl">


Download Resume


</button>


</a>





</div>




</div>









<div className="text-center">



<img


src={akash}


className="w-[220px] h-[220px] md:w-[350px] md:h-[350px] rounded-full mx-auto object-cover shadow-2xl"



/>





<div className="flex justify-center gap-4 mt-8 flex-wrap">



<span className="bg-slate-800 px-5 py-3 rounded-xl">

☁️ AWS

</span>



<span className="bg-slate-800 px-5 py-3 rounded-xl">

🐳 Docker

</span>



<span className="bg-slate-800 px-5 py-3 rounded-xl">

☸️ Kubernetes

</span>



</div>




</div>







</div>





</div>









<div className="container mx-auto px-5 md:px-10 py-10 md:py-16">





<h1 className="text-4xl md:text-5xl font-bold text-center">

DevOps Technology Stack

</h1>






<div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">





<div className="bg-slate-900 p-8 rounded-xl card-hover text-center">

Linux 🐧

</div>




<div className="bg-slate-900 p-8 rounded-xl card-hover text-center">

AWS ☁️

</div>





<div className="bg-slate-900 p-8 rounded-xl card-hover text-center">

Docker 🐳

</div>





<div className="bg-slate-900 p-8 rounded-xl card-hover text-center">

Kubernetes ☸️

</div>





<div className="bg-slate-900 p-8 rounded-xl card-hover text-center">

Jenkins ⚙️

</div>





</div>



</div>








<div className="container mx-auto px-5 md:px-10 py-10 md:py-16">



<div className="bg-slate-900 p-6 md:p-10 rounded-xl">



<h1 className="text-3xl md:text-4xl font-bold">

Why DevOps?

</h1>





<p className="mt-5 text-gray-300 text-lg md:text-xl">


DevOps helps teams deliver applications faster using automation, cloud infrastructure and continuous deployment practices.


</p>





<div className="grid md:grid-cols-3 gap-6 mt-8">



<div className="p-5 bg-black rounded-xl">

🚀 Faster Deployment

</div>



<div className="p-5 bg-black rounded-xl">

🔄 CI/CD Automation

</div>



<div className="p-5 bg-black rounded-xl">

☁️ Cloud Scalability

</div>



</div>




</div>



</div>







</section>


)


}


export default Home;
