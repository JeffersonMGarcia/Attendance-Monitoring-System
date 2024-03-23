$(function (e) {
  const uname = $("#uname");
  const pass = $("#password");

  $(".login-button").click(function (e) {
    $.ajax({
      type: "POST",
      url: "/login",
      contentType: "application/json",
      data: JSON.stringify({
        uname: uname.val(),
        password: pass.val(),
      }),
      success: (res) => {
    
        if (res.operation) {
          if (res.msg == "intern") {
            location.href("/intern/internView");
          } else {
            location.href("/admin/myDashboard");
          }
        } else {
          alert(res.msg);
        }
      },
    });
  });
});
