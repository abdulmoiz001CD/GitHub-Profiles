let url= "https://api.github.com/users";
const InputEl = document.getElementById("text");
const btnEl = document.getElementById("btnMz");
const card_ContainerEl = document.getElementById("card_container");
const LoadingEl = document.getElementById("Loading")






// ImportApiData into Html Card
const ImportApiData = (profile) => {
    return` <div class="cardMz">
    <div class="upperText">
    <div class="imgControl">
      <img src="${profile.avatar_url}" alt="">
    
      <div class="nameEmail">
        <h2>${profile.name}</h2>
        <h4>${profile.login}@gmail.com</h4>
      </div>
    
    </div>
    
    
    <a href="${profile.html_url}" target ="_blank"><button class="btn2 btn btn-outline-success">Check Profile</button></a>
    </div>
    
    <div class="bioText">
    
      <h2>Description</h2>
      <p>${profile.bio}</p>
    </div>
      
    
    <div class="bottomText">
    <div class="control">
      <h2>Follwing</h2>
      <h3>${profile.following}</h3>
    </div>
    
    
    <div class="control">
      <h2>Follwers</h2>
      <h3>${profile.followers}</h3>
    </div>
    
    
    
    <div class="control">
      <h2>Public Res</h2>
      <h3>${profile.public_repos}</h3>
    </div>
    
    </div>
    </div>
    

    

    `
    }
    




// APi GET Data
const fecthFunction = async() =>{
    try {
  const userSearch=InputEl.value; 
   
  LoadingEl.innerText = `loading....`
  LoadingEl.style.color = "white"

  const res = await fetch(`${url}/${userSearch}`);
  const data = await res.json()

if(data.bio){


card_ContainerEl.innerHTML =ImportApiData(data);
LoadingEl.innerText = ""
}else{
    LoadingEl.innerText = data.message
    LoadingEl.style.color = "red"
}



    } catch (error) {
        console.log(error)
        LoadingEl.innerText=""
    }
}


 
const InputEmptyRest = () => {
  if(!InputEl.value.trim()){
  
    
      card_ContainerEl.innerHTML="";  
      LoadingEl.innerText =""
    }}

InputEl.addEventListener("keyup",InputEmptyRest);

btnEl.addEventListener("click",fecthFunction);











