const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        let amOrPm = (hours >= 12)? "PM": "AM";

        hours = (hours % 12);

        if(hours == 0){
            hours = 12;
        }

        hours = formatZeroes(hours);
        mins = formatZeroes(mins);
        secs = formatZeroes(secs);

        return `${hours}:${mins}:${secs} ${amOrPm} `;
    }
    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time: time;
    }
}