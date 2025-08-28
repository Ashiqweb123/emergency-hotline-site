function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const hrtBtns = document.getElementsByClassName("hrt-btn");

for (let hrtbtn of hrtBtns) {
  hrtbtn.addEventListener("click", function () {
    // const hrtCount = getElement("count-heart");
    // const hrtCountNumber = Number(hrtCount.innerText);
    // const totalCount = hrtCountNumber + 1;
    // console.log(hrtCount);
    const quantity = getElement("count-heart").innerText;
    const quantityNumber = Number(quantity);
    console.log(quantityNumber);
    const currenQuantity = quantityNumber + 1;
    getElement("count-heart").innerText = currenQuantity;
  });
}

const callBtns = document.getElementsByClassName("call-btn");
for (let callbtn of callBtns) {
  callbtn.addEventListener("click", function () {
    const title = callbtn.parentNode.parentNode.children[0].innerText;
    const phnNumber = callbtn.parentNode.parentNode.children[2].innerText;
    alert(`${title} ${phnNumber}`);

    const coinId = getElement("count-coin");
    const coinIdText = coinId.innerText;
    const coinIdNum = Number(coinIdText);
    const coinQuantity = coinIdNum - 20;
    coinId.innerText = coinQuantity;
    if (coinQuantity === 0) {
      callbtn.disabled = true;
      callbtn.style.backgroundColor = "gray";
      alert("You dont have enough coin... sorry 😒");
    } else {
      callbtn.disabled = false;
    }

    const historyContainer = getElement("history-container-id");
    const newCart = document.createElement("div");
    if (coinQuantity <= 0) {
      return newCart;
    } else {
      const now = new Date();
      const time = now.toLocaleTimeString();

      newCart.innerHTML = `
    
               <div class="space-y-3 m-3 p-3 flex justify-between items-center  bg-green-100 rounded-xl ">
                <div class="content-history py-3 ">
                  <h2 class="card-title">${title}</h2>
                  <p>${phnNumber}</p>
                </div>
                <div> <h2> ${time}</h2> </div>
              </div>
            
    
    
    
    `;
      historyContainer.append(newCart);
    }
  });
}

const copyBtns = document.getElementsByClassName("copy-class");

for (let copybtn of copyBtns) {
  copybtn.addEventListener("click", function () {
    const phnNumber = copybtn.parentNode.parentNode.children[2].innerText;
    navigator.clipboard.writeText(phnNumber);
    alert(`you number is copied ${phnNumber}`);

    const copyId = getElement("count-copy");
    const copyIdText = copyId.innerText;
    const copyIdNumber = Number(copyIdText);

    const totalcopy = copyIdNumber + 1;
    copyId.innerText = totalcopy;
  });
}

const clrBtn = document
  .getElementById("clear-content")
  .addEventListener("click", function () {
    const historyContainer = getElement("history-container-id");
    historyContainer.innerHTML = "";
  });
