function Skills(){


const skills=[


{
name:"Linux",
level:"Advanced",
percent:"85%",
icon:"🐧",
desc:"Server management, commands, permissions and administration"
},


{
name:"AWS Cloud",
level:"Intermediate",
percent:"75%",
icon:"☁️",
desc:"EC2, EBS, VPC, IAM, Security Groups"
},


{
name:"Docker",
level:"Intermediate",
percent:"75%",
icon:"🐳",
desc:"Container creation, images and application deployment"
},


{
name:"Kubernetes",
level:"Intermediate",
percent:"70%",
icon:"☸️",
desc:"Pods, Deployment, Services, ConfigMap and Cluster management"
},


{
name:"Jenkins CI/CD",
level:"Beginner",
percent:"60%",
icon:"⚙️",
desc:"Pipeline automation and deployment workflow"
},


{
name:"Git & GitHub",
level:"Intermediate",
percent:"75%",
icon:"📂",
desc:"Version control and code management"
},


{
name:"Terraform",
level:"Learning",
percent:"50%",
icon:"🏗️",
desc:"Infrastructure as Code automation"
},


{
name:"Monitoring",
level:"Learning",
percent:"50%",
icon:"📊",
desc:"Application monitoring and reliability concepts"
}


];




return(


<section className="container mx-auto px-10 py-20">





<h1 className="text-5xl font-bold text-center">

My Skills

</h1>





<p className="text-center mt-5 text-gray-300 text-xl">

DevOps Tools & Technologies

</p>







<div className="grid md:grid-cols-4 gap-8 mt-12">





{


skills.map((skill)=>(



<div

key={skill.name}

className="bg-slate-900 p-8 rounded-xl card-hover"



>



<div className="text-5xl">

{skill.icon}

</div>





<h2 className="text-2xl font-bold mt-5">

{skill.name}

</h2>





<p className="text-blue-400 mt-3">

{skill.level}

</p>






<p className="mt-4 text-gray-300">

{skill.desc}

</p>







<div className="mt-5">



<div className="flex justify-between mb-2">


<span>

Skill Level

</span>


<span>

{skill.percent}

</span>


</div>






<div className="w-full bg-slate-700 rounded-full h-3">



<div

className="bg-blue-600 h-3 rounded-full"

style={{width:skill.percent}}


>



</div>


</div>



</div>






</div>




))


}




</div>






</section>


)


}



export default Skills;
