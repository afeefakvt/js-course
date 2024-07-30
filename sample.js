// var a= document.getElementById("head1");
// a.innerHTML="learn js";
// a.style.color="blue";

// var a=document.getElementsByClassName("head2");
// a[0].style.color="red";



// var a=document.getElementsByTagName("p");
// a[0].innerHTML="lolol"

// var a=document.getElementsByName("text")[0];
// var b=document.getElementById("head");

// function message(){
//    b.innerHTML= "hello" +a.value;

// }
// var a=document.querySelectorAll(".head1");
// a[0].innerHTML="node";
// a[1].innerHTML="c++"
// var heading=



// getname();
// console.log(x);
// var x=7;

// function getname(){
//     console.log("namaste");
// }

// var x=1;
// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }
// function a(){
//     var b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// console.log("start");
// function cb(){
//     console.log("callback");
// }
// setTimeout(cb,0);
// console.log("end");


// let price=200;
// let name="afeefa";


// let a=5;
// let b=2;
// console.log("a==b",a==b);



// const name=prompt("enter your name");
// console.log("you entered the name: ",name);




// let num;
// prompt("enter a number");
// if(num%2===0){
//     console.log("number is even");
// }else{
//     console.log("number is odd");
// }

// let score=35;
// let grade;
// if(score>=90&&score<=100){
//     grade="A";
// }else if(score>=80&&score<=89) {
//     grade="B";
// }else if(score>=70&&score<=79){
//     grade="C";
// }else{
//     grade="F";
// }
// console.log("your grade is ",grade);


// for(var i=1;i<=5;i++){
//     console.log(i);
// }
// console.log(i);

// let gameNum=24;
// let usrNum=100;
// if(gameNum!=usrNum){
//     prompt("")
// }


// let fullName=prompt("enter your fullname");
// let userName="@"+fullName+fullName.length;
// console.log(userName);

// let num=prompt("enter a number");
// console.log("entered number is ",num);


// let num1=parseInt(prompt("enter an int number"));
// let num2=parseFloat(prompt("enter a float number"));
// let sum=parseFloat(num1+num2);
// console.log(sum);


// let marks=[5,5,5];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// let avg=sum/marks.length;
// console.log(avg);


// let price=[250,645,300,900,50];
// for(let i=0;i<price.length;i++){
//     let offer=price[i]/10;
//     price[i]-=offer;
// }
// console.log(price);


// const arrowSum= (a,b) => {
//     console.log(a+b);
// }
// arrowSum(5,5);


//mapp//
// const arr=[1,2,3,4,5];
// function double(x){
//     return x*2;
// }
// const output=arr.map(double);
// console.log(output);

//filter//
// const arr=[1,2,3,4,5];



// const output=arr.filter(function isOdd(x){
//     return x%2;});
// console.log(output);

// const arr=[1,2,3,4,5];



// const output=arr.filter((x)=> x%2);
// console.log(output);

//reduce//
// const arr=[1,2,3,4,5];
// const output=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(output);

// const arr=[1,2,3,4,5];
// const output=arr.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//         return acc;
//     }
// },0);
// console.log(output);

//promise//
// let p=new Promise((resolve,reject)=>{
//     let a=1+1;
//     if(a=3){
//         resolve("success");
//     }else{
//         reject("failed");
//     }
// })
// p.then((result)=>{
//     console.log(result);
// }).catch((message)=>{
//     console.log("this is in the catch"+message);
// })


//async await
//  function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weatherdata");
//             resolve(200);
//         },4000);
//     });
//  }

// async function getAllData(){
//     await api();
// }

// const a=['apple','appppppp','oram'];

// const b=a.reduce((acc,curr)=>{
//     if(curr<acc){
//         acc.length=curr.length
//         return acc.length;
//     }
// })
// console.log(b);


// var a;
// console.log(a);

// var a=10;
// function b(){
//     var x=15;
// }
// console.log(a);



//scope chain,scope and lexical environment

// function a(){
//     let bee="afeefa";
//     function b(){
//         function c(){
//               console.log(bee);
//         }c();
// }
// b();
// }
// a()



// function a(){
//     var b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a();


