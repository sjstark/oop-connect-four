export default class DiagonalWinInspector{
    constructor(columns) {
        this.columns = columns;
    }

    inspect(){
        for (let row = 0; row <= 2; row++){
            let token1 = this.columns[0].getTokenAt(row);
            let token2 = this.columns[1].getTokenAt(row + 1);
            let token3 = this.columns[2].getTokenAt(row + 2);
            let token4 = this.columns[3].getTokenAt(row + 3);

            if ((token1 !== null) &&
                    (token1 === token2) &&
                    (token1 === token3) &&
                    (token1 === token4)) {
                return token1;
            };

            token1 = this.columns[0].getTokenAt(row + 3);
            token2 = this.columns[1].getTokenAt(row + 2);
            token3 = this.columns[2].getTokenAt(row + 1);
            token4 = this.columns[3].getTokenAt(row);

            if ((token1 !== null) &&
                    (token1 === token2) &&
                    (token1 === token3) &&
                    (token1 === token4)) {
                return token1;
            };
        }
    }

}
