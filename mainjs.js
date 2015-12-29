$(document).ready(function(){

var d = new Date();//get date
var dateTostring = d.toUTCString();//convert date object to string
var dia = dateTostring.slice(0, 3);//get three char day
var shift = "Lunch"; // shift by the fault 

if (d.getHours() > 15){// change shift to dinner after 4:00 pm 

    shift = "Dinner"

}
var pictureToshow = "images/" + dia + shift + ".jpg";// picture to show depend on the day and time


document.getElementsByTagName("img")[0].setAttribute("src", pictureToshow);

console.log(pictureToshow)
console.log(dateTostring)

function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

refreshAt(16, 0, 0);
});