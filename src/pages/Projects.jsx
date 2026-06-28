import { Link } from "react-router-dom";


function Projects(){


const projects=[


{
id:"aws",

title:"AWS Cloud Infrastructure Automation",

desc:"Created cloud infrastructure using AWS services with secure and scalable architecture.",

tools:"AWS EC2, VPC, EBS, Security Groups",

details:"Designed and configured AWS infrastructure for hosting applications with proper networking and storage management."

},



{
id:"kubernetes",

title:"Kubernetes Application Deployment",

desc:"Deployed containerized applications using Kubernetes cluster.",

tools:"Docker, Kubernetes, Pods, Deployment, Service",

details:"Created Kubernetes resources like Pods, Deployments, Services and ConfigMaps to manage applications."

},




{
id:"cicd",

title:"CI/CD Pipeline Automation",

desc:"Automated application build and deployment process.",

tools:"Git, Jenkins, Docker",

details:"Implemented automated pipeline for code build, testing and deployment using DevOps practices."

}


];





return(


<section className="container mx-auto px-10 py-20">



<h1 className="text-5xl font-bold text-center">

DevOps Projects

</h1>




<p className="text-center mt-5 text-gray-300 text-xl">

Real-time Cloud and Automation Projects

</p>






<div className="grid md:grid-cols-3 gap-8 mt-12">



{

projects.map((project)=>(


<div


key={project.id}


className="bg-slate-900 p-8 rounded-xl card-hover"



>



<h2 className="text-2xl font-bold">

{project.title}

</h2>





<p className="mt-5 text-gray-300">

{project.desc}

</p>





<p className="mt-5 text-blue-400">

🛠 {project.tools}

</p>






<Link to={`/project/${project.id}`}>


<button


className="mt-6 px-6 py-3 bg-blue-600 rounded"


>

View Project

</button>



</Link>




</div>



))


}



</div>




</section>


)


}


export default Projects;
