var day = $('#currentDay');
var button = $('div[class*="saveBtn"]');
var confirmSave = $('.container');
var textBlock = $('textarea');







function dayStamp() {
    var date = dayjs().day(0);
    var formatDate = dayjs(date.$d).format('dddd, MMMM DD');
    day.text(formatDate);
}
dayStamp();

button.on('click', function(){
    var input = $('#input1').val()
    localStorage.setItem("input1", input);
    var message = $('<p>Saved to local Storage</p>');
    confirmSave.prepend(message);
});

var loadedResponse = localStorage.getItem("input1");
console.log(loadedResponse);
textBlock.text(loadedResponse);


