//step one
const container=document.querySelectorAll(".container1")
const inputS1=document.querySelectorAll(".inputS1")
const container1=document.querySelector(".container1.fill")
const btns=document.querySelectorAll(".container1 .btns")
const back=document.querySelectorAll(".container1 .back")
//step two
const plan1=document.querySelector(".select-plan .plan")
const plan2=document.querySelector(".select-plan .plan2") 
const Switch=document.querySelector(".MY .switch .checkbox")
const YearAndMonth=document.querySelectorAll(".MY p")
const insidePlan1=document.querySelectorAll(".plan .insidePlan")
const insidePlan2=document.querySelectorAll(".plan2 .insidePlan")
const chosen=document.querySelector("div.chosen p")

//step three
const thirdStepCheck=document.querySelectorAll(".THEContainer .checkContainer")
const price=document.querySelectorAll(".THEContainer .checkContainer .price")
const thirdStepCheckInput=document.querySelectorAll(".THEContainer .checkContainer input")
//step four
const rechecLink=document.querySelector(".summary .recheck a")
const recheck=document.querySelector(".summary .recheck ")
const billingChoice=document.querySelector(".summary .recheck .billingChoice")
const recheckPrice=document.querySelector(".summary .recheck div span")
const recheckLinkedPrice=document.querySelectorAll(".summary .recheck .linked span")
const linked=document.querySelectorAll(".summary .recheck .linked")
const Thefinalresult=document.querySelector(".summary .total span")
const totalDuration=document.querySelector(".summary .total span .totalDuration")

let index=0

console.log(inputS1[0])



btns.forEach(btn1=>{btn1.addEventListener("click",(event)=>{
    if(inputS1[0].value===""||inputS1[1].value===""||inputS1[2].value===""){
        return false
        
        
    }else{
        event.preventDefault();
        document.querySelector(".container1.fill").classList.remove("fill")
        index++;
        container[index].classList.add("fill")
    }
       
    
    
}
   
)})
back.forEach(btn2=>{btn2.addEventListener("click",()=>{
    document.querySelector(".container1.fill").classList.remove("fill")
    index--;
    container[index].classList.add("fill")}
)})


insidePlan1.forEach(plan=>{
    plan.addEventListener("click",()=>{
        document.querySelector(".plan .insidePlan.chosen").classList.remove("chosen")
        plan.classList.add("chosen")
        finishUp()    
    })
})

insidePlan2.forEach(plan=>{
    plan.addEventListener("click",()=>{
        document.querySelector(".plan2 .insidePlan.chosen").classList.remove("chosen")
        plan.classList.add("chosen")
        finishUp() 
    })
})

    Switch.addEventListener("click",()=>{
        if(Switch.checked){
            plan1.style.opacity=0;
            plan2.style.display="flex"
            YearAndMonth[1].classList.add("active")
            YearAndMonth[0].classList.remove("active")
            document.querySelector(".plan .insidePlan.chosen").classList.remove("chosen")
            insidePlan2[0].classList.add("chosen")
            price[0].innerHTML="+$10/yr"
            price[1].innerHTML="+$20/yr"
            price[2].innerHTML="+$20/yr"
            recheckLinkedPrice[0].innerHTML="+$10/yr"
            recheckLinkedPrice[1].innerHTML="+$20/yr"
            recheckLinkedPrice[2].innerHTML="+$20/yr"
            billingChoice.innerHTML="(Yearly)"
            totalDuration.innerHTML="yr"
            
          }else{
            document.querySelector(".plan2 .insidePlan.chosen").classList.remove("chosen")
            plan1.style.opacity=1;
            plan2.style.display="none"
            YearAndMonth[0].classList.add("active")
            YearAndMonth[1].classList.remove("active")
            insidePlan1[0].classList.add("chosen")
            price[0].innerHTML="+$1/mo"
            price[1].innerHTML="+$2/mo"
            price[2].innerHTML="+$2/mo"
            recheckLinkedPrice[0].innerHTML="+$1/mo"
            recheckLinkedPrice[1].innerHTML="+$2/mo"
            recheckLinkedPrice[2].innerHTML="+$2/mo"
            billingChoice.innerHTML="(Monthly)"
            totalDuration.innerHTML="mo"

          }
        
    })

    thirdStepCheckInput.forEach(input=>input.addEventListener("click",()=>{
        if(input.checked){
           thirdStepCheck.forEach(checked=>{checked.addEventListener("click",()=>{checked.classList.add("checked");
          
       
        })} )
          
         
           
          }else{
            thirdStepCheck.forEach(checked=>{checked.addEventListener("click",()=>{checked.classList.remove("checked");
          
        })} )
          }
        
    }))


function finishUp(){
    recheck.children[0].children[0].innerHTML=document.querySelector(".insidePlan.chosen").children[1].innerHTML
    recheck.children[0].children[3].innerHTML=document.querySelector(".insidePlan.chosen").children[2].innerHTML;
    thirdStepCheck.forEach(checked=>checked.classList.remove("checked"));
    const toNumber4=parseInt(recheckPrice.innerHTML.replace(/[^0-9]/g,""))  
    let theTotal=toNumber4;
    let toNumber3=[];
    let toNumber2=[];
    let toNumber=[];

    Thefinalresult.innerHTML=toNumber4
    
    recheck.addEventListener("click",()=>{
        document.querySelector(".container1.fill").classList.remove("fill")
        container[1].classList.add("fill")
        index=1
       theTotal=0
        thirdStepCheckInput.forEach(checkbox=>checkbox.checked=false)
        linked.forEach(linked=>linked.style.display="none")
         toNumber3=[]
         toNumber2=[]
         toNumber=[]
         theTotal=[]
    })
    
      
    thirdStepCheckInput[0].addEventListener("change",()=>{
         toNumber=parseInt(price[0].innerHTML.replace(/[^0-9]/g,""))
        if(thirdStepCheckInput[0].checked){
            theTotal+=toNumber
        console.log(theTotal)
        }else{
            theTotal-=toNumber
        }
        Thefinalresult.innerHTML=`$${theTotal}/${totalDuration.innerHTML}`
    
        })

        thirdStepCheckInput[1].addEventListener("change",()=>{
           toNumber2=parseInt(price[1].innerHTML.replace(/[^0-9]/g,""))
        if(thirdStepCheckInput[1].checked){
            theTotal+=toNumber2
        } else{
            theTotal-=toNumber2
        }
        Thefinalresult.innerHTML=`$${theTotal}/${totalDuration.innerHTML}`
        })

        thirdStepCheckInput[2].addEventListener("change",()=>{
           toNumber3=parseInt(price[2].innerHTML.replace(/[^0-9]/g,""))
        if(thirdStepCheckInput[2].checked){
        theTotal+=toNumber3
        }else{
            theTotal-=toNumber3
        }
        Thefinalresult.innerHTML=`$${theTotal}/${totalDuration.innerHTML}`
        })
}

for(i=0;i<linked.length;i++){
    thirdStepCheckInput[i].addEventListener("change",()=>{
        if(thirdStepCheckInput[0].checked){
            linked[0].style.display="flex"
        }else{
            linked[0].style.display="none"
        }
         if (thirdStepCheckInput[1].checked){ 
            linked[1].style.display="flex"
        }else{
            linked[1].style.display="none"
        }
      if (thirdStepCheckInput[2].checked){  
            linked[2].style.display="flex"
        }else{
            linked[2].style.display="none"
        }
    })
}


