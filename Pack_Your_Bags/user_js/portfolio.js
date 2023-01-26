window.onload=function(){

    if(window.localStorage.getItem("k")!=null && window.localStorage.getItem("k")!=1){
      // alert(100);
        document.getElementById("intro1").className="nav-item intro";
        document.getElementById("intro2").className="nav-item";
        document.getElementById("intro3").className="nav-item";
        var ans=JSON.parse(window.localStorage.getItem("k"));
        document.getElementById("introuser").innerHTML="Hello "+ans.fname+"!";
    }
}
$.ajax({
  "method":
})
if(localStorage.getItem('places')) place2=JSON.parse(localStorage.getItem('places'))
for(let {destinationDesc,destinationImage,destinationName} of place2)
{
    // console.log(arr2)
  document.querySelector('#add_dest').innerHTML+=`<div class="col-lg-4 col-md-6 portfolio-item filter-app">
  <img src="${destinationImage}" class="img-fluid" alt="">
  <div class="portfolio-info">
    <h4>${destinationName}</h4>
    <!-- <p>Lorem ipsum, dolor sit amet consectetur</p> -->
    <a href="${destinationImage}" title="${destinationName}" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
    <!-- <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> -->
  </div>
</div>`
}
function logout(){
  window.localStorage.setItem("k",1);
  document.getElementById("Intro1").className="nav-item";
  document.getElementById("intro2").className="nav-item intro-tag";
  document.getElementById("intro3").className="nav-item intro-tag";
  

}