//variable shadowing
// var a=10;

// {
//     var a=100;
//     let b=20;
//     const c=30;
//     console.log(a);
// }

// console.log(a);

//ILLEGAL SHADOWING
// let a=20;
// {
//     var a =20;

// }

// legal shadowing
// var a=20;
// {
//     let a=20;

// }


// let a=10;
// {
//     let a=20;
// }


//closuere

// function x(){
//     var a=2;
//     function y(){
//         console.log(a);

//     }
//     y();
// }
// x();

//settimeout and closure
// function x(){
//     var i=1;
//     setTimeout(()=>{
//         console.log(i)
//     },3000);
//     console.log("hello")

// }
// x();



//double parenthesis

// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a)
//     }
//     return inner;
// }
// outer()()


// function outer(){
  
//     function inner(){
//         console.log(a)
//     }
//     var a=10;
//     return inner;
// }
// outer()()

// function outer(){
//     function inner(){
//         console.log(a);
//     }
//     let a=10;
//     return inner;
// }
// const close=outer()
// close();

// function outer(b){
//     function inner(){
//         console.log(a,b)
//     }
//     let a=10;
//     return inner;
 
// }
// const close=outer("helloworld");
// close();


// function outest(){
//     var c=10;
//     function outer(b){
//         function inner(){
//             console.log(a,b,c);
//         }
//         let a=1;
//         return inner;
//     }
//     return outer;
// }
// const close=outest()("hello");
// close();




//anonymous function
// let myfunction=function (){
//     console.log('hello');

// }
// myfunction();


//function expression
// b();
// let b=function a(){
//     console.log('a called');

// }

//  const b=function a(x, y) {
//     console.log(x+y);
// };
// b(2,3)


//callback function

// function x(){
//     console.log("kello");
// }

// x(function y(){

// });


//ternary operator
// let age=5;
// let result = (age>=6)?"adult":"not adult";
// console.log(result);


// let stri="name"
// console.log(stri.length);


// let str = "afeefAAAA"; 
// str = str.toLowerCase(); 
// console.log(str); 
 


//slice
// let str = "afeefAAAA";
// str=str.slice(1,6); 
// console.log(str);

//concat
// let str="afeefa";
// let strr="kvt";
// let strrr=str.concat(strr);
// console.log(strrr);

//replace
// let str="afeefa";
// str=str.replace("f","l");
// console.log(str);


// let str="afeefa";

// console.log(str.replace("a","b"));


//push
// const a=[1,2,3,4,];
// a.push(5);
// console.log(a);

//pop
// const a=[1,2,3,4];
// a.pop();
// console.log(a);

//tostring
// let arr = [1, 2, 3, 4];
// let str = arr.toString();
// console.log(str);
// console.log(typeof str) // Output: "1,2,3,4"



//concat
// let a=[1,2,3,4];
// let b=[6,7,8]
// let c=a.concat(b);
// console.log(c);

//shift
// let a=[1,2,3,4];
// a.shift();
// console.log(a);

//unshift
// let a=[1,2,3,4]
// a.unshift(0);
// console.log(a);


//slice
// let a=[1,2,3,4];
// console.log(a.slice(1,3));


//splice//delete and add and repalce1
// let a=[1,2,3,4,5];
// a.splice(2,0,0);//add in btw
// console.log(a);


// let a=[1,2,3,4,5];
// a.splice(4,1,7);//replace
// console.log(a);

// let a=[1,2,3,4,5];
// a.splice(1,1);//delete
// console.log(a);


//sum
// function a(x,y){
//      const sum=x+y;
//     return sum;
// }

// console.log(a(2,3));

//sum using arrow function
// const arrowsum=(a,b)=>{
//     console.log(a+b)
// }
// arrowsum(2,1);


// const a=function b(x,y){
//     console.log(x+y);

// }
// a(1,2);

//charat
// let str='afeefa'
// console.log(str.charAt(1));

//sum using promise
// function add(x,y){
//     return new Promise((resolve,reject)=>{
//         let sum=x+y;
//         resolve(sum);
//     })
// }
// add(3,3).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })


