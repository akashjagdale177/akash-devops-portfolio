import {useEffect,useState} from "react";
import {Navigate,useNavigate} from "react-router-dom";

function Admin(){


const [jobs,setJobs]=useState([]);
const navigate = useNavigate();
const [courses,setCourses]=useState([]);


const [contacts,setContacts]=useState([]);


useEffect(()=>{


// Job Applications

fetch("http://localhost:5000/applications")

.then(res=>res.json())

.then(data=>{

setJobs(data);

})

.catch(err=>console.log(err));






// Course Registrations

fetch("http://localhost:5000/course-registrations")

.then(res=>res.json())

.then(data=>{

setCourses(data);

})

.catch(err=>console.log(err));

// Contact Messages

fetch("http://localhost:5000/contacts")

.then(res=>res.json())

.then(data=>{

setContacts(data);

})

.catch(err=>console.log(err));

},[]);








if(!localStorage.getItem("admin")){


return <Navigate to="/admin-login"/>


}







return(


<section className="container mx-auto px-10 py-20">



<h1 className="text-5xl font-bold text-center">

Admin Dashboard 🔐

</h1>
<button

onClick={()=>{

localStorage.removeItem("admin");

navigate("/admin-login");

}}

className="mt-8 block mx-auto px-6 py-3 bg-red-600 rounded"

>

Logout

</button>




<h2 className="text-3xl font-bold mt-12">

Job Applications

</h2>





<div className="grid md:grid-cols-2 gap-6 mt-6">


{

jobs.map((item)=>(


<div 
key={item._id}
className="bg-slate-900 p-6 rounded-xl">


<h3 className="text-2xl font-bold">

{item.name}

</h3>


<p>Email : {item.email}</p>

<p>Phone : {item.phone}</p>

<p>Company : {item.company}</p>

<p>Job : {item.job}</p>

<p>Experience : {item.experience}</p>

<p>Skills : {item.skills}</p>



</div>


))


}



</div>









<h2 className="text-3xl font-bold mt-16">

Course Registrations

</h2>







<div className="grid md:grid-cols-2 gap-6 mt-6">


{


courses.map((item)=>(


<div

key={item._id}

className="bg-slate-900 p-6 rounded-xl">



<h3 className="text-2xl font-bold">

{item.name}

</h3>



<p>Email : {item.email}</p>


<p>Phone : {item.phone}</p>


<p>Course : {item.course}</p>


<p>Education : {item.education}</p>



</div>


))


}



</div>

<h2 className="text-3xl font-bold mt-16">

Contact Messages

</h2>



<div className="grid md:grid-cols-2 gap-6 mt-6">


{

contacts.map((item)=>(


<div

key={item._id}

className="bg-slate-900 p-6 rounded-xl">


<h3 className="text-2xl font-bold">

{item.name}

</h3>


<p>Email : {item.email}</p>


<p className="mt-4">

Message : {item.message}

</p>



</div>


))


}


</div>



</section>


)



}



export default Admin;
