function getNowDate() {
  var today = new Date();

  //日期
  var DD = String(today.getDate()).padStart(2, '0'); // 获取日
  var MM = String(today.getMonth() + 1).padStart(2, '0'); //获取月份，1 月为 0
  var yyyy = today.getFullYear(); // 获取年

  // 时间
  var hh = String(today.getHours()).padStart(2, '0'); //获取当前小时数(0-23)
  var mm = String(today.getMinutes()).padStart(2, '0'); //获取当前分钟数(0-59)
  var ss = String(today.getSeconds()).padStart(2, '0'); //获取当前秒数(0-59)
  return hh + ':' + mm + ':' + ss;
}

// 输入密码
function password_input()
{
    var password = "0516"
    for(var i = 0; i < password.length; i++)
    {
        var p = text(password[i].toString()).findOne().bounds();
        click(p.centerX(), p.centerY());
        sleep(100);
    }
}
 
// 解锁屏幕
function unlock()
{
    if(!device.isScreenOn())
    {
        device.wakeUp();
        sleep(500);
        swipe(500,2000,500,1000,210);
        password_input();
    }
}
 


setInterval(() => {
  console.log("轮训检测手机是否黑屏");
  if(getNowDate().indexOf('19:57') > -1){
    unlock();
  }
}, 2000)
