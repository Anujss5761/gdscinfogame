
let qu1 = prompt("Enter answer here")
if( qu1 == "Yellow"){
    let n1 = document.getElementById("ans1")
        n1.style.color = "green";
        n1.textContent = " Congratulations, You got the right answer, Answer: Yellow";

    let q3 = document.getElementById("pcd1");
    q3.style.width = "80%";
    q3.style.height = "50px";

    setTimeout(() => {
        let m1 = document.getElementById("p1");
            m1.style.color = "blue"
    }, 2000);
        
        
}

else if (qu1 == "Red") {
    let n1 = document.getElementById("ans1")
    n1.style.color = "green";
    n1.textContent = " Congratulations, You got the right answer, Answer: Red";

        let q3 = document.getElementById("pcd2");
            q3.style.width = "80%";
            q3.style.height = "50px";

    setTimeout(() => {
        let m2 = document.getElementById("p11");
            m2.style.color = "blue"
    }, 2000);
} 
else if (qu1 == "India") {
    let n1 = document.getElementById("ans1")
    n1.style.color = "green";
    n1.textContent = " Congratulations, You got the right answer, Answer: India";

        let q3 = document.getElementById("pcd3");
        q3.style.width = "80%";
        q3.style.height = "50px";

    setTimeout(() => {
        let m3 = document.getElementById("p12");
            m3.style.color = "blue"
    }, 2000);
} 
else if (qu1 == 6) {
    let n1 = document.getElementById("ans1")
    n1.style.color = "green";
    n1.textContent = " Congratulations, You got the right answer, Answer: 6";

        let q3 = document.getElementById("pcd4");
        q3.style.width = "80%";
        q3.style.height = "50px";

    setTimeout(() => {
        let m4 = document.getElementById("p13");
            m4.style.color = "blue"
    }, 2000);
} 
else if (qu1 == 5) {
    let n1 = document.getElementById("ans1")
        n1.style.color = "green";
        n1.textContent = " Congratulations, You won, Answer: 5";
        let q3 = document.getElementById("pcd5");
        q3.style.width = "80%";
        q3.style.height = "50px";

    setTimeout(() => {
        let m5 = document.getElementById("p14");
            m5.style.color = "green"
    }, 2000);
} 

else{
    let q1 = document.getElementById("ans1")
    q1.style.color = "red";
        q1.textContent = "Wrong answer ";
        p1.style.width = "0px"     
}