//sum
// const p=new Promise((resolve,reject)=>{
//     let a=1;
//     let b=1;
//     resolve(a+b);
// })
// p.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error);
// })

//even or odd
// const p=new Promise((resolve,reject)=>{
//     let a=8;
//     if(a%2==0){
//         resolve(`${a} is even`)
//     }else{
//         reject(`${a} is odd`)
//     }
// })
// p.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


//promise.all
// const promise1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise1 finished successfully');
//     },1000);
// })
// const promise2=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise2 finished successfully');
//     },1000);
// })
// const promise3=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise3 finished successfully');
//     },1000);
// })

// Promise.all([promise1,promise2,promise3])
// .then((result)=>{
//     console.log("all fnished" +result);
// }).catch((error)=>{
//     console.log(error);
// })


//promise.allsettled
// const promise1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise1 finished successfully');
//     },1000);
// })
// const promise2=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise2 finished successfully');
//     },1000);
// })
// const promise3=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise3 finished successfully');
//     },1000);
// })
// Promise.allSettled([promise1,promise2,promise3])
// .then((result)=>{
//     console.log("all finished" +result);
// }).catch((error)=>{
//     console.log("noe error" +error)
// })



//promise.race
// const promise1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise1 finished successfully');
//     },1000);
// })
// const promise2=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise2 finished successfully');
//     },1000);
// })
// const promise3=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise3 finished successfully');
//     },1000);
// })
// Promise.race([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })


//promise.any
// const promise1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise1 finished successfully');
//     },1000);
// })
// const promise2=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise3 finished successfully');
//     },1000);
// })
// const promise3=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('promise3 finished successfully');
//     },1000);
// })

// Promise.any([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

 //array destructuring
//  const arr=[1,2,3,4]
//  const [a,b,c,d]=arr;
//  console.log(a);
//  console.log(b);
//  console.log(c);


//   const arr=[1,2,3,4,5,6,7,8]
//  const [a,b,...rest]=arr;
//  console.log(a);
//  console.log(b);
//  console.log(rest);


//object destructuring
// const obj={
//     name:"affeaf",
//     age:20
// }
// const{name,age}=obj;
// console.log(name);
// console.log(age);


//nested desturcturing
// const obj={
//     name:"afeefa",
//     age:20,
//     adress:{
//         city:"usa",
//         country:"india"

//     }
// }
// const {name,age,adress:{city,country}}=obj;
// console.log(name);
// console.log(city);


//CURRYING//
//  function a(x,y){
//     return x+y;
//  }
//  function b(x){
//     return function(y){
//         return x+y;
//     }
//  }
//  const c=b(2);
//  console.log(c(3));

//pure function
// function add(a, b) {
//     console.log(a+b);
//   }
//   add(4,5);

//generator function
// function* generatorFunction() {
//     yield 'First value';
//     yield 'Second value';
//     yield 'Third value';
// }

// const generator = generatorFunction();

// console.log(generator.next()); // { value: 'First value', done: false }
// console.log(generator.next()); // { value: 'Second value', done: false }
// console.log(generator.next()); // { value: 'Third value', done: false }
// console.log(generator.next()); // { value: undefined, done: true }


//fcatory function
// function factory(name,age){
//     return{
//         name:name,
//         age:age,
//         greet:function(){
//             console.log(`hi iam ${this.name}`);
//         }
//     }
// }
// const person1=factory("affefa",20);
// const person2=factory("fida",9);


// person1.greet()
// person2.greet()


// //iife
// (function (){
//     var x=10;
//     console.log('inside iife:'+x)
// })();


// console.log(x);//this will will throw an error coz x is not accessible outside


//object.freeze
// const obj={
//     name:"afeefa",
//     age:30
// }
// Object.freeze(obj);

// obj.name="affff";
// delete obj.age;

// console.log(obj.name);
// console.log(obj.age);



//object.seal
// const obj={
//      name:"afeefa",
//          age:30
//      }
//      Object.seal(obj);   
    
//      obj.name="affff";
//      delete obj.age;
    
//      console.log(obj.name);
//      console.log(obj.age);

//shallow copy
// Shallow copy example
// const original = {
//     name: 'John',
//     age: 30,
//     hobbies: ['readi ng', 'gaming']
// };

