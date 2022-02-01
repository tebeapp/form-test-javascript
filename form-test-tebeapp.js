async function tebeFxhr() {
  //© 2022 tebe.app form test
     let logfil = 1;
     let sotebe= false;
     let tes =(logt) => {
      return /^[a-zA-Z0-9]+$/ui.test(logt);
  }
  tes(gtebe)==true ? logfil++ : alert('Login cannot contain characters or spaces') 
  
     let textrf =(rutext) => {
      return /[а-я]/i.test(rutext);
  }
  textrf(stebe)==true ? alert('The password cannot contain Cyrillic characters') : logfil++;
    stebe.length < 8 ? alert('Password is very short') : logfil++;
    stebe===ftebe ? logfil++ : alert('Enter the password 2 times so that they match')
    
  
  if (logfil === 5){
    const data = {data_0:gtebe, data_1:stebe, data_2:ftebe};
    const response = await fetch("/form", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    })
    .then((response) => {
      return response.text();
        })
      .then((sotebe) => {
        console.log(sotebe)
        if(sotebe==='error-1'){
        console.log('error-1')
         
        }
        else{
          sotebe =='' ?  location.replace("../") : alert(sotebe)
        }
         
      });
  }
  }