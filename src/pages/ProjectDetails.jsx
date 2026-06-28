import {useParams} from "react-router-dom";


function ProjectDetails(){


const {id}=useParams();



const projects={


kubernetes:{


title:"Kubernetes Multi Node Deployment",

description:
"Deployed a production style Kubernetes environment with multiple nodes and managed container workloads.",


tools:
"Kubernetes, Docker, Linux, YAML",


steps:[

"Created Kubernetes cluster",

"Configured worker nodes",

"Deployed application using Deployment",

"Exposed application using Service",

"Managed configuration using ConfigMap"

]


},




aws:{


title:"AWS Cloud Infrastructure Project",

description:
"Designed cloud infrastructure using AWS services with secure networking.",


tools:
"AWS EC2, VPC, EBS, Security Groups",


steps:[

"Created EC2 instances",

"Configured Security Groups",

"Attached EBS volumes",

"Configured networking",

"Deployed application"

]


},





cicd:{


title:"CI/CD Pipeline Automation",

description:
"Automated application build and deployment process.",


tools:
"Git, Jenkins, Docker, CI/CD",


steps:[

"Created Git repository",

"Configured Jenkins pipeline",

"Built Docker image",

"Automated deployment",

"Verified application"

]


}


};




const project=projects[id];



return(


<section className="px-10 py-20">


<h1 className="text-5xl font-bold">

{project.title}

</h1>



<p className="mt-5 text-gray-300 text-xl">

{project.description}

</p>




<h2 className="text-3xl font-bold mt-10">

Tools Used

</h2>


<p className="mt-3 text-blue-400">

{project.tools}

</p>




<h2 className="text-3xl font-bold mt-10">

Project Implementation

</h2>



<ul className="mt-5 space-y-3">


{

project.steps.map((step)=>(


<li>

✅ {step}

</li>


))


}


</ul>



</section>


)


}


export default ProjectDetails;
