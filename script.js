function calculateAge(){
    const birthdateinput=document.getElementById("birthdate").value;
    const birthDate = new Date(birthdateinput);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDay() - birthDate.getDay();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
      }
     

      document.getElementById("result").innerHTML= `you are a ${age} years old.`;
    




}