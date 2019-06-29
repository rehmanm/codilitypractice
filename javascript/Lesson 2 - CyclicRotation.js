function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let len = A.length;
    if (len > 0) {
    for (let i = 0;i<K; i++){
        
        let lastNumber = A[len - 1];
        for (let j = len-1; j >0; j--){
            
            A[j] = A[j-1];
            
            
        }
        
        A[0] = lastNumber;
        
    } 
}
    return A;
}