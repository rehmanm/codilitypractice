function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var  result = 0;
    for (var i = 0; i <= A.length; i++) {
        console.log(A[i]);
        result ^= A[i];
    }
    return result
}