import cloneDeep from "lodash.clonedeep";

export const initialize = (data, setData) => {
    let newGrid = cloneDeep(data);
    let newClone = cloneDeep(data);
    console.log('newClone:', newClone)
    
    addNumber(newGrid);
    addNumber(newGrid);
    console.table(newGrid)
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
            newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
            added = true; 
        }
        console.log('attempts:', attempts)
    }

}