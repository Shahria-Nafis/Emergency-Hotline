function getElement(id) {
  const elemnent = document.getElementById(id);
  return elemnent;
}

//sidberContainer (renamed to sidebarCartContainer in HTML)
const sidberContainer = getElement("sidebarCartContainer");

//cardMethod heart-call-callHistory-copyBtn #multiple task inside in one method=========================
getElement("card-container").addEventListener("click", function (e) {
  //heart click and heat increment
  if (e.target.className.includes("fa-heart")) {
    const heartCountDisply = getElement("heartCountDisplay");
    const heartCountDisplyconvert = parseInt(heartCountDisply.innerText);
    heartCountDisply.innerText = heartCountDisplyconvert + 1;
  }
  //call button alert and show the cart info. decrement coin
  if (e.target.className.includes("callBtn")) {
    //coin
    const coin = getElement("coinDisplay");
    const coinNumber = parseInt(coin.innerText);
    //current date get
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    if (coinNumber > 0) {
      const callBtn = e.target;
      const cardTitle = callBtn.parentNode.parentNode.children[1].innerText;
      const contactCategory =
        callBtn.parentNode.parentNode.children[2].innerText;
      const contactNumber =
        callBtn.parentNode.parentNode.children[3].innerText;

      alert(
        `${cardTitle} \n 📞 calling ${contactCategory} ${contactNumber}...`
      );
