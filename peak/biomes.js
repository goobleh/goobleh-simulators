const storageKey="peakDraft";
const saveMessage=document.getElementById("saveMessage");
let draft;
try{draft=JSON.parse(sessionStorage.getItem(storageKey)||"null");}catch{draft=null;}
if(!draft){
  window.location.replace("index.html");
}else{
  draft.route=draft.route||{first:"shore",second:"tropics",third:"mesa",fourth:"gloom",fifth:"citadel",final:"the-peak"};
  const fifthTitle=document.getElementById("fifthTitle");
  const fifthDescription=document.getElementById("fifthDescription");
  function render(){
    document.querySelectorAll(".choice").forEach(button=>{
      const selected=draft.route[button.dataset.slot]===button.dataset.value;
      button.classList.toggle("selected",selected);
      button.setAttribute("aria-pressed",String(selected));
    });
    const isGloom=draft.route.fourth==="gloom";
    draft.route.fifth=isGloom?"citadel":"kiln";
    fifthTitle.textContent=isGloom?"The Citadel":"The Kiln";
    fifthDescription.textContent=isGloom?"Automatically paired with Gloom.":"Automatically paired with Caldera.";
  }
  document.querySelectorAll(".choice").forEach(button=>{
    button.addEventListener("click",()=>{
      draft.route[button.dataset.slot]=button.dataset.value;
      saveMessage.textContent="";
      render();
    });
  });
  document.getElementById("saveRoute").addEventListener("click",()=>{
    sessionStorage.setItem(storageKey,JSON.stringify(draft));
    saveMessage.textContent="Route saved for this season.";
  });
  render();
}
