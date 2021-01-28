// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function displayTable(data){
    tbody.text("");
    data.forEach(function (info) {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value]) => {
        var table = row.append("td").text(value);
        });
    })
}

displayTable(tableData);
