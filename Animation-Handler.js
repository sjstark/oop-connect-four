export default class AnimationHandler {
  constructor(token, row) {
    this.token = token;
    this.row = row;
  }

  dropToPosition(token) {
    let percentageNum = token.style.bottom.split('%')[0];
    this.token.style.bottom = `${percentageNum-25}%`
  }

  animate(token) {
    //setInterval(decrementUntilPosition, 100)
    let intervalObj = setInterval(cb => {
      this.dropToPosition(token)

      let percentageNum = token.style.bottom.split('%')[0];

      if (percentageNum <= 0) {
        clearTimeout(intervalObj);
      }
    }, 25)
  }


}
