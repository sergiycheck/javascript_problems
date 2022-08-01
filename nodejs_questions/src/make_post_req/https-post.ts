import https from 'https';

const obj = {
  userId: 1,
  id: 1,
  title: 'whatever',
  completed: false,
};

const reqOptions = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/todos',
  method: 'POST',
};

function httpsPostReq(obj: any) {
  const data = JSON.stringify(obj);

  const options = {
    hostname: reqOptions.hostname,
    port: 443,
    path: reqOptions.path,
    method: reqOptions.method,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {
      // process.stdout.write(d);
      console.log('on data', d.toString());
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

async function fetchPost(obj: any) {
  const response = await fetch(
    `https://${reqOptions.hostname}${reqOptions.path}`,
    {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' },
    }
  );

  const result = await response.json();

  console.log('result', result);
}

// httpsPostReq(obj);
// or
// with node v18.4.0
fetchPost(obj);
