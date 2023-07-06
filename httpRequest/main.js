// send http request (AJAX)
let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.ir/posts");
request.addEventListener("load", getData);

function getData() {
  let response = request.response;

  //convert string to iterable object
  let data = JSON.parse(response);
  render(data);
}

request.send();

function render(List) {
  const template = List.map((post) => {
    // destruct
    const { id, userId, title, body } = post;
    return `
            <div class="post">

                <div> نویسنده : ${userId} / شماره پست: ${id}</div>
                <h3> ${title} </h3>
                <p> ${body} </h3> 
            </div>
        `;
  }).join("");
  let root = document.getElementById("root");
  root.innerHTML = template;
}
