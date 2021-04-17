import React from 'react';
import Piece from './piece';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRows: 3,
      rowStyles: ["top", "middle-row", "bottom"],
      colStyles: ["left", "middle-col", "right"],
      pieces: [],
      blankIdx: '2, 2'
      // borders: ["bottom middle-col", "middle-row right"]
    }
    this.slidePiece = this.slidePiece.bind(this);
    this.isSlideable = this.isSlideable.bind(this);
  }

  slidePiece(pos, idx) {
    if (!this.isSlideable(idx)) {
      return
    }
    this.setState({ blankIdx: idx });
    // set blanks's position to posString
    // replace pos in borders array with blanks prev spot
    // BUT depending on blank's position, there can be 2 to 4 bordering pieces
  }

  isSlideable(idx) {
    let [x, y] = idx.split(", ");
    let [blankX, blankY] = this.state.blankIdx.split(", ")
    if ((Math.abs(blankX - x) <= 1 && Math.abs(blankY - y) === 0) ||
      (Math.abs(blankX - x) === 0 && Math.abs(blankY - y) <= 1)) {
      return true;
    }
    return false;
  }

  // getRandomInt() {
  //   return Math.floor(Math.random() * this.state.numRows);
  // }

  render() {
    let isBlank = false;
    let pieces = [];
    let x = 1;
    for (let i = 0; i < this.state.rowStyles.length; i++) {
      let row = this.state.rowStyles[i];
      for (let j = 0; j < this.state.colStyles.length; j++) {
        let col = this.state.colStyles[j];
        let pos = row.concat(" ").concat(col).concat(" square");
        let idx = `${i}, ${j}`
        console.log(idx)
        if (idx === this.state.blankIdx) {
          isBlank = true
        }
        pieces.push(<Piece clickHandler={this.slidePiece} position={pos} idx={idx} key={idx} num={x} blank={isBlank} />)
        isBlank = false;
        x++;
      }
    }
    return (
      <div className="App">
        {pieces}
      </div>
    )
  }
}

export default App;
