(function () {
  const resp = JSON.parse($response.body);
  console.log($request.url);
  console.log($request.method);
  console.log(resp);
  $done({});
})();
