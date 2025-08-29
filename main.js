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
      const button = e.target;
       if (!button.innerText.includes("Call")) return;
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

      const now = new Date().toLocaleTimeString()
      const div = document.createElement("div")
      div.innerHTML = `
                    <div
              class="flex justify-between items-center bg-gray-100 p-4 mt-2 rounded text-xs"
            >
              <div>
                <h1 class="font-bold">${serviceName}</h1>
                <p>${serviceNumber}</p>
              </div>
              <div>${now}</div>
            </div>

      
      `
      document.getElementById("historyContainer").append(div)

    }
  });








// clear button 
  document
          .getElementById("clearbtn")
          .addEventListener("click",function(e){
            document.getElementById("historyContainer").innerHTML=""
          })



//copy button 
copycount = 2 
copydisplay = document.getElementById('copy-btn')
document.getElementById("card-container").addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON" && e.target.innerText.includes("Copy")) {
    const button = e.target.closest("button");
    const serviceNumber =
      button.parentNode.parentNode.children[2].children[0].innerText;
    navigator.clipboard.writeText(serviceNumber);

    copycount++
    copydisplay.innerHTML=`${copycount} copy`
    
  }
});