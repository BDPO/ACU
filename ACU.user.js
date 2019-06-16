// ==UserScript==
// @name        AcFun自动换地址【tv转cn】
// @description 自动由旧版www.acfun.tv 跳转新域名 https://www.acfun.cn/
// @author      补档PO
// @version     1.4.1

// @include     http://www.acfun.tv/*

// ==/UserScript==

window.location.href = window.location.href.replace(/^http:\/\/www.\acfun\.tv\//, 'https:\/\/www.\acfun\.cn\/');
