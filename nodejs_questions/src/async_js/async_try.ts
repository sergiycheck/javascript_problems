import async from 'async';

function waterfallRun() {
  async.waterfall(
    [
      function (callback) {
        //doSomething
        let paramx = 'paramx';
        callback(null, paramx); //paramx will be availaible as the first parameter to the next function
        /**
              The 1st parameter passed in callback.
              @null or @undefined or @false control moves to the next function
              in the array
              if @true or @string the control is immediately moved
              to the final callback function
              rest of the functions in the array
              would not be executed
          */
      },
      function (arg1, callback) {
        //doSomething else
        // arg1 now equals paramx
        let result = 'result';
        callback(null, result);
      },
      function (arg1, callback) {
        //do More
        // arg1 now equals result
        callback(null, 'done');
      },
      function (arg1, callback) {
        //even more
        // arg1 now equals 'done'
        callback(null, 'done');
      },
    ],
    function (err, result) {
      //final callback function
      //finally do something when all function are done.
      // result now equals 'done'

      console.log('result', result);
    }
  );
}

function seriesRun() {
  async.series(
    [
      function (callback) {
        // do some stuff ...
        callback(null, 'one');
        /**
            The 1st parameter passed in callback.
            @null or @undefined or @false control moves to the next function
            in the array
            if @true or @string the control is immedeatly moved
            to the final callback function with the value of err same as
            passed over here and
            rest of the functions in the array
            would not be executed
        */
      },
      function (callback) {
        // do some more stuff ...
        callback(null, 'two');
      },
    ],
    // optional callback
    function (err, results) {
      // results is now equal to ['one', 'two']

      console.log('results', results);
    }
  );
}

seriesRun();
// waterfallRun();
