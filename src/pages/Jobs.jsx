import { Link } from "react-router-dom";


function Jobs(){


const jobs=[


{
role:"DevOps Engineer",
company:"Amazon AWS",
salary:"₹6L - ₹12L / year",
skills:"AWS, Docker, Kubernetes, Linux"
},


{
role:"Cloud Engineer",
company:"Google Cloud",
salary:"₹7L - ₹15L / year",
skills:"AWS, Terraform, Networking"
},


{
role:"Site Reliability Engineer",
company:"Netflix",
salary:"₹10L - ₹20L / year",
skills:"Kubernetes, Monitoring, CI/CD"
}



];





return(


<section className="container mx-auto px-10 py-20">



<h1 className="text-5xl font-bold text-center">

DevOps Jobs

</h1>




<p className="text-center mt-5 text-gray-300 text-xl">

Cloud & DevOps Career Opportunities

</p>





<div className="grid md:grid-cols-3 gap-8 mt-12">



{


jobs.map((job)=>(


<div

key={job.role}

className="bg-slate-900 p-8 rounded-xl card-hover"



>



<div className="text-5xl">

💼

</div>




<h2 className="text-2xl font-bold mt-5">

{job.role}

</h2>





<h3 className="text-blue-400 text-xl mt-3">

{job.company}

</h3>





<p className="mt-5">

💰 Salary: {job.salary}

</p>





<p className="mt-3 text-gray-300">

🛠 Skills: {job.skills}

</p>






<Link to={`/registration?job=${job.role}`}>


<button

className="mt-8 px-6 py-3 bg-blue-600 rounded"

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



export default Jobs;
