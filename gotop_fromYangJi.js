function goTop(acc, t) {
    const acceleration = acc || 0.1;
    const time = t || 16;

    const document = window.document;

    let x1, y1, x2, y2 = 0;
    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    const x3 = window.scrollX || 0;
    const y3 = window.scrollY || 0;
    //滚动条到页面顶部的水平距离
    const x = Math.max(x1, Math.max(x2, x3));
    //滚动条到页面顶部的垂直距离
    const y = Math.max(y1, Math.max(y2, y3));
    const speed = 1 + acceleration;
    //滚动距离= 目前距离／速度 滚动距离会越来越小（速度>1）
    window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
    //如果距离不为零 继续调用迭代本函数
    if (x > 0 || y > 0) {
        window.setTimeout(goTop, time);
    }
    return;
}