export default function (num) {
    let date = new Date(num * 1000)
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let Nowdate = Y + M + D;
    return Nowdate;
}