// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/{owner}/{repo}/issues';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    for (var i = 0; i < data.length; i++){
    console.log(data[i]);}

    // TODO: Loop through the response
    // TODO: Console log each issue's URL and each user's login
  });