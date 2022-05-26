const legend = {
  "▓": "wall",
  "░": "floor",
  "S": "start",
  "F": "finish",
}

const mazeModel = [
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
  "▓░░░▓░░░░░▓░░░░░▓░░░▓",
  "▓░▓░▓░▓▓▓░▓▓▓▓▓░▓░▓▓▓",
  "▓░▓░▓░░▓░░░░░░▓░▓░░░▓",
  "▓░▓▓▓▓▓▓▓░▓░▓▓▓░▓░▓░▓",
  "▓░░░░░░░░░▓░░░░░▓░▓░▓",
  "▓░▓▓▓░▓▓▓▓▓░▓▓▓▓▓░▓░▓",
  "▓░▓░░░▓░░░▓░▓░░░░░▓░▓",
  "▓░▓▓▓▓▓░▓░▓░▓░▓▓▓░▓░F",
  "S░░░░░▓░▓░▓░▓░▓░▓░▓▓▓",
  "▓▓▓▓▓░▓░▓░▓░▓░▓░▓░▓░▓",
  "▓░░░░░▓░▓░▓░░░▓░▓░▓░▓",
  "▓░▓▓▓▓▓▓▓░▓▓▓▓▓░▓░▓░▓",
  "▓░░░░░░░▓░░░░░░░▓░░░▓",
  "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓"
]

const mazeView = document.querySelector("main")

for (let rowIndex = 0; rowIndex < mazeModel.length; rowIndex += 1) {
  const rowModel = mazeModel[rowIndex]
  const rowView = document.createElement("div")
  rowView.classList.add("row")
  rowView.dataset.row = rowIndex

  mazeView.append(rowView)
  
  for (let cellIndex = 0; cellIndex < rowModel.length; cellIndex += 1) {
    const cellModel = rowModel[cellIndex]
    const cellView = document.createElement("div")
    cellView.classList.add("cell")
    cellView.dataset.row = rowIndex
    cellView.dataset.cell = cellIndex
    
    rowView.append(cellView)
    
    console.log({ cellModel, rowIndex, cellIndex })
  }
}
