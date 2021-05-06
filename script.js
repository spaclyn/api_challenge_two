const apiKey = "492325c5d5558ab9f3d2fe4a24fc6dc59308a3bb"
const resourceURL = "https://calendarific.com/api/v2/holidays"



fetch(resourceURL + "?api_key=" + apiKey + "&country=JP&year=2021")
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let holidays = json.response.holidays
        displayHolidays(holidays)
    })



const displayHolidays = holiday => {
    holiday.map(holidays => {
        const table = document.getElementById("holidayz")
        let tableRow = document.createElement('tr')
        let hName = document.createElement('th')
        let hType = document.createElement('td')
        let hDate = document.createElement('td')
        let hDetails = document.createElement('td')

        hName.innerText = holidays.name
        hType.innerText = holidays.type
        hDate.innerText = holidays.date.iso
        hDetails.innerText = holidays.description


        tableRow.appendChild(hName)
        tableRow.appendChild(hType)
        tableRow.appendChild(hDate)
        tableRow.appendChild(hDetails)

        table.appendChild(tableRow)
        
    })
}


