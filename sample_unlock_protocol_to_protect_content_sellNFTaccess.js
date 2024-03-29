window.addEventListener("unlockProtocol.status", function (event) {
  // Here we proceed to hide all .unlock-content elements
  document.querySelector(".unlock-content").style.display = "none";
  // Here we proceed to show only the relevant element
  document
    .querySelectorAll(`.unlock-content.${event.detail.state}`)
    .forEach((element) => {
      element.style.display = "block";
    });
});

window.addEventListener("unlockProtocol.authenticated", function (event) {
  // event.detail.addresss includes the address of the current user, when known
});

window.addEventListener("unlockProtocol.transactionSent", function (event) {
  // event.detail.hash includes the hash of the transaction sent
});
