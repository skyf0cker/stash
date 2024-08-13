(function () {
  const resp = JSON.parse($response.body);
  console.log($request.url, $request.method, resp);
  $done({});
})();
