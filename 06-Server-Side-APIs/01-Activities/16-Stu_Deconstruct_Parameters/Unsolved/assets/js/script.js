fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'  //fetch the data from this link
)
  .then(function (response) {
    return response.json();  //Response: json() method
    // The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
  })
  .then(function (data) {
    console.log(data);  // log the json array on the console.
  });
// Parameter explanation.


//https://api.github.com/repos/nodejs/node/issues    this is the root url

//  ?  is the stating point of parameter
// & is the "and"

//per_page=10,   per_page parameter specifies the number of results per page and defaults to 50,  in this case specifies 10 results

// state = open , data-state

//sort=created,  sorting logic = sort by creation time (date created)

//direction=desc,  sort-direction = descending?