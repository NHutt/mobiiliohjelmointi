const url = 'http://localhost:8080';

export function haeKaikkiKappaleet(callback) {
	fetch(url + "/kappale/all", {
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

export function lisaaKappaleKantaan(kappale, callback) {
	fetch(url + "/kappale/add", {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(kappale)
	})
	.then (function (response) {
		callback(response.status);
	})
	.catch(function(error)	{
		callback(503);
	})
}
