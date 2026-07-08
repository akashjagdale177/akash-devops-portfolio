import {useEffect,useState} from "react";
import {Navigate,useNavigate} from "react-router-dom";

function Admin(){

const [jobs,setJobs]=useState([]);
const [courses,setCourses]=useState([]);
const [contacts,setContacts]=useState([]);

const navigate=useNavigate();

useEffect(()=>{

fetch("https://akash-devops-portfolio.onrender.com/applications")
.then(res=>res.json())
.then(data=>{
setJobs(data);
})
.catch(err=>console.log(err));

fetch("https://akash-devops-portfolio.onrender.com/course-registrations")
.then(res=>res.json())
.then(data=>{
setCourses(data);
})
.catch(err=>console.log(err));

fetch("https://akash-devops-portfolio.onrender.com/contacts")
.then(res=>res.json())
.then(data=>{
setContacts(data);
})
.catch(err=>console.log(err));

},[]);

async function deleteJob(id){

if(!window.confirm("Delete this application?")) return;

try{

const res=await fetch(
`https://akash-devops-portfolio.onrender.com/applications/${id}`,
{
method:"DELETE"
}
);

if(!res.ok){

alert("Delete Failed");
return;

}

setJobs(prev=>prev.filter(item=>item._id!==id));

alert("Application Deleted Successfully");

}catch(err){

console.log(err);
alert("Server Error");

}

}

async function deleteCourse(id){

if(!window.confirm("Delete this registration?")) return;

try{

const res=await fetch(
`https://akash-devops-portfolio.onrender.com/course-registrations/${id}`,
{
method:"DELETE"
}
);

if(!res.ok){

alert("Delete Failed");
return;

}

setCourses(prev=>prev.filter(item=>item._id!==id));

alert("Registration Deleted Successfully");

}catch(err){

console.log(err);
alert("Server Error");

}

}

async function deleteContact(id){

if(!window.confirm("Delete this message?")) return;

try{

const res=await fetch(
`https://akash-devops-portfolio.onrender.com/contacts/${id}`,
{
method:"DELETE"
}
);

if(!res.ok){

alert("Delete Failed");
return;

}

setContacts(prev=>prev.filter(item=>item._id!==id));

alert("Message Deleted Successfully");

}catch(err){

console.log(err);
alert("Server Error");

}

}

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

{jobs.map((item)=>(

<div
key={item._id}
className="bg-slate-900 p-6 rounded-xl"
>

<h3 className="text-2xl font-bold">
{item.name}
</h3>

<p>Email : {item.email}</p>
<p>Phone : {item.phone}</p>
<p>Company : {item.company}</p>
<p>Job : {item.job}</p>
<p>Experience : {item.experience}</p>
<p>Skills : {item.skills}</p>
{item.resume && (

<a
href={item.resume}
target="_blank"
rel="noopener noreferrer"
className="inline-block mt-4 px-5 py-2 bg-green-600 rounded hover:bg-green-700"
>

View Resume

</a>

)}
<button
onClick={()=>deleteJob(item._id)}
className="mt-5 px-5 py-2 bg-red-600 rounded hover:bg-red-700"
>
Delete
</button>

</div>

))}

</div>

<h2 className="text-3xl font-bold mt-16">
Course Registrations
</h2>

<div className="grid md:grid-cols-2 gap-6 mt-6">

{courses.map((item)=>(

<div
key={item._id}
className="bg-slate-900 p-6 rounded-xl"
>

<h3 className="text-2xl font-bold">
{item.name}
</h3>

<p>Email : {item.email}</p>
<p>Phone : {item.phone}</p>
<p>Course : {item.course}</p>
<p>Education : {item.education}</p>

<button
onClick={()=>deleteCourse(item._id)}
className="mt-5 px-5 py-2 bg-red-600 rounded hover:bg-red-700"
>
Delete
</button>

</div>

))}

</div>

<h2 className="text-3xl font-bold mt-16">
Contact Messages
</h2>

<div className="grid md:grid-cols-2 gap-6 mt-6">

{contacts.map((item)=>(

<div
key={item._id}
className="bg-slate-900 p-6 rounded-xl"
>

<h3 className="text-2xl font-bold">
{item.name}
</h3>

<p>Email : {item.email}</p>

<p className="mt-4">
Message : {item.message}
</p>

<button
onClick={()=>deleteContact(item._id)}
className="mt-5 px-5 py-2 bg-red-600 rounded hover:bg-red-700"
>
Delete
</button>

</div>

))}

</div>

</section>

);

}

export default Admin;
