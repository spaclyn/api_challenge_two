const apiKey = "492325c5d5558ab9f3d2fe4a24fc6dc59308a3bb"
const resourceURL = "https://calendarific.com/api/v2/holidays"
let holidayLog = document.getElementById("holidayz")




fetch(resourceURL + "?api_key=" + apiKey + "&country=JP&year=2021")
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let holidays = json.response.holidays
        displayHolidays(holidays)
    })



const displayHolidays = holidays => {

    //for(let holiday of Object.keys(holidays)){

    let tableRow = document.createElement('tr')
    let hName = document.createElement('th')
    let hDate = document.createElement('td')
    let hType = document.createElement('td')
    let hDetails = document.createElement('td')

    hName.innerText = holidays.date
    hDate.innerText = holidays.date
    hType.innerText = holidays.type
    hDetails.innerText = holidays.description


    tableRow.appendChild(hName)
    tableRow.appendChild(hDate)
    tableRow.appendChild(hType)
    tableRow.appendChild(hDetails)

    return tableRow
}

function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i < 2; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode("cell in row " + i + ", column " + j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}

