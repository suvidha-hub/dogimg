let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let img= await getimg();
    console.log(img);
    let pic=document.querySelector("img");
    pic.setAttribute("src",img);


})


async function getimg() {
    try{
         let res= await axios.get(url);
        return res.data.message;
    }

    catch(e){
        return ("error",e);
    }
    
    
}
