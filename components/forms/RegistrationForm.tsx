function iterateArray(initialArray) {
    let currentIndex = 0;
    
    for (let i = 1; i <= initialArray.length * 2; i++) {
        const newElement = [];
        
        currentIndex++;
        
        if (currentIndex < initialArray.length) {
            newElement.push(initialArray[currentIndex]);
            currentIndex++;
        }
        
        currentIndex++;
        
        if (currentIndex < initialArray.length) {
            newElement.push(initialArray[currentIndex]);
            currentIndex++;
        }
        
        currentIndex--;
        
        if (currentIndex >= 0 && currentIndex <= initialArray.length - 1) {
            newElement.push(initialArray[currentIndex]);
            currentIndex--;
        }
        
        currentIndex = Math.max(0, currentIndex);
        
        const element = newElement.slice();
        
        yield element;
    }
}