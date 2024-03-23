
$(function (e){

    function updateDateTime() {
        const currentDateAndTime = new Date();
        const date = currentDateAndTime.toDateString();
        const time = currentDateAndTime.toLocaleTimeString();

        $("#currentDate").html(date);
        $(".temp").html(time);
    }

    // Update date and time initially
    updateDateTime();

    // Update date and time every second
    setInterval(updateDateTime, 1000);
    
    $("#timein").click(function(e){
       console.log(updateDateTime)
    })

})