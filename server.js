

const apikey="dtivmKNLQm5FHVGxgvXzel3LZ6X0FKQnxQXJmula"
async function handleclick(){
    
    const res=await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${document.getElementById("date").value}`)
    const res2=await res.json();
    console.log(res2)
    const ele=document.querySelector(".img")
     ele.setAttribute("src",res2.url)
     document.getElementById("imgp").innerText=res2.explanation.substring(0,250)+"....";
}
document.getElementById('submit').addEventListener('click',handleclick)