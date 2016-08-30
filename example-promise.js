// function getTempCallback (location, callback) { // once it gets the weather it will pass the weather into the callback
//   //we also need to handle errors so the callback will expect two arguments
//   callback(undefined, 78);   //if everything went well: SUCCESS CASE
//   callback('City not found'); // if an error: ERROR CASE
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   // distinguish between successful call and an error callback
//   if (err) {
//     console.log('error' , err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000); // this timeout is a second long
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp){ // first argument is success case! and it will display the (temp)
//   console.log('promise success', temp);
// }, function (err) { // second argument is for an error case! it will display the (err)
//   console.log('promise error', err);
// });

//Challenge
function addPromise(a, b) {
  return new Promise(function (resolve, reject){
    if (typeof b === 'number' && typeof a === 'number') {
      resolve(a + b);
    } else {
      reject('a and b need to be numbers');
    }
  });
}

addPromise(5, 7).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});
