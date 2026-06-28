import { Link } from "react-router-dom";


function Courses(){


const courses=[


{
name:"DevOps Engineer Master Program",
duration:"6 Months",
fee:"₹25,000",
info:"Linux, AWS, Docker, Kubernetes, Jenkins and CI/CD complete training."
},



{
name:"AWS Cloud Associate Course",
duration:"3 Months",
fee:"₹15,000",
info:"Learn AWS EC2, S3, VPC, IAM and Cloud Infrastructure."
},



{
name:"Kubernetes Specialist Training",
duration:"4 Months",
fee:"₹18,000",
info:"Hands-on Kubernetes Pods, Deployment, Services and Cluster Management."
}



];




return(


<section className="container mx-auto px-10 py-20">



<h1 className="text-5xl font-bold text-center">

DevOps Courses

</h1>




<p className="text-center mt-5 text-gray-300 text-xl">

Learn Cloud & Automation Technologies

</p>






<div className="grid md:grid-cols-3 gap-8 mt-12">



{

courses.map((course)=>(



<div

key={course.name}

className="bg-slate-900 p-8 rounded-xl card-hover"


>



<div className="text-5xl">

🎓

</div>



<h2 className="text-2xl font-bold mt-5">

{course.name}

</h2>




<p className="mt-4 text-gray-300">

{course.info}

</p>




<p className="mt-5">

⏳ {course.duration}

</p>




<p className="mt-3 text-blue-400 text-xl">

💰 {course.fee}

</p>





<Link to={`/course-registration?course=${course.name}`}>



<button

className="mt-7 px-6 py-3 bg-blue-600 rounded"

>

Register Now

</button>



</Link>



</div>



))


}



</div>





</section>


)


}


export default Courses;
