var fs = require('fs');
var colors = require('colors');

//mamy stworzyć funkcję, która zapisze to do pliku
function saveToFile(){
	var dirPath = "./";
	fs.readdir(dirPath, function(err, files) {
		fs.writeFile('./filename.txt', 'Dane katalogu:\n'+files, function(err) {
			if (err) throw err;
			console.log('Pomyślnie zapisano nazwy do pliku!'.green);
		});
	});
}

saveToFile();