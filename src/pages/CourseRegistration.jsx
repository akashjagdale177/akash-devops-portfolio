import {useState} from "react";
import {useSearchParams} from "react-router-dom";


function CourseRegistration(){


const [searchParams]=useSearchParams();


const selectedCourse=searchParams.get("course") || "";


const [success,setSuccess]=useState(false);



const [form,setForm]=useState({

name:"",
email:"",
phone:"",
course:selectedCourse,
education:""

});





function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

});

}




async function submit(e){

e.preventDefault();


try{


await fetch("https://akash-devops-portfolio.onrender.com/course-register",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(form)


});



setSuccess(true);



setForm({

name:"",
email:"",
phone:"",
course:"",
education:""

});



}

catch(error){

console.log(error);

}



}






return(


<section className="container mx-auto px-10 py-20">





<h1 className="text-5xl font-bold text-center">

Course Registration

</h1>





<p className="text-center mt-5 text-gray-300 text-xl">

Join DevOps & Cloud Training Program 🚀

</p>






<div className="max-w-3xl mx-auto mt-12 bg-slate-900 p-10 rounded-xl card-hover">





{

success &&

<div className="bg-green-600 p-4 rounded mb-6">

Registration Completed Successfully 🚀

</div>


}





<form onSubmit={submit}>


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

Phone

</label>



<input

required

name="phone"

value={form.phone}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

/>






<label>

Selected Course

</label>



<select

required

name="course"

value={form.course}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

>


<option value="">

Select Course

</option>


<option>

DevOps Engineer Master Program

</option>


<option>

AWS Cloud Associate Course

</option>


<option>

Kubernetes Specialist Training

</option>



</select>








<label>

Education

</label>


<input

required

name="education"

value={form.education}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

placeholder="BCA, BCS, BE etc."

/>







<button

className="w-full py-3 bg-blue-600 rounded text-xl"

>

Submit Registration

</button>





</form>





</div>





</section>


)


}



export default CourseRegistration;
