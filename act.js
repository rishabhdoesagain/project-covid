

//this function gives state object

const fcn = async (s) => {

    const res = await axios.get(' https://api.rootnet.in/covid19-in/stats/latest');

    const arry = res.data.data.regional


    const state = arry.find(state => state.loc === s);

    return state;
    //console.log(state);

     }

    //thisfunction gives bed
     const fn = async (s) => {

        const res = await axios.get(' https://api.rootnet.in/covid19-in/hospitals/beds');
    
        const arry = res.data.data.regional
    
    
        const stat = arry.find(stat => stat.state === s);
      
       // console.log(stat.state);

        return stat;
        //console.log(state);
    
         }

         //this function gives last refreshed
         const fd = async () => {

            const res = await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
        
             arry = res.data.lastRefreshed;
             arry=arry.substr(0,10);
            
             return arry;
        
             }

//selecting buttons
//first tablle starts
const buttons = document.querySelectorAll('.btn');

const casebutton = buttons[0];

const vaccinebutton = buttons[1];

//doing for first button corona cases
stateobject="p";

casebutton.onclick = async function () {

    const likha = document.querySelectorAll('select');

    const selectedstate = likha[0].selectedOptions[0].value;

    if(selectedstate==="select any state")
    { //console.log("op");
    rs=document.querySelectorAll('.alert');
    rs[0].style.opacity='1';
        //break;
        document.querySelector(".table").style.opacity="0";
    }
   
    else{ 
        rs=document.querySelectorAll('.alert');
        rs[0].style.opacity='0';
        
     stateobject = await fcn(selectedstate);

    //console.log(stateobject.loc);
    
    document.querySelector(".table").style.opacity="1";
   // document.getElementById("casetable").style.opacity="1";

    document.getElementById("casetable").rows[0].cells[2].innerHTML=stateobject.loc;

    document.getElementById("casetable").rows[1].cells[2].innerHTML=stateobject.confirmedCasesIndian;

    document.getElementById("casetable").rows[2].cells[2].innerHTML=stateobject.confirmedCasesIndian-stateobject.discharged;

    document.getElementById("casetable").rows[3].cells[2].innerHTML=stateobject.discharged;
    
    document.getElementById("casetable").rows[4].cells[2].innerHTML=stateobject.deaths;

   samestate=await fn(selectedstate);

   //console.log(samestate);
     
   document.getElementById("casetable").rows[5].cells[2].innerHTML=samestate.urbanHospitals;
   document.getElementById("casetable").rows[6].cells[2].innerHTML=samestate.urbanBeds;
   document.getElementById("casetable").rows[7].cells[2].innerHTML=samestate.ruralHospitals;
   document.getElementById("casetable").rows[8].cells[2].innerHTML=samestate.ruralBeds;

   document.getElementById("casetable").rows[9].cells[2].innerHTML= await fd();

   
    }
    
    }


    //first tablle ends
    //2nd table starts

    const fcc = async (s) => {

        const res = await axios.get(' https://api.covid19api.com/summary');
    
        const arry = res.data.Countries;
    
   // console.log(arry);
        const state = arry.find(state => state.Country === s);
      //console.log(state);


        return state;
        
    
         }

    vaccinebutton.onclick = async function () {
     //console.log("clicked");
        const likha = document.querySelectorAll('select');
    
        const selectedstate = likha[1].selectedOptions[0].value;
    
        if(selectedstate==="select country name")
        { //console.log("op");
        rs=document.querySelectorAll('.alert');
        rs[1].style.opacity='1';
        
            //break;
            z=document.querySelectorAll(".table");
            z[1].style.opacity="0";
        }

        else{  

         stateobject = await fcc(selectedstate);
    
         rs=document.querySelectorAll('.alert');
        rs[1].style.opacity='0';

        document.getElementById("vaccinetable").style.opacity="1";
    
        document.getElementById("vaccinetable").rows[0].cells[2].innerHTML=stateobject.Country;
    
        document.getElementById("vaccinetable").rows[1].cells[2].innerHTML=stateobject.NewConfirmed;
    
        document.getElementById("vaccinetable").rows[2].cells[2].innerHTML=stateobject.TotalConfirmed;
    
        document.getElementById("vaccinetable").rows[3].cells[2].innerHTML=stateobject.NewDeaths;
        document.getElementById("vaccinetable").rows[4].cells[2].innerHTML=stateobject.TotalDeaths;
        
        document.getElementById("vaccinetable").rows[5].cells[2].innerHTML=stateobject.NewRecovered;

        document.getElementById("vaccinetable").rows[6].cells[2].innerHTML=stateobject.TotalRecovered;
          
        d=stateobject.Date;

        d=d.substr(0,10);

        document.getElementById("vaccinetable").rows[7].cells[2].innerHTML=d;
          
       }

        }

        //social
        
 


      
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




// background-image: url(https://dynaimage.cdn.cnn.com/cnn/w_1600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210421090053-01-coronavirus-gallery-0414-india.jpg);
 

