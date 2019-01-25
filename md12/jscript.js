var secretKey = "vipul";
var comments = [];
function check() {
    var text = "";
    var obj = { 'comment': "", 'name': ""};
    x = document.getElementById("nme").value;
    y = document.getElementById("pw").value;
    z = document.getElementById("cmt").value;
    if(x.length == 0) {
        text = "Name is required";
        document.getElementById("usrform").reset();
    } else if (y != secretKey){
        text = "please enter the correct password";
        document.getElementById("usrform").reset();
    } else {
        obj['comment'] = z;
        obj['name'] = x;
        comments.push(obj);
        document.getElementById("usrform").reset();
    }
    document.getElementById("demo").innerHTML = text;
    if(text == "") {
    document.getElementById("box").innerHTML = data();
    }
}

function data() {
    document.getElementById("fnl").style.visibility = "visible";
    var i;
    var printThis = "";
    for(i = comments.length-1; i >= 0; --i) {
        printThis += comments[i].comment.fontsize(6) + '<br>' +comments[i].name.fontsize(4) + '<br>';
    }
    return printThis;
}