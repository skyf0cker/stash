(function () {
    const nowTime = new Date();
    console.log(nowTime.toTimeString());

    const weekday = nowTime.getDay();
    if (weekday == 0 || weekday == 6) {
        $done({
            content: "周末了，休息一下",
            backgroundColor: "#2BEC17",
        });
        return;
    }

    $done({
        content: nowTime.toTimeString(),
    });
})();
