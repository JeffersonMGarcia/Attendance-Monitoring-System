$(function (e) {
  function updateDateTime() {
    const currentDateAndTime = new Date();
    const date = currentDateAndTime.toDateString();
    const time = currentDateAndTime.toLocaleTimeString();

    const hours = currentDateAndTime.getHours();
    const mins = currentDateAndTime.getMinutes();

    console.log(hours, mins);
    if (hours === 14 && mins === 41) {
      
    }

    $("#currentDate").html(date);
    $(".temp").html(time);
  }

  // Update date and time initially
  updateDateTime();

  // Update date and time every second
  setInterval(updateDateTime, 1000);
  // const afternoon = 2

  $("#timein").click(function (e) {});
});
