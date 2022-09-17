// 显示auto.js的版本号
// toastLog(app.versionCode);
// 也是显示版本号等效的
// toastLog(app.autojs.versionCode);
// 当前软件版本名称   
// toastLog(app.versionName);

// 启动软件这个方法就有用了
// launchApp("抖音");
// launchApp("Auto.js");
// 获取抖音的包名
// var name = getPackageName("抖音");
// toastLog(name);
// app.uninstall("name");
// 打开网址
// app.openUrl("https://www.taobao.com")
// 展示控制台也就是悬浮窗的内容
// console.show()
// 展示控制台上面的内容
// console.log("你好世界");
// 报错信息
// console.error("兄弟报错了")
// 可以判断设备在不在充电
// console.log(device.isCharging());
//震动两秒
// device.vibrate(2000);
// alert("你好")
// 基于控件的操作依赖于无障碍服务，因此最好在脚本开头使用auto()函数来确保无障碍服务已经启用。
auto();
//启用按键监听
// events.observeKey();
//监听音量上键按下
// events.onKeyDown("volume_up", function(event){
//     toast("音量上键被按下了");
// });
console.show()
notifications()
sleep(2000)
click(540,2216)
console.log("通知栏已经清空");
console.hide()
exit()

// console.show();
// events.observeNotification();
// events.on("notification", n => {
//     console.log(n);
// });
// setInterval(n => n, 1000)