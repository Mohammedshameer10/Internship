function checkAge() {
    let userName = document.getElementById("name").value;
    let userAge = document.getElementById("age").value;

    if (userName == "" || userAge == "") {
        alert("Please enter both your name and age.");
        return;
    }
    let status=""
    if (userAge>=18){
       status="Adult"
    }
    else{
       status="Minor"
    }
    document.getElementById("userInfo").textContent = `User Name: ${userName}, Age: ${userAge}`;
    document.getElementById("ageStatus").textContent= `Status: ${status}`;
    
}

