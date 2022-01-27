const url =fetch("https://api.sampleapis.com/coffee/hot")
function getCoffeeDetail(id) {
         url.then((response)=>{
          const mypromise = new Promise(function(resolve,reject))
                    if (!response.ok) {
                      throw new Error('Network response was not OK');
                    }
                    return response.blob();
                  })
                  .then(myBlob => {
                    myImage.src = URL.createObjectURL(myBlob);
                  })
                  mypromise.catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                  
         })
}
getCoffeeDetail(6).then(coffeeDetail => {
          if (coffeeDetail.title === "Doppio") {
          alert("Done")
          } else {
          alert("There is some problems")
          }
})