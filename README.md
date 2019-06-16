# AcFun 自动换地址

AcFun Auto Change URL（ACU）
----------

启蒙来自https://adnmb.com/t/11896352 最后三个回复<br>
参见https://adnmb.com/t/10729302?r=10729554<br>
<b>在此特别感谢匿名版饼干ID：AtfSEZQ的丧尸！</b><p>
总体思路参考了这个脚本中关于URL转换的[代码](https://github.com/zhihaofans/Acfun/blob/master/acfun.tv/acfun2aixifan/acfun2aixifan.js#L29)，感谢原作者<p>
  <del>【更新日志】</del>
<br>大概在2017年1月15日，替换旧版本播放器功能失效。原因：主站强制使用新播放器（番剧区例外）
<br>项目终止，2017年12月7日：返回旧版视频页面失效，原因：主站改版，强制视频二级页面跳转 /v/ac

手动点击版，请自行复制以下完整代码，并加入收藏
-----------

##### 就是由www.acfun.cn/v/ac* 跳转到www.acfun.cn/a/ac*<br>最早公开发布于 https://adnmb.com/t/10035286
    javascript:(function(){window.location.href = window.location.href.replace(/^http:\/\/www.\acfun\.cn\/v\//, 'http:\/\/www.\acfun\.cn\/a\/');})();
