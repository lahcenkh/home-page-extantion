// ----------------- image ipa ---------------------

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let image = data.urls.regular
        document.getElementById("containerEl").style.backgroundImage = `url(${image})`
    })


// ----------------- time ipa ---------------------

// function time() {
//         fetch("http://worldtimeapi.org/api/timezone/Africa/Casablanca")
//         .then(res => res.json())
//         .then(data => {
//             let date = data.datetime.slice(0,10)
//             let time = data.datetime.slice(11,16)
//             document.getElementById("time").textContent = time
//             document.getElementById("date").textContent = date
//         })
//         .catch(err => console.error(err))
//     }
    


function time_zone() {
    let date__ = new Date();
    let hours = date__.getHours()
    let min = date__.getMinutes()
    let year = date__.getFullYear()
    let day = date__.getDay()
    let month = date__.getMonth()

    hours = (hours < 10) ? "0" + hours : hours;
    min = (min < 10) ? "0" + min : min;
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    date_ = `${day}-${month}-${year}`
    time_ = `${hours}:${min}`
    document.getElementById("time").textContent = time_ 
    document.getElementById("date").textContent = date_
}

setInterval(time_zone, 1000)

// ----------------- quran ipa ---------------------


const paragraph = document.getElementById("qran")


function quran() {

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let randomNb = Math.floor(Math.random() * 10)
            paragraph.innerText = `${data[randomNb]["ayah"]}` 
        })
}

quran()

