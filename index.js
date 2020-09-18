
var username = 'shihm714'
var api_token = 'cc7e07737ef87c38ba764146951a558df3de07aa'
var pythonanywhere_host = "www.pythonanywhere.com"

var api_base = "https://" + pythonanywhere_host + "/api/v0/user/" + username + "/"

var filename = 'stars.mp3'

var url = api_base + "files/path/home/" + username + "/mysite/" 

function loadlist(url) {
  return fetch('https://www.pythonanywhere.com/api/v0/user/shihm714/cpu/', {
    //body: JSON.stringify(data), // must match 'Content-Type' header
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, same-origin, *omit
    headers: { "Authorization": "Token " + api_token },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, cors, *same-origin
    //redirect: 'follow', // manual, *follow, error
    //referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}

function test(){
  console.log(loadlist(url))
}