let myPromise = new Promise((resolve, reject) => {
    let Promise=false
    setTimeout(() => {
      data = "Some payload";
  
  if (Promise) {
    resolve(Promise);
  } else {
    reject();
  }},2000)})
  myPromise.then(Promise=> {
    console.log('Received: ' + Promise);
  }).catch(() => {
    console.log("There was an error");
  });