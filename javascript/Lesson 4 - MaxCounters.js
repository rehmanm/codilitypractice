function solution(N, A) {

	var result = new Array(N);
	for(let i = 0; i < N; i++) result[i] = 0;
	let lastMax = 0, pos = 0, max = 0;
	for (let j = 0; j < A.length; j++){
		if (A[j] <= N){
			pos = A[j] - 1;
			result[pos] = result[pos] < lastMax ? lastMax : result[pos];
			result[pos]++;
			max = result[pos] > max ? result[pos] : max;
			
		} else {
			lastMax = max;
			 
		}
	} 

	for(let i = 0; i < N; i++) 
	{
		if (result[i] < lastMax){
			result[i] = lastMax;
		}
	}
	return result;
}