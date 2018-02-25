module.exports = function solveSudoku(matrix) {
  // your solution
    /*var table = [
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[],[]]
    ]; //arrays in array will contain list of suitable numbers

    for(var row = 0; row < 9; row++){
         for(var col = 0; col < 9; col++){
             if(matrix[row][col] != 0){
                 table[row][col] = matrix[row][col];
             }
         }
    }
    return table;*/

    //little hack :D
    for(var row = 0; row < 9; row++){
        for(var col = 0; col < 9; col++){
            if(matrix[row][col] == 0){
                matrix[row][col] = [];
            }
        }
    }
    return matrix;
}
