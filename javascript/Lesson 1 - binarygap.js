function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    
    let binaryN = N.toString(2);
    console.log(binaryN);
    let max = 0, tempMax = 0;
    let isEnclosed = false;

	for(let i = 0; i<binaryN.length; i++){
	    if (binaryN[i] == '0'){
		tempMax++;
	    } else {
		if (tempMax > max && isEnclosed){
		    max = tempMax;
                }
                tempMax = 0;
                isEnclosed = true;
            }
	}
    return max;
}