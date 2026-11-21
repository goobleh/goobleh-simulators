const setupSection=document.getElementById("setupSection");
const startSetup=document.getElementById("startSetup");
const cancelSetup=document.getElementById("cancelSetup");
const seasonForm=document.getElementById("seasonForm");
const formError=document.getElementById("formError");

function readDraft(){
  try{return JSON.parse(sessionStorage.getItem("peakDraft")||"null");}
  catch{return null;}
}
function openSetup(){
  const draft=readDraft();
  if(draft){
    document.getElementById("seasonName").value=draft.name||"";
    document.getElementById("climberCount").value=draft.climberCount||16;
    document.getElementById("seasonMode").value=draft.mode||"standard";
  }
  setupSection.classList.remove("hidden");
  setupSection.scrollIntoView({behavior:"smooth",block:"start"});
  document.getElementById("seasonName").focus();
}
startSetup.addEventListener("click",openSetup);
cancelSetup.addEventListener("click",()=>{
  setupSection.classList.add("hidden");
  formError.textContent="";
  startSetup.focus();
});
seasonForm.addEventListener("submit",event=>{
  event.preventDefault();
  const name=document.getElementById("seasonName").value.trim();
  const count=Number(document.getElementById("climberCount").value);
  if(!name){formError.textContent="Enter a name for your season.";return;}
  if(!Number.isInteger(count)||count<4||count>24){formError.textContent="Choose between 4 and 24 climbers.";return;}
  const previous=readDraft();
  const season={
    name,
    climberCount:count,
    mode:document.getElementById("seasonMode").value,
    route:previous?.route||{first:"shore",second:"tropics",third:"mesa",fourth:"gloom",fifth:"citadel",final:"the-peak"},
    createdAt:previous?.createdAt||new Date().toISOString()
  };
  sessionStorage.setItem("peakDraft",JSON.stringify(season));
  window.location.href="biomes.html";
});
