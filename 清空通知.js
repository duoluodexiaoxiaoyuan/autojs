// auto();
// console.show()
// notifications()
// sleep(1000)
// click(540,2216)
// console.log("通知栏已经清空");
// sleep(3000)
// console.hide()
// exit()


// 加减乘除
function add () {
    let a= 10
    let b =20
    return a+b
}

// 归并排序
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}
