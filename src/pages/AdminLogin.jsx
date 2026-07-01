import {useState} from "react";
import {useNavigate} from "react-router-dom";


function AdminLogin(){


const [username,setUsername]=useState("");

const [password,setPassword]=useState("");

const navigate=useNavigate();



async function login(e){

e.preventDefault();


const res = await fetch("https://akash-devops-portfolio.onrender.com/admin-login",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

username,

password

})

});


const data = await res.json();



if(data.success){


localStorage.setItem("admin","true");


navigate("/admin");


}

else{


alert("Wrong Username or Password");


}


}
return(


<div className="container mx-auto px-10 py-20">


<h1 className="text-4xl font-bold text-center">

Admin Login 🔐

</h1>



<form 
onSubmit={login}
className="max-w-md mx-auto mt-10 bg-slate-900 p-8 rounded-xl"
>



<input

className="w-full p-3 mb-5 bg-slate-800 rounded"

placeholder="Username"

onChange={(e)=>setUsername(e.target.value)}

/>



<input

type="password"

className="w-full p-3 mb-5 bg-slate-800 rounded"

placeholder="Password"

onChange={(e)=>setPassword(e.target.value)}

/>



<button

className="w-full bg-blue-600 p-3 rounded"

>

Login

</button>



</form>


</div>


)


}


export default AdminLogin;
