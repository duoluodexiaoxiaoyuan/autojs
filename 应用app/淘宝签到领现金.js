launchApp('淘宝')
setTimeout(() => {
  if (text('快来更新淘宝').findOne(1000)) {
  // 点击取消更新
  click(485, 1743, 595, 1853)
  setTimeout(() => {
      // 点击签到
      click(101, 131)
      // 点击提现
      setTimeout(() => {
          click(511,1554)
          setTimeout(() => {
            if (text('提醒我每天领现金').findOne(1000)) {
              back()
              back()
            }
          }, 1000);
      }, 1000)
  }, 1000)
  } else {
  // 点击签到
  click(101, 131)
  setTimeout(() => {
      // 点击立即提现
      click(511, 1554)
      setTimeout(() => {
        if (text('提醒我每天领现金').findOne(1000)) {
          back()
          back()
        }
      }, 1000);

  }, 1000)
  }
  }, 3000);