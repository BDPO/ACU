// ==UserScript==
// @name        AcFun自动换地址
// @description 修复了域名适配，现可自动跳转旧版视频页面。
// @author      补档PO
// @version     1.2

// @include     http://www.acfun.cn/v/ac*
// ==/UserScript==
window.location.href = window.location.href.replace(/^http:\/\/www.\acfun\.cn\/v\//, 'http:\/\/www.\acfun\.cn\/a\/');