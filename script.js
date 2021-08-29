const btn = document.getElementById ("Btn");




const getInputs = ()=> {
  document.getElementById("danger").innerHTML="";
  document.getElementById("profitOrLoss").innerHTML="";
  document.getElementById("inputOne").innerHTML="";
  document.getElementById("inputTwo").innerHTML="";
  document.getElementById("inputThree").innerHTML="";
  document.getElementById("perOneShare1").innerHTML="";
  let invest = document.getElementById ("Invested").value;
  let noOf = document.getElementById("numberOf").value;
  let CurrVal = document.getElementById("currentPrice").value;
  let investedAt = invest/noOf;
  let status = CurrVal-investedAt;

  const displayValues =()=>{
    document.getElementById("inputOne").innerHTML=`<span>invested amount :<span/> <span>${invest}<span/>`;
    document.getElementById("inputTwo").innerHTML=`<span>No. of shares:<span/> <span>${noOf}<span/>`;
    document.getElementById("inputThree").innerHTML=`<span>Current value per share:<span/> <span>${CurrVal}<span/>`;
    document.getElementById("perOneShare1").innerHTML=`<span>value per share :<span/><span>${investedAt}<span/>`;

  }
  switch(true){
    case (status>0):{
      displayValues();
      document.getElementById("profitOrLoss").innerHTML=`<span class="profit">profit of:  <i class="fas fa-sort-up"></i> ${status}<span/>`;
      document.getElementById("container").style.backgroundColor="rgba(54,163,0,0.3)";
      // document.getElementById("container").style.color="#ffff";

      let fiftyPer = investedAt/2;
      if(status > fiftyPer){
        console.log("if");
        document.getElementById("danger").innerHTML=`<span class="profit">Your profit is more than 50% better to sell here<span/>`;
      };
    }
    break;
    case (status < 0 ):{
      displayValues();
      document.getElementById("profitOrLoss").innerHTML=`<span class="loss">loss of:  <i class="fas fa-sort-down"></i>${Math.abs(status)}<span/>`;
      document.getElementById("container").style.backgroundColor="rgba(239,83,80,0.3)";
      
      let fiftyPer = investedAt/2;
      let x=Math.abs(status);
      console.log(x);
      if(x > fiftyPer){
        console.log("if");
        document.getElementById("danger").innerHTML=`<span class="loss">your loss is more than 50% <span/>`;
      };
    }break;



    // switch(true){
    //   case (x>0):{
    //     console.log(`positive`);
    //   }
    //   break;
    //   case (x < 0 ):{
    //     console.log(`negative`);
    //     let half = y/2;
        
    //     if(x < fiftyPer){
    //       document.getElementById("danger").innerHTML="loss is grater than than 50% ";
          
    //     };else{
    //       console.log("else part");
    //     }
    //   }break;
  }

  
}