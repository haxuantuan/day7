var search_tag=document.querySelector('.search-tag')
var input=document.querySelector('#search')
var remove=document.querySelector('.remove')
var close=document.querySelectorAll('.litag i')
var apps=['nodejs','reactjs']
function render(){
    search_tag.innerHTML=''
    for(var i=0;i<apps.length;i++){
        var app=apps[i];
        search_tag.innerHTML+=`<li class="li-tag">
        ${app}
        <i class="fas fa-times" onclick="removeTag(${i},1)" ></i>
    </li>`
    }
    search_tag.appendChild(input);
    
    input.focus();
    console.log(apps)
}
render()
input.addEventListener('keydown',function(even){
   
  if(even.key ==='Enter'){
      if(!apps.includes(input.value)){
        apps.push(input.value.trim())
        input.value=''
        render()
      }
      else{
          input.value=''
          input.focus();
      }
  }
})
function removeTag(i,n){
    apps.splice(i,n)
    render()
}
remove.onclick=function removeall(){
   apps.slice(0)
   render();
}