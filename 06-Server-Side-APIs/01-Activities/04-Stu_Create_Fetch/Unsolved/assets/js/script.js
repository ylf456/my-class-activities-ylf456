var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');
var getAllRepoChildList = document.querySelectorAll('ul')
var grabAllLiElement = document.querySelectorAll('li')
//getApi function is called when the fetchButton is clicked

function getApi() {
  
  console.log(repoList)
  console.log(grabAllLiElement)
  console.log(repoList.children)
  // Insert the API url to get a list of your repos

  var requestUrl = 'https://api.github.com/users/ylf456/repos';
  
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
       // clear existing list 
     if ((repoList.children) !== null){getAllRepoChildList.forEach((item) =>{item.remove()})}
      //looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var listItem = document.createElement('li');

        //Set the text of the list element to the JSON response's .html_url property
        listItem.textContent = data[i].html_url;

        //Append the li element to the id associated with the ul element.
        repoList.appendChild(listItem);
        
      }
    });

    if ((repoList.children) !== null){getAllRepoChildList.forEach((item) =>{item.remove()})}
}

fetchButton.addEventListener('click', getApi);

