const url = 'http://localhost:8080';
 
export function haeKaikkiMatkat(callback) {
	fetch(url + "/matka/all", {
		method: "GET"
	})
	.then ((response) => response.json())
	.then ((responseJson) => {
		callback(responseJson, responseJson.status);
	})
	.catch(function(error)	{
		callback(null, 503);
	})
}

export function lisaaMatkaKantaan(matka, callback) {
	fetch(url + "/matka/add", {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(matka)
	})
	.then (function (response) {
		callback(response.status);
	})
	.catch(function(error)	{
		callback(503);
	})
}
