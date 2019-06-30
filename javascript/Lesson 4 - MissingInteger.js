function solution(A){

	var cache = {};
	let count = 1, missing = -1;
	for(let i = 0; i<A.length; i++){

		if (A[i] > 0 ) {
			cache[A[i]] = true;
			count++;
		}

	}

	for (let i = 1; i<= count; i++){
		if (!cache[i]){
			missing = i;
			break;
		}
	}
	return missing == -1? count+1 : missing;

}