// const url="https://fakestoreapi.com/products";
const url={
    all:"https://fakestoreapi.com/products",
    men:"https://fakestoreapi.com/products/category/men's%20clothing",
    women:"https://fakestoreapi.com/products/category/women's%20clothing",
    electronics:"https://fakestoreapi.com/products/category/electronics",
    jewelery:"https://fakestoreapi.com/products/category/jewelery",
}
async function Default(){
    let data="";
    let card="";
    let response = await fetch(url.all);
    data= await response.json();
    document.querySelector("#head").innerHTML=`All Available Products`
    data.forEach(element => {
        card+=`<div class="card my-4 d-flex justify-content-center align-items-center" style="width: 18rem;">
        <img src="${element.image}" class="card-img-top" alt="..." height="350px">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.category}</p>
        <a href="#" class="btn btn-primary rounded-pill">Price: "${element.price}"</a>
        </div>
        </div> `
        document.getElementById("Cards").innerHTML=card;
            
        });

}
 Default()
const fakeStore =async()=>{
    let All=document.getElementById("All");
    let Men=document.getElementById("men");
    let Women=document.getElementById("women");
    let Electronics=document.getElementById("electronics");
    let Jewellary=document.getElementById("jewellary");
    // let Head=document.querySelector(".rightsection");
    const Checked={
        hasAll: All.checked,
        hasMen: Men.checked,
        hasWomen:Women.checked,
        hasElectronics:Electronics.checked,
        hasJewellary:Jewellary.checked
    }
    let data="";
    let card="";
        
    if(Checked.hasMen==true && Checked.hasAll==false && Checked.hasWomen==false && Checked.hasElectronics==false && Checked.hasJewellary==false){
        const response = await fetch(url.men);
        data= await response.json();
        
        document.querySelector("#head").innerHTML=`${data[0].category}`
        data.forEach(element => {
            card+=`<div class="card my-4 d-flex justify-content-center align-items-center" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="..." height="350px">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.category}</p>
              <a href="#" class="btn btn-primary rounded-pill">Price: "${element.price}"</a>
            </div>
          </div> `
            
        });
        document.getElementById("Cards").innerHTML=card;
        document.getElementById("error").innerHTML=""
    }
    else if(Checked.hasMen==false && Checked.hasAll==true && Checked.hasWomen==false && Checked.hasElectronics==false && Checked.hasJewellary==false){
        const response = await fetch(url.all);
        data= await response.json();
        

        document.querySelector("#head").innerHTML=`All Available Products`
        data.forEach(element => {
            card+=`<div class="card my-4 d-flex justify-content-center align-items-center" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="..." height="350px">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.category}</p>
              <a href="#" class="btn btn-primary rounded-pill">Price: "${element.price}"</a>
            </div>
          </div> `
            
        });
        document.getElementById("Cards").innerHTML=card;
        document.getElementById("error").innerHTML=""
    }
    else if(Checked.hasMen==false && Checked.hasAll==false && Checked.hasWomen==true && Checked.hasElectronics==false && Checked.hasJewellary==false){
        const response = await fetch(url.women);
        data= await response.json();
        
        document.querySelector("#head").innerHTML=`${data[0].category}`
        data.forEach(element => {
            card+=`<div class="card my-4 d-flex justify-content-center align-items-center" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="..." height="350px">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.category}</p>
              <a href="#" class="btn btn-primary rounded-pill">Price: "${element.price}"</a>
            </div>
          </div> `
            
        });
        document.getElementById("Cards").innerHTML=card;
        document.getElementById("error").innerHTML=""
    }
    else if(Checked.hasMen==false && Checked.hasAll==false && Checked.hasWomen==false && Checked.hasElectronics==true && Checked.hasJewellary==false){

        const response = await fetch(url.electronics);
        data= await response.json();

        document.querySelector("#head").innerHTML=`${data[0].category}`
        data.forEach(element => {
            card+=`<div class="card my-4 d-flex justify-content-center align-items-center" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="..." height="350px">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.category}</p>
              <a href="#" class="btn btn-primary rounded-pill">Price: "${element.price}"</a>
            </div>
          </div> `
            
        });
        document.getElementById("error").innerHTML=""
        document.getElementById("Cards").innerHTML=card;
    }
    else if(Checked.hasMen==false && Checked.hasAll==false && Checked.hasWomen==false && Checked.hasElectronics==false && Checked.hasJewellary==true){
        const response = await fetch(url.jewelery);
        data= await response.json();

        document.querySelector("#head").innerHTML=`${data[0].category}`
        data.forEach(element => {
            card+=`<div class="card my-4 d-flex justify-content-center align-items-center" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="..." height="350px">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.category}</p>
              <a href="#" class="btn btn-primary rounded-pill">Price: "${element.price}"</a>
            </div>
          </div> `
            
        });
        document.getElementById("Cards").innerHTML=card;
        document.getElementById("error").innerHTML=""
    }
    else if(Checked.hasMen==false && Checked.hasAll==false && Checked.hasWomen==false && Checked.hasElectronics==false && Checked.hasJewellary==false){
        const response = await fetch(url.all);
        data= await response.json();
        document.querySelector("#head").innerHTML=`All Available Products`

        

        data.forEach(element => {
            card+=`
            <div class="card my-4 d-flex justify-content-center align-items-center" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="..." height="350px">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.category}</p>
              <a href="#" class="btn btn-primary rounded-pill">Price: "${element.price}"</a>
            </div>
          </div> `
            
        });
        document.getElementById("Cards").innerHTML=card;
        document.getElementById("error").innerHTML=""
    }
    else{
        document.getElementById("error").innerHTML="Please Check Only One Box"
    }
    
    
        
}
function Reload(){
    location.reload();
}
