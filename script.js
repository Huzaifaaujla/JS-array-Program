// Write a js program to read and print elements of array.

// var array1=["web","development","Batch","4","saylani","Fasialabad"]
// for (let i = 0; i< array1.length; i++) {
//     var element = array1[i];
//     document.write(element,"<br>")   
// }

// Write a js program to print all negative elements in an array.
// var negitive=[1,-1,8,23,-45,28,67,-29,-2,-8,-10]
// for (let i = 0; i<negitive.length; i++){
//     if(negitive[i]<0){
//         document.write(negitive[i]+"<br>")
//     }
     
// }


// Write a js program to find sum of all array elements.
 
// var sum=0;
// var array1=[1,2,3,4,5,6,7,8];
// for (let i=0; i< array1.length; i++) {
//     sum+=array1[i]
// }
// document.write("Sum of Array : "+sum)


// Write a js program to find maximum and minimum element in an array.

// var max_min=[90,78,4,9,189,3,5,6,8,999,1000,888];
// var max=0;
// var min=max_min[0];
// for (let i = 0; i < max_min.length; i++) {
//     if(max_min[i]>max){
//         max=max_min[i];
//     }
//     else if(max_min[i]<min){
//         min=max_min[i];
//     }
    
//     }
//     document.write("Largest element is :"+max+"<br>")
//     document.write("smallest element is :"+min)



 
// Write a js program to find second largest element in an array.

// var second_largest=[999,1,34,5,100,12, 35, 77,56,10, 34,109,190,92,80,108,99];
//     console.log(second_largest)
// var large=second_largest.sort(function(a, b){return a-b});
//     console.log(large)
//     console.log(large[large.length-2])




// Write a js program to count total number of even and odd elements in an array.
// var Even_counter=0;
// var odd_counter=0;
// var arraynumber=[1,4,3,2,5,6,7,8,9,10,11];
// for (let i = 0; i < arraynumber.length; i++) {
//     if(arraynumber[i]%2==0){
//         ++Even_counter+1;
//     }
//     else{
//         ++odd_counter;
//     }
    
// }
// console.log("Even Number :"+Even_counter)
// console.log("Odd Number :"+odd_counter)


// Write a js program to count total number of negative elements in an array.

// var total_Negitve=0;
// var negitive_Array=[1,2,3,-1,-3,-6,8,-9,10,-7]
// for (let i = 0; i < negitive_Array.length; i++) {
//     if(negitive_Array[i]<0){
//         ++total_Negitve
//     }
    
// }
// console.log("Negitive Number :"+total_Negitve)


// Write a js program to copy all elements from an array to another array.

// var array=[1,2,3,4,5,6,"Web", "and"," Mobile Application development"]
// var number=array.slice(0)
// console.log(array)
// console.log(number)


// Write a js program to insert an element in an array.
// var courses=["AI","web and mobile Development","CNC","BlockChain"]
// console.log(courses)
// courses.push("CCNA")
// console.log(courses)
// courses.unshift("Graphic Design")
// console.log(courses)


// Write a js program to delete an element from an array at specified position.
var courses=["AI","web and mobile Development","CNC","BlockChain"]
courses.splice(1,1)
courses.splice(2,0,"CCNA")
console.log(courses)