// const shallowCopy = Object.assign({}, original); // Using Object.assign()

// original.hobbies.push('writing'); // Modifying the original object

// console.log(original);      // Output: { name: 'John', age: 30, hobbies: [ 'reading', 'gaming', 'writing' ] }
// console.log(shallowCopy);   // Output: { name: 'John', age: 30, hobbies: [ 'reading', 'gaming', 'writing' ] }


//deep copy
// Deep copy example using JSON serialization and parsing
// const original = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'gaming']
// };

// const deepCopy = JSON.parse(JSON.stringify(original)); // Using JSON serialization and parsing

// original.hobbies.push('writing'); // Modifying the original object

// console.log(original);      // Output: { name: 'John', age: 30, hobbies: [ 'reading', 'gaming', 'writing' ] }
// console.log(deepCopy);      // Output: { name: 'John', age: 30, hobbies: [ 'reading', 'gaming' ] }


//map
// const arr=["af","fff"];
// const output=arr.map(element=>element.toUpperCase());
// console.log(output);



// const a=["aff","afffff"]
// const b= a.map((num)=>{
//    return num.toUpperCase()
// })
// console.log(b);



//largest value in onbject
// const obj={
//     a:1,
//     b:2
// }
// let l1=Object.values(obj)[0];
// for(const key in obj){
//     if(l1<obj[key]){
//         l1=obj[key];
//     }
// }
// console.log(l1)


//object sum
// const obj={
//     a:6,
//     b:2
// }
// let sum=0;
// for(const key in obj){
//     sum=sum+obj[key];
// }
// console.log(sum);

//second largest value in onj

// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// let l1=Object.values(obj)[0];
// let l2=Object.values(obj)[1];
// for(const key in obj){
//     if(l1<obj[key]){
//         l2=l1
//         l1=obj[key]
  
//     }else if(obj[key]<l1&&obj[key]>l2){
//         l2=obj[key]
//     }
// }
// console.log("largest:",l1);
// console.log("second largest:",l2)


//remove object key
// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// delete obj.b;
// console.log(obj)



//sort and revrese an array

// const a=[1,11,8,4]
// const b=a.sort((a,b)=>(b-a)).reverse()

// console.log(b)



 //sum using generator function

// function*a(){
//     let sum=0
//     while(true){
//         b=yield sum;
//         sum=sum+b;

//     }
// }
// const ab=a();
// ab.next().value
// console.log(ab.next(1).value)
// console.log(ab.next(2).value)


//optional chaining
// const obj={
//     name:"afeefa",
//     address:{
//         city:"india"

//     }
// }
// console.log(obj.address?.city);

// const a = [
//     { type: 'revenue', amount: 100, currency: 'USD' },
//     { type: 'expense', amount: 50, currency: 'EUR' },
//     { type: 'revenue', amount: 120, currency: 'USD' },
//     { type: 'revenue', amount: 80, currency: 'EUR' },
//     { type: 'expense', amount: 30, currency: 'USD' },
//     { type: 'expense', amount: 25, currency: 'USD' },
//     { type: 'revenue', amount: 200, currency: 'EUR' },
//     { type: 'expense', amount: 40, currency: 'EUR' },  
//     { type: 'revenue', amount: 150, currency: 'USD' }
//   ];
// let sum=0
// a.forEach((val)=>{
//     sum=sum+val.amount
// })

// console.log(sum);

//PRINT EVEN NUMBERS UNLIMITED
// function*a(){
//     let num=1
//     while(true){
        
//     if (num%2==0){
//         yield num;

//     }
//     num++;
// }
// }
// const b=a();
// while(true){
//     console.log(b.next().value);//set interval will not work in while loop
// }

// const a=[1,2,3]
// a.splice(0)
// console.log(a)


//empty array
// const a=[]
// a.push(1,2,3,4)
// console.log(a)


//PRINT EVEN NUMBERS USUNG GF UNLIMITEDLY
// function*a(){
//     let num=1
//     while(true){
        
//     if (num%2==0){
//         yield num;

