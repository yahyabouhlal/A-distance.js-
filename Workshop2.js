// function reverse(str){
//     var tab=[];

//     for(i=str.length ; i <= 0 ; i--){
//         var z =str.split('');
//         z = tab.push(i)
//     }
//     console.log(tab);
// }

// reverse("achraf");

const reverse =(str) => {

if(!str) {
    return str;
}
else{
    return str.split("").reverse().join("");
}
 }
 var z= reverse("youssoufia");
 console.log(z);

