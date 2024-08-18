let timeout;
function debouncePopulate() {
  clearTimeout(timeout);
  timeout = setTimeout(function() { populateDiv() }, 1000);
}


async function populateDiv() {
  let a = parseInt(document.getElementById("firstNum").value);
  let b = parseInt(document.getElementById("secondNum").value);
  let response = await fetch("https://sum-server.100xDevs.com/sum?a=" + a + "&b=" + b)
  let sum = await response.text();
  console.log(response)
  document.getElementById("finalSum").innerHTML = sum;
}