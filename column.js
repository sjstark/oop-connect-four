export default class Column {
    constructor(){
        this.tokensArray = [null, null, null, null, null, null];
        this.full = false;
    }

    add(playerNumber){
        for (let i = this.tokensArray.length - 1; i >= 0; i--){
            if (this.tokensArray[i] === null){
                this.tokensArray[i] = playerNumber;
                break;
            }
        }
    }

    getTokenAt(rowIndex){
        return this.tokensArray[rowIndex];
    }


}