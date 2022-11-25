import cloneDeep from "lodash.clonedeep";
import { swipeDown, swipeLeft, swipeRight, swipeUp } from "./move";
import {checkIfGameOver} from "./move";

export const getColors = (num) => {
    switch (num) {

      case 2:
        return "#EBDCD0";
      case 4:
        return "#E9DBBA";
      case 8:
        return "#E9A067";
      case 16:
        return "#F08151";
      case 32:
        return "#F2654F";
      case 64:
        return "#F1462C";
      case 128:
        return "#E7C65E";
      case 256:
        return "#E8C350";
      case 512:
        return "#E8BE40";
      case 1024:
        return "#E8BB31";
      case 2048:
        return "#E7B723";
      default:
        return "#C2B3A3";
    }
  };

export const initialize = (data, setData) => {
    let newGrid = cloneDeep(data);
    let newClone = cloneDeep(data);
    
    addNumber(newGrid);
    addNumber(newGrid);
    setData(newGrid);
}


export const addNumber = (newGrid, data) => {
    let added = false;
    let gridFull = false;
    let attempts = 0;
    while (!added){
        if (gridFull){
            break
        }
        
        let rand1 = ~~(Math.random() * 4)
        let rand2 = ~~(Math.random() * 4)
        if (newGrid[rand1][rand2] === 0 ) {
          newGrid[rand1][rand2] = Math.random() > 0.3 ? 2 : 4;
          added = true; 
        }
        attempts++;
        if (attempts > 10) {
          gridFull = true;
          let gameOver = checkIfGameOver(data);
          if (gameOver) {
            alert("game over");
            // setGameOver(true);
          }
          // setGameOver(true);
        }
    }

}

//  // Check Gameover
// export const checkIfGameOver = (data) => {
//  console.log('CHECK')
 
//   // let original = cloneDeep(data);
//   let checker = swipeLeft(data, true);

//   if (JSON.stringify(data) !== JSON.stringify(checker)) {
//     return false;
//   }

//   let checker2 = swipeDown(true);

//   if (JSON.stringify(data) !== JSON.stringify(checker2)) {
//     return false;
//   }

//   let checker3 = swipeRight(true);

//   if (JSON.stringify(data) !== JSON.stringify(checker3)) {
//     return false;
//   }

//   let checker4 = swipeUp(true);

//   if (JSON.stringify(data) !== JSON.stringify(checker4)) {
//     return false;
//   }

//   return true;
// };