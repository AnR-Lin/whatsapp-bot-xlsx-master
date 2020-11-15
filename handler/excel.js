var XLSX = require('xlsx');
var workbook = XLSX.readFile('./data/messages.xlsx');
var sheet_name_list = workbook.SheetNames;
const myObj = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
const data = {
    pesan: myObj
}

module.exports = data