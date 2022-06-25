export class Validation{
    constructor(){
      this.name=document.getElementById("name");
      this.email=document.getElementById("email");
      this.phone=document.getElementById("phone");
      this.age=document.getElementById("age");
      this.password=document.getElementById("password");
      this.RePassword=document.getElementById("RePassword");
      this.submitBtn=document.getElementById("submit");
      this.UserInput=document.getElementsByClassName("inputform");
      this.getFormData();
      this.submitBtn.addEventListener("click",this.addAccount.bind(this))
      }

    
   
      
     getFormData(){
        let accountsList;
        if(localStorage.getItem("User ID")!=null){
            accountsList=JSON.parse(localStorage.getItem("Account ID"));
            console.log(accountsList);
          }
          else{
              accountsList=[];
          }
          
         return accountsList
     
     }
     validateEmail(){
        var regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.com$/;
        if(regex.test(this.email.value))
        {
             $('#alertEmail').fadeOut(500);
            return true;
        }
        else{
            $('#alertEmail').fadeIn(500);
            
            return false;
        }   
    }
    
      validateName(){
        var regex=/^[a-zA-Z\s]+$/;
        if(regex.test(this.name.value))
        {   console.log("This Name is VALID"); 
           $('#alertName').fadeOut(500);
            return true;
        }
        else{
            $('#alertName').fadeIn(500);
            console.log("This Name is INVALID");
            return false;
        }   
    }
   validatePassword(){
        var regex=/^[a-zA-Z0-9\$]{8,}$/;
        if(regex.test(this.password.value))
        {   console.log("This Password is VALID");  
            $('#alertPassword').fadeOut(500);  
            return true;
        }
        else{
            console.log("This Password is INVALID");
            $('#alertPassword').fadeIn(500);  
            return false;
        }   
    }
     validateRePassword(){
        var regex=/^[a-zA-Z0-9\$]{8,}$/;
        if(regex.test(this.RePassword.value))
        {     $('#alertRePassword').fadeOut(500);
            if(this.RePassword.value==this.password.value){
            console.log("This Password is VALID");  
            $('#alertRePasswordInvalid').fadeOut(500);
             return true;
            }
            else{
                $('#alertRePasswordInvalid').fadeIn(500);
                return false;
            }

           
        }
        else{
            console.log("This Password is INVALID");
            $('#alertRePassword').fadeIn(500);
            return false;
        }   
    }
    validateAge(){
        var regex=/([1-7][0-9]|80)$/;
        if(regex.test(this.age.value))
        {   console.log("This Password is VALID");   
            $('#alertAge').fadeOut(500); 
            return true;
        }
        else{
            console.log("This Password is INVALID");
            $('#alertAge').fadeIn(500); 
            return false;
        }   
    }
    validatePhone(){
        var regex=/^00201[01245][0-9]{8}$/;
        if(regex.test(this.phone.value))
        {   console.log("This Password is VALID");   
        $('#alertPhone').fadeOut(500);  
            return true;
        }
        else{
            console.log("This Password is INVALID");
            $('#alertPhone').fadeIn(500);  
            return false;
        }   
    }
    addAccount(){
        let account={
          name:this.name.value,
          email:this.email.value,
          phone: this.phone.value,
          age:this.age.value,
          password:this.password.value,
          Repassword:this.RePassword.value,
        }
        let accountsList=this.getFormData();
        this.validateName();
        this.validateEmail();
        this.validatePhone();
        this.validateAge();
        this.validatePassword();
        this.validateRePassword();
        if(this.validateEmail() && this.validateName() && this.validatePassword() && this.validatePhone() && this.validateAge() && this.validateRePassword()){
           $('#alertSuccessfulMessage').fadeIn(1000,()=>{
            $('#alertSuccessfulMessage').fadeOut(1000);
        })
           $('#alertEmptyMessage').fadeOut(500); 
           accountsList.push(account);
            console.log(accountsList);
            this.setLocalStorage(accountsList);
        }
    //    if([...this.userAnswerElem].filter(el=>el.checked).length==1)
        // if(accountsList.length==0){
        //     $('#alertEmptyMessage').fadeOut(500);
        // }
    }
     setLocalStorage(list){
        localStorage.setItem("User ID",JSON.stringify(list));
    }
}