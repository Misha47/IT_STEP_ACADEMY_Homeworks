const colSwitchFunc = (e) => {
    const rgbCol1 = Math.floor(Math.random() * 255)
    const rgbCol2 = Math.floor(Math.random() * 255)
    const rgbCol3 = Math.floor(Math.random() * 255)
    const colSwitcher = document.getElementById("colorSwitcher")
    colSwitcher.style.backgroundColor = `rgb(${rgbCol1}, ${rgbCol2}, ${rgbCol3})`
    colSwitcher.style.boxShadow = `0 0 30px 30px rgb(${255 - rgbCol1}, ${255 - rgbCol2}, ${255 - rgbCol3})`
}

const randomSizeFunc = () => {
    const randSize = Math.floor(Math.random() * 200)
    const colSwitcher = document.getElementById("colorSwitcher")
    colSwitcher.style.height = `${randSize}px`
}

const randomPositionFunc = () => {
    const randPositionLeft = Math.floor(Math.random() * 100)
    const randPositionTop = Math.floor(Math.random() * 100)
    const colSwitcher = document.getElementById("colorSwitcher")
    colSwitcher.style.left = `${randPositionLeft}%`
    colSwitcher.style.top = `${randPositionTop}%`
    colSwitcher.style.transform = `translate(-${randPositionLeft}%, -${randPositionTop}%)`
}

const createChaosFunc = () => {
    const rgbCol1 = Math.floor(Math.random() * 255)
    const rgbCol2 = Math.floor(Math.random() * 255)
    const rgbCol3 = Math.floor(Math.random() * 255)

    const randSize = Math.floor(Math.random() * 200)

    const randPositionLeft = Math.floor(Math.random() * 100)
    const randPositionTop = Math.floor(Math.random() * 100)

    const colSwitcher = document.getElementById("colorSwitcher")
    colSwitcher.style.backgroundColor = `rgb(${rgbCol1}, ${rgbCol2}, ${rgbCol3})`
    colSwitcher.style.boxShadow = `0 0 30px 30px rgb(${255 - rgbCol1}, ${255 - rgbCol2}, ${255 - rgbCol3})`
    colSwitcher.style.height = `${randSize}px`
    colSwitcher.style.left = `${randPositionLeft}%`
    colSwitcher.style.top = `${randPositionTop}%`
    colSwitcher.style.transform = `translate(-${randPositionLeft}%, -${randPositionTop}%)`    

}

const randColBtn = document.getElementById("randomColorButton")
randColBtn.setAttribute("onclick", "colSwitchFunc()")

const randSizeBtn = document.getElementById("randomSizeButton")
randSizeBtn.setAttribute("onclick", "randomSizeFunc()")

const randPosBtn = document.getElementById("randomPositionButton")
randPosBtn.setAttribute("onclick", "randomPositionFunc()")

const createChaosBtn = document.getElementById("createChaosButton")
createChaosBtn.setAttribute("onclick", "createChaosFunc()")

