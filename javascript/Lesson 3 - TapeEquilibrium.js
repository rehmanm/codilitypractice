function solution(A){

	let sum = A.reduce((acc, val) => acc + val);
	let min = Number.MAX_SAFE_INTEGER, forwardSum = 0;
	for (let i = 1; i < A.length; i++){
		forwardSum += A[i - 1];	
		sum -= A[i - 1];
		let diff = Math.abs(sum - forwardSum);
		console.log(diff);
		if(diff < min){
			min = diff;
		}
	}
	
	return min;
}