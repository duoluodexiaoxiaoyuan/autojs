// launchApp('拼多多')

function enterPersonCenter() {
  setTimeout(() => {
    click(976,2323)
    // 点击省钱月卡
    setTimeout(() => {
      clickShengQianYueKa()
    }, 1000);
  }, 1000)
}

enterPersonCenter()

// 点击省钱月卡
function clickShengQianYueKa() {
  click(534,435)
  // 点击每日神卷
  setTimeout(() => {
    clickEveryTicket()
  }, 1000);
}

// 点击每日神券
function clickEveryTicket() {
  click(123,1072)
}