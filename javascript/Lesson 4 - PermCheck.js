function solution(A){

	let cache = {}, result = 1;
	let len = A.length;
	A.forEach((v, i) => {
		cache[v] = true;
	});

	for(let i = 1; i<=len; i++){
		if (!cache[i]){
			result = 0;
			break;
		}
	}
	
	return result;
}