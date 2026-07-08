import {useState} from "react";
import {useSearchParams} from "react-router-dom";


function Registration(){


const [params]=useSearchParams();


const selectedJob=params.get("job") || "";

const selectedCompany=params.get("company") || "";



const [submitted,setSubmitted]=useState(false);

const [resume,setResume]=useState(null);

const [form,setForm]=useState({


name:"",

email:"",

phone:"",

company:selectedCompany,

job:selectedJob,

experience:"",

skills:""


});





function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value

});


}





async function handleSubmit(e){

e.preventDefault();

try{

const formData=new FormData();

formData.append("name",form.name);
formData.append("email",form.email);
formData.append("phone",form.phone);
formData.append("company",form.company);
formData.append("job",form.job);
formData.append("experience",form.experience);
formData.append("skills",form.skills);

if(resume){

formData.append("resume",resume);

}

const response=await fetch(

"https://akash-devops-portfolio.onrender.com/apply",
{

method:"POST",

body:formData

}

);

const data=await response.json();

console.log(data);

setSubmitted(true);

setForm({

name:"",
email:"",
phone:"",
company:selectedCompany,
job:selectedJob,
experience:"",
skills:""

});

setResume(null);

document.getElementById("resume").value="";

}catch(error){

console.log(error);

}

}




return(


<section className="container mx-auto px-10 py-20">



<h1 className="text-5xl font-bold text-center">

Job Application

</h1>




<p className="text-center mt-5 text-gray-300 text-xl">

Apply for DevOps & Cloud Opportunities 🚀

</p>






<div className="max-w-3xl mx-auto mt-12 bg-slate-900 p-10 rounded-xl card-hover">





{

submitted &&

<div className="bg-green-600 p-4 rounded mb-6">

Application Submitted Successfully 🚀

</div>

}





<form onSubmit={handleSubmit}>


<label>

Full Name

</label>


<input

required

name="name"

value={form.name}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

/>







<label>

Email

</label>


<input

required

type="email"

name="email"

value={form.email}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

/>







<label>

Phone Number

</label>


<input

required

name="phone"

value={form.phone}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

/>







<label>

Company

</label>



<select

required

name="company"

value={form.company}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

>


<option value="">

Select Company

</option>


<option>

Amazon AWS

</option>


<option>

Google Cloud

</option>


<option>

Microsoft Azure

</option>


<option>

Netflix

</option>



</select>







<label>

Applying For

</label>



<select

required

name="job"

value={form.job}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

>



<option value="">

Select Job

</option>


<option>

DevOps Engineer

</option>


<option>

Cloud Engineer

</option>


<option>

Site Reliability Engineer

</option>


<option>

Kubernetes Engineer

</option>



</select>







<label>

Experience

</label>


<select

required

name="experience"

value={form.experience}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

>


<option value="">

Select Experience

</option>


<option>

Fresher

</option>


<option>

1-2 Years

</option>


<option>

2+ Years

</option>


</select>







<label>

Skills

</label>



<textarea

required

name="skills"

value={form.skills}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

placeholder="AWS, Docker, Kubernetes..."

/>







<label>

Upload Resume (PDF / DOC / DOCX)

</label>

<input

id="resume"

required

type="file"

accept=".pdf,.doc,.docx"

onChange={(e)=>setResume(e.target.files[0])}

className="w-full mt-3 mb-6"

/>






<button

className="w-full py-3 bg-blue-600 rounded text-xl"

>

Submit Application

</button>





</form>





</div>





</section>


)


}


export default Registration;
