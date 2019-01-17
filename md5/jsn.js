var temp = '{"quiz": [{"question": "Is java a pure object oriented language?", "hint": "java has primitive data types","options": ["Yes", "No"],"answer": "No"}, {"question": "Can you use a HTML file in CSS?", "hint": "we can use css file in html", "options": ["Yes", "No" ],"answer": "No"}, {"question": "JSON stands for JavaScript Object Notation?","hint": "No hint provided","options": ["Yes", "No"],"answer": "Yes"}]}';
var obj = JSON.parse(temp);
var points = 0;
var i = 0;
while(i < 3) {
    loader(i);
    i++;
 }

hidden = false;
function hint(i) {
     hidden = !hidden;
     if(hidden) {
         document.getElementById(i + "hint").style.visibility = "hidden";  
     } else {
     document.getElementById(i + "hint").style.visibility = "visible";
    }
}

function correct(i) {
    if(obj.quiz[i].answer == "Yes") {
        document.getElementById(i + "correct").style.visibility = "visible";
        points++;
    } else {
        document.getElementById(i + "wrong").style.visibility = "visible";
    }
}

function wrong(i) {
    if(obj.quiz[i].answer == "No") {
        document.getElementById(i + "correct").style.visibility = "visible";
        points++;
    } else {
        document.getElementById(i + "wrong").style.visibility = "visible";
    }
}

function loader(i) {
     document.getElementById("demo").innerHTML += '<div class = "row" style = "padding-left: 75px; font-size: 25px">' +
     obj.quiz[i].question +
     '<button type = "button" class= "btn-warning" onclick = hint('+ i+')>'+
     'Hint' + '</button>'+ '<div id = "'+ i +'hint" style = "visibility: hidden">' +
     '<div class = "question alert alert-warning alert-dismissable">' +
     obj.quiz[i].hint + '</div>' + '</div>' +
     '<input type = "radio" name = '+ i + '"ques" value = "Yes" onclick = correct(' + i +')>' + obj.quiz[i].options[0] +  '<br>' +
     '<input type = "radio" name = '+ i + '"ques" value = "No" onclick = wrong('+ i +')>' + obj.quiz[i].options[1] + '<br>' +
     '<div id = "' + i + 'correct" style = "visibility: hidden">' +
     '<div class = "question alert alert-success alert-dismissable">' +'correct answer'+
     '</div>' + '</div>' +
     '<div id = "' + i + 'wrong" style = "visibility: hidden">' +
     '<div class = "question alert alert-danger alert-dismissable">' +'wrong answer'+
     '</div>' + '</div>';
}
 
function result() {
    document.getElementById("res").innerHTML += '\"You got ' + points + ' points\"';
}

function refreshPage(){
    window.location.reload();
} 