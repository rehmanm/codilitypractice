function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = (Y - X) / D;
    let rem = (Y - X) % D;
    if (rem != 0){
	result++;
    }
    
    return parseInt(result);
    
}