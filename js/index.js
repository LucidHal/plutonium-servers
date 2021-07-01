let game_modes = [];
let current_game = 't4mp';
let serverData = {};



function loadServers() {
	$.get('https://plutonium.pw/api/servers', (data) => {
		console.log(data);
		serverData = data;
	});
	console.log(serverData);
}


$(document).ready(function() {
	loadServers();
});



