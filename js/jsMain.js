const cityName = document.getElementById('city')
const tempMain = document.getElementsByClassName('temp')[0]
const tempMinMax = document.getElementsByClassName('tempmin_max')[0]
const wCon = document.getElementById('weathercon')

cityName.innerText = " "
tempMain.innerText = " "
tempMinMax.innerText = " "
wCon.innerHTML = " " 

let info = async (event) => {
    event.preventDefault()
    let city = document.getElementById('searchfield').value
    if (city === '') {
        cityName.innerText = 'Enter city name'
    }
    else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.KEY}`
            const data = await fetch(url)
            const objData = await data.json()
            const arrData = [objData]
            cityName.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            tempMain.innerText = `${arrData[0].main.temp}°C`
            tempMinMax.innerText = `Min ${arrData[0].main.temp_min}°C | Max ${arrData[0].main.temp_max}°C`

            tempStatus = arrData[0].weather[0].main 

            if (tempStatus == "Sunny") {
                wCon.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            }
            else if (tempStatus == "Clouds") {
                wCon.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if (tempStatus == "Rainy") {
                wCon.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else {
                wCon.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }
        }
        catch {
            cityName.innerHTML = "<h5>Please enter valid city name</h5>"
            tempMain.innerText = " "
            tempMinMax.innerText = " "
            wCon.innerHTML = " "
        }
    }
}

document.getElementById('searchbtn').addEventListener('click', info)