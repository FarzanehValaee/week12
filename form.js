function handleSubmit(e){
          e.preventDefault();
          const formElement= e.target;
          const user_information ={}
          const formData = new FormData(formElement);
          formElement.querySelectorAll(".is-invalid").forEach(element => {
                    element.classList.remove("is-invalid");
          });
          formElement.querySelectorAll(".invalid-feedback").forEach(el => {
                    el.remove();
          })
          // //firstname validate
          // const is_firstNmaeValid = validationFirstName(formData.get("exampleInputFirstName1"));
          // if(!is_firstNmaeValid){
          //           document.getElementById("exampleInputFirstName1").classList.add("is-invalid");
          // }
          // const is_lastNameValid = validationLastName(formData.get("exampleInputLastName1"));
          // if(!is_lastNameValid){
          //           document.getElementById("exampleInputLastName1").classList.add("is-invalid");
          // }
          // const is_emailValid = validationEmail(formData.get("exampleInputEmail1"));
          // if(!is_emailValid){
          //           document.getElementById("exampleInputEmail1").classList.add("is-invalid");
          // }
          
          // for(input of formElement){
          //           if(input.name==="gender"){
          //                     user_information[input.name]=document.querySelector('input[name="gender"]:checked').value;       
          //           }else{
          //                     user_information[input.id] = input.value;
          //           }
          // }
          // console.log(user_information)
          // document.getElementById("table").style.display="block";
          // let new_cell       
          // var table = document.getElementById("table");
          // var row = table.insertRow(-1);
          // for(let index in user_information){
          //     new_cell=row.insertCell(index);
          //     new_cell.innerHTML=user_information[index];
          //     new_cell.style.padding="1px";
          //     new_cell.style.border="1px solid black";
          // }
          try {
                    validationFirstName(formData.get("exampleInputFirstName1"))
          } catch (error) {
                    const inputElem = document.getElementById("exampleInputFirstName1")
                    inputElem.classList.add("is-invalid")
                    const errorElement = document.createElement("div");
                    errorElement.className = "invalid-feedback"
                    errorElement.innerText = error
                    inputElem.parentElement.append(errorElement)
          }
          try {
                    validationLastName(formData.get("exampleInputLastName1"))
          } catch (error) {
                    const inputElem = document.getElementById("exampleInputLastName1")
                    inputElem.classList.add("is-invalid")
                    const errorElement = document.createElement("div");
                    errorElement.className = "invalid-feedback"
                    errorElement.innerText = error
                    inputElem.parentElement.append(errorElement)
          }
          try {
                    validationEmail(formData.get("exampleInputEmail1"))
          } catch (error) {
                    const inputElem = document.getElementById("exampleInputEmail1")
                    inputElem.classList.add("is-invalid")
                    const errorElement = document.createElement("div");
                    errorElement.className = "invalid-feedback"
                    errorElement.innerText = error
                    inputElem.parentElement.append(errorElement)
          }
          
}
function validationFirstName(value){
          if((!value)||(value.length>20)){
                    throw "firstname required"
          }
          return true
}
function validationLastName(value){
          if(!value){
                    throw "Lastname required"
          }
          return true;
}
function validationEmail(value){
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
          {
                    return true;
          }
          throw "invalid email"
}
      
      
      
      
      