export function isMobile() {
    const userAgentInfo = navigator.userAgent;
    const mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    return mobileAgents.some((mobileAgent) => {
        return userAgentInfo.indexOf(mobileAgent) > 0;
    });
}

