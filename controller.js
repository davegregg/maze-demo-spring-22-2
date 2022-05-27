const getCoords = function () {
    const currentCell = playerView.parentElement
    const x = Number(currentCell.dataset.cell)
    const y = Number(currentCell.dataset.row)

    return [x, y]
}

const move = function (x, y) {
    const selector = `.walkable[data-cell='${x}'][data-row='${y}']`
    const nextCell = document.querySelector(selector)
    if (nextCell === null) {
        return
    }

    nextCell.append(playerView)
}

const movements = {
    ArrowRight: function () {
        const [x, y] = getCoords()
        move(x + 1, y + 0)
    },

    ArrowLeft: function () {
        const [x, y] = getCoords()
        move(x - 1, y + 0)
    },

    ArrowDown: function () {
        const [x, y] = getCoords()
        move(x + 0, y + 1)
    },

    ArrowUp: function () {
        const [x, y] = getCoords()
        move(x + 0, y - 1)
    },
}

document.addEventListener("keydown", (event) => {
    if (!event.key.includes("Arrow")) {
        return
    }

    const move = movements[event.key]
    move()  // We could use the optional chaining operator here.
})