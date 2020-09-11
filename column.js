export default class Column {
    constructor(){
        this.tokensArray = [null, null, null, null, null, null];
                        // [ null, 1, 2, 1, 1, 2]
        this.isFull = false;
    }

    add(playerNumber){
        let addIndex;
        for (let i = this.tokensArray.length - 1; i >= 0; i--){
            if (this.tokensArray[i] === null){
                this.tokensArray[i] = playerNumber;
                addIndex = i;
                break;
            }
        }

        if (this.tokensArray[0] !== null) {
            this.isFull = true;
        }

        return addIndex;


    }

    getTokenAt(rowIndex){
        return this.tokensArray[rowIndex];
    }

    restore(restoreVals) {
        this.tokensArray = restoreVals;

        if (this.tokensArray[0] !== null) {
            this.isFull = true;
        }
    }


}
