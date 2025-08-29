let hearcount = 0;
hearticons = document.getElementsByClassName("fa-heart");
heartDisplay = document.getElementById("heartdisplay");

for (let icon of hearticons) {
  icon.addEventListener("click", function () {
    hearcount++;
    heartDisplay.innerText = hearcount;
  });
}

let coin = 100;

const displaycoin = document.getElementById("displaycoin");
document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    if (e.target.tagName == "BUTTON") {
      button = e.target;
      serviceName =
        button.parentNode.parentNode.children[1].children[0].innerText;
      serviceNumber =
        button.parentNode.parentNode.children[2].children[0].innerText;

      if (coin < 20) {
        alert("not enough coin available to make a call");
        return;
      }

      alert(`${serviceName} ${serviceNumber} is calling`);
      coin -= 20;
      displaycoin.innerText = coin;
    }
  });