//     }
//     num++;
// }
// }
// const b=a();
// function c(){
//     console.log(b.next().value);
// }
// setInterval(c,1000);//set interval will not work in while loop
// }




// const a="hello world"
// const b=a.split(" ").reverse().join(" ");
// console.log(b);



// const a="this is a word" 
// const b=a.split(' ').map((e)=>e.split('').reverse().join(' ')).join(' ');
// console.log(b)


// const a=3456
// const b=String(a);
// const d=b.split("");
// let sum=0;
// const c=d.forEach((num)=>{
//     sum=sum+Number(num);
// })
// console.log(sum)




// const a={
//     key1:123,
//     key2:3456,
//     key3:099
// }
// let num=0
// let akey=""

// for(const key in a){
//     if(a[key]>num){

//     num=a[key]
//     akey=key
//     }

// }
// console.log(akey,num)

//rest
// function a(...rest){
//     return rest.reduce((acc,curr)=>{
//        return acc=acc+curr
        
//     },0)

// }

// console.log (a(2,3,4,4,5));//to give myltiple arguments to function


//trim
// const a="   afeeffa  ";
// console.log(a.trim())

// const a=["apple","orange","pineapple","avocado"]
// const b=a.map((x)=>{
//     return x.charAt(0).toUpperCase()+x.slice(1)
// })



// console.log(b)


//sum of even nmubers using reduce
// const a=[1,2,3,4,5];
// const b=a.reduce((acc,curr)=>{
//     if(curr%2==0){
//         return acc=acc+curr
//     }else{
//         return acc
//     }
// },0);
// console.log(b)



//multiplication of two array


// const a=[1,2,3]
// const b=[4,5,6]
// const ab=a.map((num1,num2)=>{
//     return num1*b[num2]
    
// })
// console.log(ab)


// let a=10
// let b=20
// let c=30

// const ab=a>b?a:b
// const abc=ab>c?ab:c
// console.log(abc)

//set
// const a=[1,1,1,2,2,2,2,3,4,4]
// const b=new Set(a);
// console.log(b)
// console.log(b.size)
// console.log(b.add(7))
// console.log(b.has(8))
// console.log(b.delete(2))


// const a=[1,2,3,4,5]
// const b=a[0]+a[a.length-1]
// console.log(b)

// const a=[1,2,3,4]
// a.splice(3,1);
// console.log(a)


// const a=[1,2,3,4,5,5,5,5,5,5,5,5]
// let target=3
// let count=0
// for(let i=0;i<a.length;i++){
//     if(a[i]==target){
//         count++
//     }
// }
// console.log(count)


//remove nth ele from arry
// function a(arr,n){
//     arr.splice(n,1)
//     return arr
// }
// const ab=[1,2,3,4]
// const n=2
// console.log(a(ab,n))

//largest string in an arry
// const a=["aff","afffffff"]
// const b=a.reduce((acc,curr)=>{
//     if(curr.length>acc.length){
//         acc=curr
//         return acc
//     }
// })
// console.log(b)


//unique numbers using filter
// const a=[1,2,3,3,4,4,5,5,6]
// const b=a.filter((num1,num2)=>{
//     if(a[num1]!=a[num2]){
//         return num1
    
//     }
// })
// console.log(b)



//even numbers usinfg filter
// const a=[1,2,3,4,5,6,7,8]
// const b=a.filter((x)=>{
//     if(x%2==0){
//         return x
//     }
// })
// console.log(b)




// const obj={
//     a:1,
//     b:2,
//     c:3,
//     d:0
    
// }
// let akey=""
// let l1=0
// for(const key in obj){
//     if(obj[key]>l1){
//         l1=obj[key]
//         akey=key
//     }
// }
// console.log(akey,l1)




//print unique using loop
// function a(ab){
// for(let i=0;i<a.length;i++){
//     for( let j=1;j<a.length;j++){
//         if(a[i]!=a[j]){
//             return a[i]
//         }
//     }
// }
// }

// const ab=[1,2,3,3,3,4,5]/////////doubt
// console.log(a(ab))


//remove multiple of 3
// const a=[1,2,3,4,5,6]
// for(let i=0;i<a.length;i++){
//     if(a[i]%3==0){
//         for(let j=i;j<a.length;j++){
//             a[j]=a[j+1]
//         }
//         i--
//         a.length--
//     }
// }
// console.log(a)



