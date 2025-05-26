function twoPointersTechnique(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    }
    else if (sum<target){
        left ++
    }else{
        right --
    }
  }
    return null; 
}


console.log(twoPointersTechnique([1, 2, 3, 5, 6, 7], 10)); 



let arr = [ 0, -1, 2, -3, 1 ];
let target = -2;




function twoSum (arr, target){
    

    // sort the arr 
   const sorted= arr.sort((a,b)=>a-b);
   
   let left=0;
   let right= arr.length-1;
   
   while(left<right){
       const sum= sorted[left] + sorted[right];
       
       if(sum===target){
           return [sorted[left], sorted[right]];
       }
       else if(sum<target){
           left ++;
       }else{
           right--
       }
   }
   return null;
  
}


console.log(twoSum(arr,target))


