function renderPlayer(parentElement) {
    const img = document.createElement("img")
    img.src = "./bulba.png"
    img.classList.add("player")

    parentElement.append(img)

    return img
}

const renderView = function (className, parentElement) {
    const element = document.createElement("div")
    element.classList.add(className)
    parentElement.append(element)

    return element
}

const generateMaze = function (parentElement) {
    for (const rowIndex in mazeModel) {
        const rowModel = mazeModel[rowIndex]
        const rowView = renderView("row", parentElement)

        for (const cellIndex in rowModel) {
            const cellModel = rowModel[cellIndex]
            const cellView = renderView("cell", rowView)

            cellView.dataset.row = rowIndex
            cellView.dataset.cell = cellIndex

            const className = legend[cellModel]
            if (className === "wall") {
                cellView.classList.add(className)
            } else {
                cellView.classList.add(className, "walkable")
            }
        }
    }
}