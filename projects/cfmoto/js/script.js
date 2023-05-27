const anwanserOpen = document.querySelectorAll('.open-anwanser')

function defaulSetting() {
    anwanserOpen.forEach((el) => {
        const parent = el.parentElement
        const preParent = parent.parentElement
        preParent.children[1].classList.add('hidden')
        el.classList.remove('open-anwanser-active')
        preParent.classList.remove('anwanser-border-active')
    })
}

anwanserOpen.forEach((elem) => {
    elem.addEventListener('click', function() {
        const parent = this.parentElement
        const preParent = parent.parentElement
        const p = preParent.children[1]
        defaulSetting()
        this.classList.add('open-anwanser-active')
        preParent.classList.add('anwanser-border-active')
        p.classList.remove('hidden')
    })
})

const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
let num = +document.querySelector('.result-counter').innerHTML

plus.addEventListener('click', function() {
    if(num < 6) {
        num++
    }
    document.querySelector('.result-counter').innerHTML = num
})
minus.addEventListener('click', function() {
    if(num > 1) {
        num--
    }
    document.querySelector('.result-counter').innerHTML = num
})

const close = document.querySelectorAll('.close')
const moreBtn = document.querySelectorAll('.route-buttons-wrapper .btn-transparent')
const bookableBtn = document.querySelectorAll('.bookable-open')

moreBtn.forEach(btn => {
    btn.addEventListener('click', function() {
       document.querySelector('.absolute-bg').classList.remove('none')
    })
})
bookableBtn.forEach(bookable => {
    bookable.addEventListener('click', function() {
        document.querySelector('.our-route-bookable-bg').classList.remove('none')
    })
})
close.forEach(e => {
    e.addEventListener('click', function() {
        const parent = this.parentElement.parentElement
        parent.classList.add('none')
    })
})