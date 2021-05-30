'use strict';

class Time {
  consoleTime() {
    let date_ob = new Date();
    let date = this.IntTwoChars(date_ob.getDate());
    let offset = this.getOffset(date_ob.getTimezoneOffset());

    let month = this.IntTwoChars(date_ob.getMonth() + 1);
    let year = date_ob.getFullYear();
    let hours = this.IntTwoChars(date_ob.getHours());
    let minutes = this.IntTwoChars(date_ob.getMinutes());
    let seconds = this.IntTwoChars(date_ob.getSeconds());
    let dateDisplay = ` ${year}-${month}-${date}T${hours}:${minutes}:${seconds}UTC${offset}`;
    return dateDisplay;
  }
  getOffset(offset) {
    let o = Math.abs(offset);
    return (
      (offset < 0 ? '+' : '-') +
      ('00' + Math.floor(o / 60)).slice(-2) +
      ':' +
      ('00' + (o % 60)).slice(-2)
    );
  }
  IntTwoChars(i) {
    return `0${i}`.slice(-2);
  }
}
module.exports = Time;
