import cloneDeep from "lodash.clonedeep";

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


export const addNumber = (newGrid) => {
    let added = false;
    let gridFull = false;
    let attempts = 0;
    while (!added){
        if (gridFull){
            break
        }
        
        let rand1 = ~~(Math.random() * 4)
        let rand2 = ~~(Math.random() * 4)
        attempts++;
        if (newGrid[rand1][rand2] === 0 ) {
            newGrid[rand1][rand2] = Math.random() > 0.3 ? 2 : 4;
            added = true; 
        }
    }

}

