//use cdns of  jQuery and axios to get the data 


fetch("https://jsonplaceholder.typicode.com/todos",{method:"GET"}).then(res=>res.json()).then(response=>console.log(response))



(async function (){

      let res=await fetch("https://jsonplaceholder.typicode.com/todos")
       
      let response=await res.json()
      console.log( response);
      
})()

axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{

console.log(res.data);

})

let xhr= new XMLHttpRequest()

xhr.open("get","https://jsonplaceholder.typicode.com/todos")

xhr.send()

xhr.addEventListener("load",()=>{

    console.log(xhr.response);
    
})


$.ajax({
    method:"post",
    url:"https://jsonplaceholder.typicode.com/todos",
    success: function(res){

        console.log(res);
        
    }
})

$.ajax({
    
    url: "https://jsonplaceholder.typicode.com/todos/",
   
    
    success: function (response) {

        console.log(response);
        
        
    }
});

$.getJSON({
   
    url: "https://jsonplaceholder.typicode.com/todos/",
   
   
    success: function (response) {

        console.log(response);
        
        
    }
});


$.get({

  
    url: "https://jsonplaceholder.typicode.com/todos/",
   
   
    success: function (response) {

        console.log(response);
        
        
    }

})

