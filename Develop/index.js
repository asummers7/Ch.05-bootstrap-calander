var day = $('#currentDay');
var button1 = $('#button1');
var button2 = $('#button2');
var button3 = $('#button3');
var button4 = $('#button4');
var button5 = $('#button5');
var button6 = $('#button6');
var button7 = $('#button7');
var button8 = $('#button8');
var button9 = $('#button9');
var confirmSave = $('.container');
var textBlock = $('textarea');
var $form1 = $('#input-9');
var $form2 = $('#input-10');
var $form3 = $('#input-11');
var $form4 = $('#input-12');
var $form5 = $('#input-13');
var $form6 = $('#input-14');
var $form7 = $('#input-15');
var $form8 = $('#input-16');
var $form9 = $('#input-17');
var currentTime = dayjs().hour();


function dayStamp() {
    var date = dayjs();
    var formatDate = dayjs(date.$d).format('dddd, MMMM DD');
    day.text(formatDate);
}
dayStamp();

button1.on('click', function(){
    var input = $form1.val()
    localStorage.setItem("form1", input);
    var message = $('<p>Saved to local Storage ☑️</p>');
    message.addClass('text-center');
    confirmSave.prepend(message)
    setTimeout(() => {
        message.remove(); 
    },500);
});
button2.on('click', function(){
    var input = $form2.val()
    localStorage.setItem("form2", input);
    var message = $('<p>Saved to local Storage ☑️</p>');
    message.addClass('text-center');
    confirmSave.prepend(message)
    setTimeout(() => {
        message.remove(); 
    },500);
});
button3.on('click', function(){
    var input = $form3.val()
    localStorage.setItem("form3", input);
    var message = $('<p>Saved to local Storage ☑️</p>');
    message.addClass('text-center');
    confirmSave.prepend(message)
    setTimeout(() => {
        message.remove(); 
    },500);
});
button4.on('click', function(){
    var input = $form4.val()
    localStorage.setItem("form4", input);
    var message = $('<p>Saved to local Storage ☑️</p>');
    message.addClass('text-center');
    confirmSave.prepend(message)
    setTimeout(() => {
        message.remove(); 
    },500);
});
button5.on('click', function(){
    var input = $form5.val()
    localStorage.setItem("form5", input);
    var message = $('<p>Saved to local Storage ☑️</p>');
    message.addClass('text-center');
    confirmSave.prepend(message)
    setTimeout(() => {
        message.remove(); 
    },500);
});
button6.on('click', function(){
    var input = $form6.val()
    localStorage.setItem("form6", input);
    var message = $('<p>Saved to local Storage ☑️</p>');
    message.addClass('text-center');
    confirmSave.prepend(message)
    setTimeout(() => {
        message.remove(); 
    },500);
});
button7.on('click', function(){
    var input = $form7.val()
    localStorage.setItem("form7", input);
    var message = $('<p>Saved to local Storage ☑️</p>');
    message.addClass('text-center');
    confirmSave.prepend(message)
    setTimeout(() => {
        message.remove(); 
    },500);
});
button8.on('click', function(){
    var input = $form8.val()
    localStorage.setItem("form8", input);
    var message = $('<p>Saved to local Storage ☑️</p>');
    message.addClass('text-center');
    confirmSave.prepend(message)
    setTimeout(() => {
        message.remove(); 
    },500);
});
button9.on('click', function(){
    var input = $form9.val()
    localStorage.setItem("form9", input);
    var message = $('<p>Saved to local Storage ☑️</p>');
    message.addClass('text-center');
    confirmSave.prepend(message)
    setTimeout(() => {
        message.remove(); 
    },500);
});

var response1 = localStorage.getItem("form1");
var response2 = localStorage.getItem("form2");
var response3 = localStorage.getItem("form3");
var response4 = localStorage.getItem("form4");
var response5 = localStorage.getItem("form5");
var response6 = localStorage.getItem("form6");
var response7 = localStorage.getItem("form7");
var response8 = localStorage.getItem("form8");
var response9 = localStorage.getItem("form9");
$form1.text(response1);
$form2.text(response2);
$form3.text(response3);
$form4.text(response4);
$form5.text(response5);
$form6.text(response6);
$form7.text(response7);
$form8.text(response8);
$form9.text(response9);

textBlock.each(function(){
    var blockTime = $(this).attr('id').split('-')[1]
    if (blockTime<currentTime){
        $(this).addClass('past');
    } else if (blockTime==currentTime) {
        $(this).addClass('present');
    } else {
        $(this).addClass('future');
    }
})