export default class Column {
    constructor(){
        this.tokensArray = [null, null, null, null, null, null];
                        // [ null, 1, 2, 1, 1, 2]
        this.isFull = false;
    }

    add(playerNumber){
        for (let i = this.tokensArray.length - 1; i >= 0; i--){
            if (this.tokensArray[i] === null){
                this.tokensArray[i] = playerNumber;
                break;
            }
        }

        if (this.tokensArray[0] !== null) {
            this.isFull = true;
        }


    }

    getTokenAt(rowIndex){
        return this.tokensArray[rowIndex];
    }


}
