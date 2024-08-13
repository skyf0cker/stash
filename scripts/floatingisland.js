(function () {
  const resp = JSON.parse($response.body);
  const request = JSON.parse($request.body);
  console.log($request.url);
  console.log($request.method);
  console.log(request);
  console.log(resp);
  $done({});
})();
