let CookieJDs = [
  'SZFF5SKKECBN7D55G7LUKCRDA2COMEOQKH2I73PGEOPK64ZHQPO2BNIGG7EYGOSJL2CMLU3Y5FBB5JOX556AWBZP2E',//账号一ck
  '',//账号二ck,如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE && process.env.JD_COOKIE.split('&') && process.env.JD_COOKIE.split('&').length > 0) {
  CookieJDs = process.env.JD_COOKIE.split('&');
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
