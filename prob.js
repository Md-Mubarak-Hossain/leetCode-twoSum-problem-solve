const twoSum=(nums, target)=>{
    let indexN=[];   
    for(let i=0;i<nums.length; i++){
       for(let j=i+1;j<nums.length;j++){
           if(nums[i]+nums[j]===target){
               indexN.push(i)
               indexN.push(j)
           }
       }
    }
return indexN;

};
console.log(twoSum([2,4,6,9],11))