
function handleSubmit(e){
          e.preventDefult();
          const formElement= e.target;
          const user_information ={}
          for(input of formElement){
                    if(input.name==="gender"){
                              user_information[input.name]=document.querySelector('input[name="gender"]:checked').value;       
                    }else{
                              user_information[input.name] = input.value;
                    }
          }
          console.log(user_information)
}




// document.getElementById("myForm").reset();
// function addUser(){
          
// }
// const form  = document.getElementById('myForm');
// form.addEventListener('submit', (event) => {
//     // handle the form data
//     event.preventDefault()
//     var radios = document.getElementsByName('gender');
//     let currentGender
//     let userNumber=0
//     let user_information=[]
//     form.submit();
//     const fname = form.elements['exampleInputFirstName1'];
//     const lname = form.elements['exampleInputLastName1'];
//     const email = form.elements['exampleInputEmail1'];
// //     const password = form.elements['exampleInputPassword1'];
//     const nationality = form.elements['exampleFormControlSelect1']
//     for (var i = 0, length = radios.length; i < length; i++) {
//           if (radios[i].checked) {
//            currentGender = radios[i].value;
//           }
//     }

//     user_information.push(fname.value + lname.value);
//     user_information.push(email.value);
//     user_information.push(nationality.value);
//     user_information.push(currentGender);
//     userNumber++;
//     console.log(user_information) 
// });





