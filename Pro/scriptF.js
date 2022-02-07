$("#check").change(function () {
  if ($("#check").is(":checked")) {
      $("#Button").prop("disabled", false);
  } else {
      $("#Button").prop("disabled", true);
  }
});

let data = document.querySelectorAll(".info");
const ajaxSend = (formData) => {
  fetch("https://formcarry.com/s/bn_UWDNzIyI", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  })
      .then(function (response) {
          alert("Сообщение отправлено");
          data.forEach((element) => { element.value = ""; });
          $("#check").prop("checked", false);
          $("#Button").prop("disabled", true);
          localStorage.clear();
      })
      .catch((error) => {alert(error);})
};

const forms = $("#Form");
for (let i = 0; i < forms.length; i++) {
  $("#Button").click(function (e) {
      e.preventDefault();

      let formData = new FormData(forms[i]);
      formData = Object.fromEntries(formData);

      ajaxSend(formData);
  });
}