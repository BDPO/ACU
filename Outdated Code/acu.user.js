// ==UserScript==
// @name        AcFun自动换地址【已失效】
// @description 不再支持跳转旧版播放页，本次只修复了域名适配
// @author      补档PO
// @version     1.22

// @include     http://www.acfun.cn/v/ac*
// ==/UserScript==

window.location.href = window.location.href.replace(/^http:\/\/www.\acfun\.cn\/v\//, 'http:\/\/www.\acfun\.cn\/a\/');
