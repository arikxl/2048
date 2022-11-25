import cloneDeep from "lodash.clonedeep";
import { addNumber } from "./service";


export const handleKeyDown = (event, data, setData) => {
    // if (gameOver) {
    //     return;
    // }
    switch (event.keyCode) {
        case 38:
            swipeUp(data, setData);
            break;
        case 40:
            swipeDown(data, setData);
            break;
        case 37:
            swipeLeft(data, setData);
            break;
        case 39:
            swipeRight(data, setData);
            break;
        default:
            break;
    }

    let gameOver = checkIfGameOver(data, setData);
    if (gameOver) {
        // setGameOver(true);
        alert('test')
    }
};

// export const swipeLeft = (dummy) => {
export const swipeLeft = ( data, setData, dummy ) => {
        let oldGrid = data;
        let newArray = cloneDeep(data);
        
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
            addNumber(newArray, data);
        }
        if (dummy ) {
              return newArray;
            } else {
              setData(newArray);
            }
        // setData(newArray);
};

// export const swipeRight = (dummy) => {
export const swipeRight = (data, setData, dummy) => {
    let oldData = data;
    let newArray = cloneDeep(data);

    for (let i = 3; i >= 0; i--) {
      let b = newArray[i];
      let slow = b.length - 1;
      let fast = slow - 1;
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1;
          slow--;
          continue;
        }
        if (b[slow] === 0 && b[fast] === 0) {
          fast--;
        } else if (b[slow] === 0 && b[fast] !== 0) {
          b[slow] = b[fast];
          b[fast] = 0;
          fast--;
        } else if (b[slow] !== 0 && b[fast] === 0) {
          fast--;
        } else if (b[slow] !== 0 && b[fast] !== 0) {
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            b[fast] = 0;
            fast = slow - 1;
            slow--;
          } else {
            slow--;
            fast = slow - 1;
          }
        }
      }
    }
    if (JSON.stringify(newArray) !== JSON.stringify(oldData)) {
      addNumber(newArray, data);
    }
    if (dummy) {
      return newArray;
    } else {
      setData(newArray);
    }
    // setData(newArray);
  };

// export const swipeDown = (dummy) => {
export const swipeDown = (data, setData, dummy) => {
    let b = cloneDeep(data);
    let oldData = JSON.parse(JSON.stringify(data));
    for (let i = 3; i >= 0; i--) {
      let slow = b.length - 1;
      let fast = slow - 1;
      while (slow > 0) {
        if (fast === -1) {
          fast = slow - 1;
          slow--;
          continue;
        }
        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast--;
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i];
          b[fast][i] = 0;
          fast--;
        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast--;
        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i];
            b[fast][i] = 0;
            fast = slow - 1;
            slow--;
          } else {
            slow--;
            fast = slow - 1;
          }
        }
      }
    }
    if (JSON.stringify(b) !== JSON.stringify(oldData)) {
      addNumber(b, data);
    }
    if (dummy) {
      return b;
    } else {
      setData(b);
    }
    // setData(b);
  };

// export  const swipeUp = (dummy) => {
export  const swipeUp = (data, setData, dummy) => {
    let b = cloneDeep(data);
    let oldData = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < 4; i++) {
      let slow = 0;
      let fast = 1;
      while (slow < 4) {
        if (fast === 4) {
          fast = slow + 1;
          slow++;
          continue;
        }
        if (b[slow][i] === 0 && b[fast][i] === 0) {
          fast++;
        } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
          b[slow][i] = b[fast][i];
          b[fast][i] = 0;
          fast++;
        } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
          fast++;
        } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
          if (b[slow][i] === b[fast][i]) {
            b[slow][i] = b[slow][i] + b[fast][i];
            b[fast][i] = 0;
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldData) !== JSON.stringify(b)) {
      addNumber(b, data);
    }
    if (dummy) {
      return b;
    } else {
      setData(b);
    }
    // setData(b);
  };



    // Check Gameover
  export  const checkIfGameOver = (data, setData) => {
      console.log("CHECKING GAME OVER");
      // let original = cloneDeep(data);
      let dummy =true;

      let checker = swipeLeft(data, setData, dummy);
 
      if (JSON.stringify(data) !== JSON.stringify(checker)) {
        return false;
      } 
  
      let checker2 = swipeDown(data, setData,true);
      if (JSON.stringify(data) !== JSON.stringify(checker2)) {
        return false;
      }
  
      let checker3 = swipeRight(data, setData,true);
      if (JSON.stringify(data) !== JSON.stringify(checker3)) {
        return false;
      }
  
      let checker4 = swipeUp(data, setData,true);
      if (JSON.stringify(data) !== JSON.stringify(checker4)) {
        return false;
      }
  
      return true;
    };