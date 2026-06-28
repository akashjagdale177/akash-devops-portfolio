import {useState} from "react";


function Contact(){


const [sent,setSent]=useState(false);



const [form,setForm]=useState({

name:"",
email:"",
message:""

});




function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value

});


}





function submit(e){


e.preventDefault();


setSent(true);


setForm({

name:"",
email:"",
message:""

});


}





return(


<section className="container mx-auto px-10 py-20">






<h1 className="text-5xl font-bold text-center">

Contact Me

</h1>





<p className="text-center mt-5 text-gray-300 text-xl">

Let's connect for DevOps, Cloud and Automation opportunities 🚀

</p>






<div className="grid md:grid-cols-2 gap-10 mt-12">






<div className="bg-slate-900 p-10 rounded-xl">





<h2 className="text-3xl font-bold">

Get In Touch

</h2>






<p className="mt-6 text-gray-300 text-lg">

📧 Email: akashjagdale177@gmail.com

</p>





<p className="mt-4 text-gray-300 text-lg">

📍 India

</p>







<div className="mt-8 flex gap-5">





<a

href="https://github.com/akashjagdale177"

target="_blank"

rel="noreferrer"

>


<button className="px-5 py-3 bg-blue-600 rounded">


GitHub

</button>


</a>








<a

href="https://www.linkedin.com/in/akash-jagdale"

target="_blank"

rel="noreferrer"

>


<button className="px-5 py-3 bg-blue-500 rounded">


LinkedIn

</button>


</a>






</div>







</div>









<div className="bg-slate-900 p-10 rounded-xl">






{

sent &&

<div className="bg-green-600 p-4 rounded mb-5">

Message Sent Successfully 🚀

</div>


}






<form onSubmit={submit}>


<label>

Name

</label>


<input

required

name="name"

value={form.name}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

placeholder="Your Name"

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

placeholder="Your Email"

/>








<label>

Message

</label>



<textarea

required

name="message"

value={form.message}

onChange={handleChange}

className="w-full p-3 mt-2 mb-5 bg-slate-800 rounded"

placeholder="Your Message"

/>







<button

className="w-full py-3 bg-blue-600 rounded text-xl"

>


Send Message


</button>





</form>







</div>








</div>







</section>


)


}



export default Contact;
