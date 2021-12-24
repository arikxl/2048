import cloneDeep from "lodash.clonedeep";

import { addNumber } from "./game";


export const swipeLeft = (board,  setBoard) => {
    console.log("swipe left");
    let oldGrid = board;
    let newArray = cloneDeep(board);

    for (let i = 0; i < 4; i++) {
      let b = newArray[i];
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast++;
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast];
          b[fast] = 0;
          fast++;
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast++;
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            b[fast] = 0;
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
      addNumber(newArray);
    }
    if (board) {
      return newArray;
    } else {
      setBoard(newArray);
    }
};

export const swipeRight = () => {
    alert('Swipe Right')
}

export const swipeUp = () => {
    alert('Swipe up')
}
export const swipeDown = () => {
    alert('Swipe down')
}