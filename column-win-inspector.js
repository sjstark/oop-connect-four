export default class ColumnWinInspector {
    constructor(column){
        this.column = column;

    }

    inspect(){
        let count = 1;
        let previousToken = this.column.getTokenAt(6);
        for (let i = 5; i >= 0; i--){
            let currentToken = this.column.getTokenAt(i);
            if (currentToken === previousToken){
                count++;
                if (count >= 4){
                    return previousToken;
                }
            } else {
                previousToken = currentToken;
                count = 1;

            }
        
        }
        return 0;
    }
}