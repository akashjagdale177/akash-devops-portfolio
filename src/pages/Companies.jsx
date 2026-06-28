import {Link} from "react-router-dom";


function Companies(){


const companies=[


{
id:"aws",
name:"Amazon AWS",
role:"Cloud Infrastructure & DevOps",
info:"AWS uses cloud automation, CI/CD and scalable infrastructure."
},



{
id:"google",
name:"Google Cloud",
role:"Cloud Engineering",
info:"Google Cloud focuses on Kubernetes, automation and cloud solutions."
},



{
id:"azure",
name:"Microsoft Azure",
role:"Enterprise DevOps",
info:"Azure uses DevOps pipelines and infrastructure automation."
},



{
id:"netflix",
name:"Netflix",
role:"Site Reliability Engineering",
info:"Netflix uses Kubernetes, microservices and continuous delivery."
}



];




return(



<section className="container mx-auto px-10 py-20">





<h1 className="text-5xl font-bold text-center">

Companies Using DevOps

</h1>





<p className="text-center mt-5 text-gray-300 text-xl">

Explore DevOps career opportunities

</p>








<div className="grid md:grid-cols-4 gap-8 mt-12">





{


companies.map((company)=>(



<div

key={company.id}

className="bg-slate-900 p-8 rounded-xl card-hover text-center"


>




<div className="text-5xl">

🏢

</div>





<h2 className="text-2xl font-bold mt-5">

{company.name}

</h2>





<h3 className="text-blue-400 mt-3">

{company.role}

</h3>





<p className="mt-5 text-gray-300">

{company.info}

</p>








<Link to={`/company-jobs/${company.id}`}>


<button

className="mt-6 px-6 py-3 bg-blue-600 rounded"

>

View Jobs

</button>


</Link>






</div>



))


}



</div>






</section>



)


}



export default Companies;
