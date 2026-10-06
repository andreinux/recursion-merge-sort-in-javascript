function mergeSort(arr){



    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

  return  merge(leftSorted, rightSorted);
}

function merge(left,right){
    let result = [];

 while(left.length > 0 && right.length > 0){
    
    

    if(left[0] < right[0]){
        result.push(left[0]);
        left.splice(0,1);
    }else{
        result.push(right[0]);
        right.splice(0,1);
    }
 }

 if(left.length == 0 || right.length == 0){
    result.push(...left);
    result.push(...right);
}


 return result;
}


console.log(mergeSort([3, 3, 1, 2, 1]));
console.log(mergeSort([8, 3, 7, 4, 2, 6, 1, 5]));