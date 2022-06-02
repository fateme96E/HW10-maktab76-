
promise.then(f1).catch(f2); 
Versus:
promise.then(f1, f2);

/*
    these codes are not equal becaues there is no catch function to handle error in the second code, 
    and if error occurs in the second code, there is no chain to handle error while in the first code 
    there is a chain to handle error.
*/

