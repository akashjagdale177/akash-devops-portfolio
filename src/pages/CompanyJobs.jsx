import {Link, useParams} from "react-router-dom";


function CompanyJobs(){


const {id}=useParams();





const jobs={



aws:{


company:"Amazon AWS",


roles:[


{

title:"DevOps Engineer",

salary:"₹6L - ₹12L / year",

location:"Bangalore, India",

experience:"Fresher - 2 Years",

skills:"AWS, Docker, Kubernetes, Linux"

},



{

title:"Cloud Engineer",

salary:"₹8L - ₹15L / year",

location:"Hyderabad, India",

experience:"1-3 Years",

skills:"AWS, Terraform, Networking"

}


]

},





google:{


company:"Google Cloud",


roles:[


{

title:"Cloud Engineer",

salary:"₹10L - ₹20L / year",

location:"Bangalore, India",

experience:"0-3 Years",

skills:"GCP, Kubernetes, Docker"

},



{

title:"SRE Engineer",

salary:"₹12L - ₹25L / year",

location:"Mumbai, India",

experience:"2+ Years",

skills:"Linux, Monitoring, CI/CD"

}


]

},






azure:{


company:"Microsoft Azure",


roles:[


{

title:"Azure DevOps Engineer",

salary:"₹8L - ₹18L / year",

location:"Pune, India",

experience:"1-3 Years",

skills:"Azure, Jenkins, Git"

},



{

title:"Cloud Administrator",

salary:"₹6L - ₹14L / year",

location:"Noida, India",

experience:"Fresher",

skills:"Azure, Linux, Networking"

}


]

},





netflix:{


company:"Netflix",


roles:[


{

title:"Site Reliability Engineer",

salary:"₹15L - ₹30L / year",

location:"Remote",

experience:"2+ Years",

skills:"Kubernetes, Docker, Monitoring"

},



{

title:"DevOps Engineer",

salary:"₹12L - ₹25L / year",

location:"Remote",

experience:"1-3 Years",

skills:"AWS, CI/CD, Automation"

}


]

}




};





const company=jobs[id];






return(



<section className="container mx-auto px-10 py-20">





<h1 className="text-5xl font-bold text-center">

{company.company} Jobs

</h1>






<p className="text-center mt-5 text-gray-300 text-xl">

Latest DevOps & Cloud Opportunities 🚀

</p>








<div className="grid md:grid-cols-2 gap-8 mt-12">





{


company.roles.map((job)=>(



<div

key={job.title}

className="bg-slate-900 p-8 rounded-xl card-hover"


>





<h2 className="text-3xl font-bold">

{job.title}

</h2>






<p className="mt-4 text-blue-400">

💰 {job.salary}

</p>






<p className="mt-3">

📍 {job.location}

</p>






<p className="mt-3">

👨‍💻 Experience: {job.experience}

</p>






<p className="mt-3 text-gray-300">

Skills: {job.skills}

</p>







<Link

to={`/registration?company=${company.company}&job=${job.title}`}

>



<button

className="mt-7 px-6 py-3 bg-blue-600 rounded"

>


Apply Now


</button>


</Link>





</div>



))


}





</div>






</section>



)


}



export default CompanyJobs;
