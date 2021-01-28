// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Creates table on the website
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

var button = d3.select("#filter-btn");
var dateInput = d3.select("#datetime");


function inputChecker(){
    d3.event.preventDefault();
    var updatedTable = tableData.filter(sighting => sighting.datetime === dateInput.property("value"));
    displayTable(updatedTable)
}

button.on("click", inputChecker);
