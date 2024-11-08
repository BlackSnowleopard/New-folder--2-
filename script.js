// function change() {
//     document.getElementById("btn").style.color = "red";
//     // document.getElementById("text").innerHTML = "paragraph change";
//     let bet = document.getElementById("text").innerHTML;
//     // document.getElementById("input").value = bet;
//     let content = "";
//     document.getElementById("input").value = content;
//     content = content + "1";

// } 


// document.getElementById("btn1").addEventListener("click", function change() {
//     document.getElementById("btn").style.color = "red";
//     let bet = document.getElementById("text").innerHTML;
//     let content = "hghdgx";
//     document.getElementById("input").value = content;
//     content = content + "";
//     // document.getElementById("input").value = content;

// } );


// document.getElementById("btn2").addEventListener("click", function change() {
//     document.getElementById("btn2").style.color = "red";
//     let beta = document.getElementById("text").innerHTML;
//     let content = "hghdgx";
//     document.getElementById("input").value = content;
//     content = content + "";
//     // document.getElementById("input").value = content;

// } );




// function another() {
//     document.getElementById("btn").style.color = "red";
//     let bet = document.getElementById("text").innerHTML;
//     let content = "i";
//     document.getElementById("input").value = content;

// } 




// let button = document.getElementById("btn").addEventListener("click" );
// let character = document.getElementById("btn").value; 
// let content = "";

// if (button.onclick) {
    //     content = content + character;
    //     document.getElementById("input").value = content;
    // }
    





    
let content = "";

// Event listener for the #7 button
document.getElementById("btn5").addEventListener("click", function() {
    let character = document.getElementById("btn5").textContent;
    content += character;
    document.getElementById("input").value = content;  // Update the input's value
});

// Event listener for the #8 button
document.getElementById("btn6").addEventListener("click", function() {
    let character = document.getElementById("btn6").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the #9 button
document.getElementById("btn7").addEventListener("click", function() {
    let character = document.getElementById("btn7").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the DEL button
document.getElementById("btn2").addEventListener("click", function() {
    content = content.slice(0, -1); // Removes the last character
    document.getElementById("input").value = content;
});

// Event listener for the AC button
document.getElementById("btn1").addEventListener("click", function() {
    content = "";
    document.getElementById("input").value = content;
});





// Event listener for the #4 button
document.getElementById("btn9").addEventListener("click", function() {
    let character = document.getElementById("btn9").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the #5 button
document.getElementById("btn10").addEventListener("click", function() {
    let character = document.getElementById("btn10").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the #6 button
document.getElementById("btn11").addEventListener("click", function() {
    let character = document.getElementById("btn11").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the * button
document.getElementById("btn8").addEventListener("click", function() {
    let character = document.getElementById("btn8").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the / button
document.getElementById("btn4").addEventListener("click", function() {
    let character = document.getElementById("btn4").textContent;
    content += character;
    document.getElementById("input").value = content;
});





// Event listener for the #1 button
document.getElementById("btn13").addEventListener("click", function() {
    let character = document.getElementById("btn13").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the #2 button
document.getElementById("btn14").addEventListener("click", function() {
    let character = document.getElementById("btn14").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the #3 button
document.getElementById("btn15").addEventListener("click", function() {
    let character = document.getElementById("btn15").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the + button
document.getElementById("btn16").addEventListener("click", function() {
    let character = document.getElementById("btn16").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the - button
document.getElementById("btn12").addEventListener("click", function() {
    let character = document.getElementById("btn12").textContent;
    content += character;
    document.getElementById("input").value = content;
});





// Event listener for the #0 button
document.getElementById("btn18").addEventListener("click", function() {
    let character = document.getElementById("btn18").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the . button
document.getElementById("btn19").addEventListener("click", function() {
    let character = document.getElementById("btn19").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the #00 button
document.getElementById("btn17").addEventListener("click", function() {
    let character = document.getElementById("btn17").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// Event listener for the % button
document.getElementById("btn3").addEventListener("click", function() {
    let character = document.getElementById("btn3").textContent;
    content += character;
    document.getElementById("input").value = content;
});

// // Event listener for the = button
// // TRY 1
// document.getElementById("btn20").addEventListener("click", function() {
//     content = eval(content);
//     document.getElementById("input").value = content;
// });

// Event listener for the = button
//  TRY 2
document.getElementById("btn20").addEventListener("click", function() {
    // Check if content only contains numbers, +, -, *, /, or .
    if (/^[0-9+\-*/.()]+$/.test(content)) {
        try {
            content = eval(content); // Safely evaluate the expression
            document.getElementById("input").value = content;
        } catch (e) {
            document.getElementById("input").value = "Error"; // Display error for invalid expressions
        }
    } else {
        document.getElementById("input").value = "Invalid input"; // Show error for invalid characters
    }
});

// // Event listener for the = button    
// //  TRY 3
// document.getElementById("btn20").addEventListener("click", function() {
//     try {
//         // Function constructor to evaluate the expression safely
//         content =  new Function(`return ${content}`)();
//         document.getElementById("input").value = content;
//     } catch (e) {
//         document.getElementById("input").value = "Error";
//     }
// });



























