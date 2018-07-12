#!/usr/bin/env node

const outputFile = 'LLC_BI__EncryptedFields.txt';
const objDir = './src/objects';
const fs = require('fs');
const xml2js = require('xml2js');

fs.writeFile(outputFile, 'Encrypted Fields\r\n\r\n', err => {
	if (err) console.log(err);
	console.log('EncryptedFields.txt created');
});

fs.readdir(objDir, (err, files) => {
	files.forEach(fileName => {
		findEncryptedFields(fileName);
	});
});

function findEncryptedFields(fileName) {
	const fileLocation = objDir + '/' + fileName;
	let parser = new xml2js.Parser();
	fs.readFile(fileLocation, 'utf8', (err, data) => {
		parser.parseString(data);
		let fields = parser.resultObject.CustomObject.fields || [];
		let encryptedFields = [];

		fields.forEach(field => {
			if (field.encrypted && field.encrypted[0] === 'true') {
				encryptedFields.push(field.fullName);
			}
		});
		if (encryptedFields.length) {
			writeToFile(fileName, encryptedFields);
		}
	});
}

function writeToFile(fileName, encryptedFields) {
	let objName = fileName.substr(0, fileName.indexOf('.'));
	let toWrite = objName + '\r\n';

	encryptedFields.forEach(field => {
		toWrite += '\t' + field + '\r\n';
	});
	fs.appendFile(outputFile, toWrite, err => {
		if(err) console.log(err);
	});
}


