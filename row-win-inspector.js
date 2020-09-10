export default class RowWinInspector {
  constructor(columns) {
    this.columns = columns
  }

  inspect() {
    for (let row = 0; row < 6; row++) {
      let token1 = this.columns[0].getTokenAt(row);
      let token2 = this.columns[1].getTokenAt(row);
      let token3 = this.columns[2].getTokenAt(row);
      let token4 = this.columns[3].getTokenAt(row);

      if ((token1 !== null) &&
          (token1 === token2) &&
          (token1 === token3) &&
          (token1 === token4)) {
            return token1;
          }
    }

    return 0;
  }
}
