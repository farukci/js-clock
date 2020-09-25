setInterval(() => {
    let hours = document.querySelector("#hh");
    let minutes = document.querySelector("#mm");
    let seconds = document.querySelector("#ss");
    let ampm = document.querySelector("#ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";

    h = (h<10) ? "0"+h : h;
    m = (m<10) ? "0"+m : m;
    s = (s<10) ? "0"+s : s;

    hours.innerHTML = h+":";
    minutes.innerHTML = m+":";
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    if(h<12){
        h = h - 12;
        let am = "PM"
    }


})