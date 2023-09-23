(function () {
    let FORMAT_TIME = "yyyy-MM-dd hh:mm:ss";
    const startTime = $script.startTime;
    consoel.log(typeof startTime);
    console.log(startTime.format(FORMAT_TIME));

    const weekday = startTime.getDay();
    if (weekday == 0 || weekday == 6) {
        $done({
            content: "周末了，休息一下",
            backgroundColor: "#2BEC17",
        });
        return;
    }

    $done({
        content: startTime.format(FORMAT_TIME),
    });
})();
