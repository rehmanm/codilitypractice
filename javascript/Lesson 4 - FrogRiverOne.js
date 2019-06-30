function solution(X, A){

	let result = 0, objectCount=0, allgood=false;
	let steps = {};

	for (let i = 0; i< A.length; i++){
		result = i;
		if (!steps[A[i]]) {
			steps[A[i]] = true;
			objectCount++;
		}
		if (objectCount >= X) {
			allgood = true;
			for (let j = 1; j<=X; j++){
				if (!steps[j]){
					allgood = false;
				}
			}	
		}	
		console.log(steps);
		
		if (allgood) {
			
			break;
		}		
				
		
	}

	return allgood ?result: -1;

}