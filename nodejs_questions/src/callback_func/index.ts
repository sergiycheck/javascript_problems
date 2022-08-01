function myNew(next) {
  console.log('Im the one who initates callback');
  next('nope', 'success');
}

myNew(function (err, res) {
  console.log('I got back from callback', err, res);
});
