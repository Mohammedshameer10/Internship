
        function showDetails(event) {
            event.preventDefault(); 

            let name = document.getElementById("name").value;
            let regNo = document.getElementById("regNo").value;
            let department = document.getElementById("department").value;
            let domain = document.getElementById("domain").value;
            let email = document.getElementById("email").value;

            let result = `
                <h2>Student Details</h2>
                <p>Name: ${name}</p>
                <p>Reg No: ${regNo}</p>
                <p>Department: ${department}</p>
                <p>Domain: ${domain}</p>
                <p>Email: ${email}</p>`;

            document.getElementById("output").innerHTML=result;
        }
        
function mark(event){
    event.preventDefault();
     let tamil=parseInt(document.getElementById("mark1").value);
     let english=parseInt(document.getElementById("mark2").value);
     let maths=parseInt(document.getElementById("mark3").value);
     let science=parseInt(document.getElementById("mark4").value);
     let social=parseInt(document.getElementById("mark5").value);

     let add=tamil+english+maths+science+social;
     let grade=''
     let percentage=add/5

     if (add>=400 && add<=500){
        grade="A"
     }
     else if(add>=300 && add<400){
        grade="B"
     }
     else if(add>=200 && add<300){
        grade="C"
     }
     else{
        grade="F"
     }
     let total=`<p>Tamil=${tamil}
                <p>English=${english}
                <p>Maths=${maths}
                <p>Science=${science}
                <p>Social Science=${social}
                <p>Total Marks=${add}/500
                <P>Your Grade is "${grade}
                <p>Your Perceentage ${percentage}%"
                `;

     document.getElementById("res").innerHTML=total;
    
    }
