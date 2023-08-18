class timeBlock {
    constructor(hours, todo) {
        this.hour = hours;
        this.todo = todo;
    }
}

window.onload = function() {
    const currentTime = getCurrentTime();
    const time = moment();

    showCurrentDay(time);
    showTime(time);

    document.querySelector('.cal')
    .addEventListener('click', function(event) {
        containerClicked(event, currentTime);
    });
    setTimeText(currentTime);
};

function getCurrentTime() {
    const currentTime = localStorage.getItem('timeObj');
    return currentTime ? JSON.parse(currentTime) : [];
}

function showCurrentDay(time) {
    document.getElementById('today')
    .textContent = time.format('dddd, MMMM Do');
}
