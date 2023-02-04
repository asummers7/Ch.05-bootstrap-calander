var day = $('#currentDay');
var time = $('.timeblock');
var timeBlock = $('.hour');
console.log(timeBlock);
console.log(time.text())

function dayStamp() {
    var date = dayjs().day(0);
    var formatDate = dayjs(date.$d).format('dddd, MMMM DD');
    day.text(formatDate);
}
dayStamp();
console.log(dayjs().hour());
$.each(time, function(){
    if (time.text()==dayjs().hour()) {
        timeBlock.addClass('present');
    }
})
