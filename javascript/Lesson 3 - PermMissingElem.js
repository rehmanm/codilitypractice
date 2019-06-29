function solution(A){
	let result = A.length + 1, sum = 0;
	A.forEach((v, i) => {
		result += (i + 1);
		sum += v;
	});
	return result - sum;
}