//sort object
// const obj={
//     age1:30,
//     age2:65,
//     age3:4
// }
// const b=Object.sort(obj)((a,b)=>a.age-b.age);
// console.log(b)


//sort by alphabetical order
// let a="hello and the between"
// a=a.split(" ").sort().join(" ")
// console.log(a)

// const a=["hello world"]
// console.log(a[0].split(" ")[1])



// function a(x){

//     for(let i=1;i<=10;i++){
//         console.log(i + "x" + x + "=" + i*x) 
//     }
    
// }
// console.log(a(2))////doubt




// function a(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a>b){
//             resolve("success")
//         }else{
//             reject("failed")
//         }
//     })
// }
// async function b(){
//     try{
//         let c=await a(1,3)
//         console.log(c)
//     }catch(error){
//         console.log(error)
//     }
// }
// b()


// const a=[1,2,3,4,5]
// let temp=a[0]
// a[0]=a[a.length-1]
// a[a.length-1]=temp
// console.log(a)


// const a="malayalam" 
// const b=a.split("").map((x)=>{
//     if(x=="a"){
//         return "e"
//     }else{
//         return x
//     }
    
// })
// console.log(b.join(""))


// const a=[1,2,3]
// const b=[2,4,6]

// const c=a.concat(b)
// for(let i=0;i<c.length;i++){
//     for(let j=i+1;j<c.length;j++){
//         if(c[i]>c[j]){
//             let temp=c[i]
//             c[i]=c[j]
//             c[j]=temp
//                 }
//     }
// }

// console.log(c)


// const a=[["a",2],["b",5]]
// const obj={}
// a.map((x)=>{
//     obj[x[0]]=x[1]
// })
// console.log(obj)


//flat
// const a=[[1,2],[3,4]]
// const b=a.flat()
// console.log(b)

//flatmap
// const a=[1,2,3,4,5,6]
// const b=a.flatMap((val)=>{
//    return [val*2,val+2]
// })
// console.log(b)


// const a=[[1,2],[3,4]]
// const b=a.flatMap((x)=>{
//     return [x[0]*2,x[1]*2]
// })
// console.log(b)


// for(let i=1;i<=5;i++){
//     let str=""
//     for(let j=1;j<=5;j++){
//         if(i===1||i===5||j===5-i){
//             str+="*"
//         }else{
//             str+=""
//         }
//     }
//     console.log(str)
// }


// const obj={
//     a:1,
//     b:2
// }
// delete obj.a
// console.log(obj)



//factorial
// let count=1
// for(i=1;i<=5;i++){
//     count=count*i

// }
// console.log(count)


//bitwise
// const a=5
// const b=3
// console.log(a&b)


//aplimdrome with loop
//  let str="afeefa"
//  let isPalindrome=true

//  let leftIndex=0
//  let rightIndex=str.length-1

//  for(i=0;i<str.length/2;i++){
//     if(str[leftIndex]!=str[rightIndex]){
//         isPalindrome=false
        
//     }
//     leftIndex++
//     rightIndex--

//  }
//  if(isPalindrome){
//     console.log("palindrome")
//  }else{
//     console.log("not pallindrome")
//  }


// function ispalindrome(str){

// if(str==str.split("").reverse().join("")){
//     console.log("ispalllindrome")
// }else{
//     console.log("not pallindrome")
// }
// }
// ispalindrome("hsa")



//while
// let i=1
// while(i<=5){
//     console.log(i)
//     i++;
// }


//do while
// let i=1;
// do{
//     console.log(i)
//     i++
// }while(i<=5)


//pass by value
// function a(x){
//     x=10
//     console.log(x)
    
// }
// let num=5
// a(num)
// console.log(num)

//pass y refrence
// function a(person){
//     person.name="bob"
//     console.log(person)

// }
// let obj={

//     name:"alice"
// }
// a(obj)
// console.log(obj)



