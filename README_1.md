# Auto-Change-URL
AcFun自动换地址，替换旧版本播放器功能虽已失效。但仍可返回旧版视频页面，开源代码改动：补档PO

浏览器收藏夹 手动点击版<br/>请自行复制以下完整代码：

javascript:(function(){window.location.href = window.location.href.replace(/^http:\/\/www.\acfun\.cn\/v\//, 'http:\/\/www.\acfun\.cn\/a\/');})();
