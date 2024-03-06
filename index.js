document.getElementById("buttonForForm").onclick = function () {
  lastName = document.getElementById("lastName").value;
  firstName = document.getElementById("firstName").value;
  Email =
    firstName + lastName + Math.ceil(Math.random() * 10000) + 1 + "@gmail.com";
  console.log(Email);
};

document.getElementById("buttonForCheckBox").onclick = function () {
  invitedByMe = document.getElementById("invitedByMe");
  invitedByKatie = document.getElementById("invitedByKatie");
  insta = document.getElementById("insta");
  unlikelyRandom = document.getElementById("unlikelyRandom");

  if (invitedByMe.checked == true) {
  }
};
