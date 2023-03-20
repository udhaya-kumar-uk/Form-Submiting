let data={}

//table titles 
const title=["Id","Name","Email","Gender"]

//creating table using dom
const table=document.createElement("table")
       table.className = "table";

const thead=document.createElement("thead")
       thead.className = "thead-dark";

const tbody=document.createElement("tbody")
       tbody.className = "thead-dark";



function handalechange(e){
 if(e.type==="text"){
    console.log(e.value)
    data[e.id]=e.value
 }else{
    data[e.name]=e.id
    console.log(e.checked)
 }
     
    console.log(data)
}


 

function renderdata(data=[]){
   const nodes=[]
 for(let i=0;i<data.length;i++) {
const tcell=document.createElement("td")
 tcell.innerText=title[i]
 nodes.push(tcell)
 }
return nodes;
}


thead.append(...renderdata(title))
table.append(thead)

let person=[
    {
        id: "1",           
        name:"virat kholi",
        email:"viratkholi@gmail.com",
        gender: "male" 
    },
    {
        id:"2",            
        name:"mahender sign dhoni",
        email:"dhoni@gmail.com",
        gender:"male"  
    },
    {
        id:"3",            
        name:"smriti mandhana",
        email:"mandhana@gmail.com",
        gender:"female"  
    },
    {
        id:"4",            
        name:"mithaliraj",
        email:"mithaliraj@gmail.com",
        gender:"female",              
    },
    {
        id:"5",
        name:"ravindra jadeja",
        email:"jaddu@gmail.com",
        gender:"male"
    }
]

function handlesubmit(){
 if(Object.values(data).length >2){
 person.push({id:(person.length+1).toString(),...data})
 } else{
 alert("some are blank")
 }
 refreshtable(person)
}



function renderrow(data={}){
 const tablerow=document.createElement("tr")
 const values=Object.values(data)
 for(let i=0;i<values.length;i++){
 const tablecell=document.createElement("td")
 tablecell.innerText=values[i]
 tablerow.append(tablecell)
 }
 return tablerow 
}

function render(data=[]){
 let row=[];
 if(data.length > 0){
 for (let i=0;i<data.length;i++){
 const item=renderrow(data[i])
 row.push(item)
 }
 } 
 return row;
} 

function refreshtable(data=[]){
 tbody.innerHTML=""
 tbody.append(...render(data))
 table.append(tbody)
 document.body.append(table)
 }
 refreshtable(person)

   
 document.body.append(button)
 button.innerHTML=generatebutton(person)

function handleform(){
   console.log("form submited")
 }