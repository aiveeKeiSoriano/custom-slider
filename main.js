const inner = document.querySelector('.inner')
const circle = document.querySelector('.circle')
const value = document.querySelector('.value')
const slider = document.querySelector('.slider')


function mouseDown(e) {
    document.addEventListener('mousemove', mouseMove)
    inner.style.backgroundColor = 'rgba(27, 153, 75)'
    circle.style.backgroundColor = 'rgba(27, 153, 75)'
    x = e.clientX
}


function mouseMove(e) {
    max = slider.clientWidth
    inner.style.width = Math.min(inner.clientWidth + (e.clientX - x), max) + 'px'
    value.innerText = Math.max(Math.ceil(Math.min(inner.clientWidth + (e.clientX - x), max) / max * 100), 0)
    x = e.clientX
}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove)
    inner.style.backgroundColor = 'rgb(81, 207, 129)'
    circle.style.backgroundColor = 'rgb(81, 207, 129)'
}


circle.addEventListener('mousedown', mouseDown)
document.addEventListener('mouseup', mouseUp)