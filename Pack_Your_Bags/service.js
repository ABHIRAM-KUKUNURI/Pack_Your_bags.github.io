var xyz= new XMLHttpRequest();

// function post_req(){ 
//     var serviceName=document.getElementById("service").value;
//     var serviceDescription=document.getElementById("desc").value;
//     var data={
//         serviceName:serviceName,
//         serviceDescription:serviceDescription,
//     }
//     data=JSON.stringify(data)
//     xyz.open("POST", "localhost:3000/")
//     xyz.setRequestHeader("content-type", 'application/Json')
//     xyz.send(data)
//     console.log("data sent")
// }


new_service=document.getElementById("add-service")

// new_service.addEventListener("click",post_req());

// new_service.addEventListener("click",get_req());
console.log("hello world")
get_req()


function get_req(){
    xyz.open('GET','http://localhost:3001/')
    xyz.send();
    xyz.onload=function(){
        dt=JSON.parse(xyz.responseText);
        
        console.log(dt)
    }

}