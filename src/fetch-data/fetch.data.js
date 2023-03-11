const getData =(Prompt, number, squareSize)=>{


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "prompt": Prompt,
  "n": number,
  "Squaresize": squareSize
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return fetch("http://localhost:8000/api/generateimage", requestOptions)
  .then(response => response.text())
  .then(result => result)
  .catch(error => console.log('error', error));

}

export default getData