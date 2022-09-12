
// creating a element 

var heading1 = document.createElement("h3");
var text = document.createTextNode(" this is the heading 3");
heading1.appendChild(text);

var mydiv = document.getElementById("my-div");
mydiv.appendChild(heading1);



var heading2 = document.getElementsByTagName("h1")[1];
mydiv.removeChild(heading2);


var heading3 = document.createElement("h4");
var text1 = document.createTextNode("School");
heading3.appendChild(text1);

var heading4 =document.getElementsByTagName("h1")[0];

mydiv.insertBefore(heading3,heading4)