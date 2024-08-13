(function () {
  const resp = JSON.parse($response.body);
  console.log($request.url);
  console.log($request.method);

  if ($request.body) {
    console.log($request.body);
  }

  console.log(resp);
  $done({});
})();
