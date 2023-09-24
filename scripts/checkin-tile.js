(function () {
    let FORMAT_TIME = "yyyy-MM-dd hh:mm:ss";
    const nowTime = new Date();
    console.log(nowTime.format(FORMAT_TIME));

    const weekday = nowTime.getDay();
    if (weekday == 0 || weekday == 6) {
        $done({
            content: "周末了，休息一下",
            backgroundColor: "#2BEC17",
        });
        return;
    }

    $done({
        content: nowTime.format(FORMAT_TIME),
    });
})();