// reverse
// // const a=[1,2,3,4,5]
// // let i=0
// // let j=0
// // for( i=0,j=a.length-1;i<=a.length/2;i++,j--){
// //     let temp=a[i]
// //     a[i]=a[j]
// //     a[j]=temp
    
// // }
// // console.log(a)
   

//prime
// const a=[1,2,3,4,5]

//  for(let i=0; i<a.length; i++){
//     let flag=0
//     for(let j=1;j<=a[i];j++){
//         if(a[i]%j==0){
//             flag=1
//         }
//         }
//         if(flag==0){
//             console.log(a[i])
//         }

//         }



//unique using loop
// const a=[1,2,3,3,4,5]
// for(let i=0;i<=a.length-1;i++){
//     let flag=0

//     for(let j=i+1;j<=a.length-1;j++){
//         if(a[i]==a[j]){
//             flag=1

//         }
//     }
//     if(flag==0){
//         console.log(a[i])
//     }
// }


//delete object key
// const a={
//     key1:1,
//     key2:2
// }
// delete a.key1
// console.log(a)



//array is empty or not
// const a=[1,2,3]
// if(a.length==0){
//     console.log("empty")
// }else{
//     console.log("not empty")
// }

//object
// const obj={
//     a:1,
//     b:2
// }
// if(Object.entries(obj)==0){
//     console.log("emoty")
// }else{
//     console.log("not empty")
// }


//remove adjacent odd elements from array
//print z pattern

// print even numbers of array using map
// const a=[1,2,3,4,5,6,7]
// const b=[]

// const c=a.map((x)=>{
//     if(x%2){
//         b.push(x)
//     }
// })
// console.log(b)


//revrese
// const a=[1,2,3,4,5]
// for(i=a.length-1;i>=0;i--){
//     console.log(a[i])
// }



// var a
// console.log(a)


// const obj={a:[1,2,3,4,5]}
// let result=obj.a.reduce((acc,curr)=>acc+curr,0)
// console.log(result)

// const arr=[{a:2,b:3},{a:3,b:4},{a:4,b:5}]
// let a=0
// let b=0
// for(let i=0;i<arr.length;i++){
//     a=a+arr[i].a
//     b=b+arr[i].b
// }
// console.log("a=",+a)
// console.log("b=",+b)



// let str="razik"
// str=str.toLowerCase()
// let count=0
// let vowels="aeiou"
// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//     count++
//     }
// }
// console.log(count)



// let a="     affeeefa   "
// console.log(a.trim());

//pass by value pass by reference

// function a(x){
//     x=0
//     console.log(x)

// }
// let num=5
// a(num);
// console.log(num)


// function a(obj){
//     obj.name="bob"
//     console.log(obj.name)
// }
// let person={name:"alice"}
// a(person);
// console.log(person.name)


//call apply bind

// const person={
//     name:"afeefa"
// }

// function greet(name){
//     console.log(`hi ${name},this is ${this.name}`)
// }
// greet.call(person,"alice")


// function greet(name){
//     console.log(`hi ${name},this is ${this.name}`)
// }
// const person={
//     name:"john"
// }
// greet.apply(person,["alice"])

//  function greet(name){
//     console.log(`hi ${name},this is ${this.name}`)
// }
// const person={
//     name:"afeefa"
// }
// const bind=greet.bind(person)
// bind("alice")


// let a=[1,2,3,4,5]
// for(let i=0;i<a.length;i++){
//     a[i]%2?console.log(a[i]):null
// }

// let a=[1,2,4,5,6]
// for(let i=0;i<a.length;i++){
//     console.log()
// }

// let a=[1,2,3,4,5]
// let result=a.filter(num=>!(num%2==0))
// console.log(result)


// const y=null
// const z="hii"

// const result=y??
// console.log(result)

// const res=z??
// console.log(z)


//explicit
// let str = '123';
// let num = Number(str);
// console.log(num); // Output: 123
// console.log(typeof num); // Output: number


//implicit
// let z="12"-3
// console.log(z)


// const a=[1,2,3]
// return a.push(4)
// console.log(a)


// const a=[1,2,2,3,4,5]
// const b=a.filter((num1,num2)=>{
//     if(a[num1]!=a[num2]){
//         return num1
//     }
// })
// console.log(b)

