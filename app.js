/*
 * Send a request to a remote website that has dog pictures
 * and request a random picture.
 *
 * We then set the picture URL sent back to us as the
 * image in the HTML image tag.
 */
function fetchDogImage_version_1() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.status !== "success") {
        return alert(data.message);
      }

      $("#dog_picture").attr("src", data.message);
    });
}

$("#action_button").click(fetchDogImage_version_1);

// =====================
// VERSION 2
// =====================

// Another way to write the function code
// using modern JavaScript
function fetchDogImage_version_2() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then(({ status, message }) => {
      if (status !== "success") {
        return alert(message);
      }

      $("#dog_picture").attr("src", message);
    });
}

// $("#action_button").click(fetchDogImage_version_2);
