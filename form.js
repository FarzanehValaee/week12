function handleSubmit(e){
          e.preventDefault();
          const formElement= e.target;
          const user_information ={}
          for(input of formElement){
                    if(input.name==="gender"){
                              user_information[input.name]=document.querySelector('input[name="gender"]:checked').value;       
                    }else{
                              user_information[input.id] = input.value;
                    }
          }
          console.log(user_information)
          document.getElementById("table").style.display="block";
          let new_cell       
          var table = document.getElementById("table");
          var row = table.insertRow(-1);
          for(let index in user_information){
              new_cell=row.insertCell(index);
              new_cell.innerHTML=user_information[index];
              new_cell.style.padding="1px";
              new_cell.style.border="1px solid black";
      
          }
          return false;
      }
      
      
      
      
      