let CookieJDs = [
  '__jda=76161171.1622737340284425854305.1622737340.1622737340.1622737340.1; __jdc=76161171; __jdv=76161171|cn.bing.com|-|referral|-|1622737340285; __jdu=1622737340284425854305; areaId=12; ipLoc-djd=12-988-994-0; shshshfpa=fed521ce-2297-3776-e000-ae405c978c7a-1622737349; shshshfpb=me8sR0wBpH90BCC3YCkF8Yw%3D%3D; 3AB9D23F7A4B3C9B=3P76Z5HRJQHAS5GNNHDBSHKSGWTMEAOOKQUICMK3GRHY6K2KOFHWW43P3MI7BYM6YVPZY64TFTWKH2HBEDAL6H6M5I; mba_muid=1622737340284425854305; wxa_level=1; cid=9; jxsid=16227380747145768316; webp=1; PPRD_P=UUID.1622737340284425854305; visitkey=44592692776291798; sc_width=1536; retina=1; shshshfp=da1991edde9e828d7156a859f37501f4; shshshsID=5b58f90af3edb0b9580307ca67cd2a8e_5_1622738702657; TrackerID=hpjtSzDj078cAQvLbSSW3AZTQARK7MCNV7pr1oNO_SJME7oAqoSTObzz1XhGQK0o55eWlY9apyMRDsr4FdraL34h1-AleLRuPVVR_iY01H14fxb30a6lyrqDxCJG-hL0; pt_key=AAJguQc0ADDLULr29TRRH1vT7VQn_3pGMmQoCU-_Ztyjus1U22D1HRcSznjAPTbKCf1WvALghPQ; pt_pin=%E5%80%BE%E5%9F%8E%E4%B8%B6hz; pt_token=4g63km04; pwdt_id=%E5%80%BE%E5%9F%8E%E4%B8%B6hz; sfstoken=tk01md4d91c39a8sMiszeDNraWhCJuofR/y7V0WN+EfOTexRWWflOz+idpe3uwTlYqdJGHD8KbGRWBmIWPA1pK3E3H5o; wqmnx1=MDEyNjM3M3BtLkpvaW4mODQxMG81bmQudWk1cGkzTWUpZTQgIC8gLjNGN2YyMUVPSCg%3D; __jdb=76161171.7.1622737340284425854305|1.1622737340; mba_sid=16227380444398269644359411836.6; __wga=1622738748889.1622738075952.1622738075952.1622738075952.3.1; jxsid_s_t=1622738748972; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action',
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE && process.env.JD_COOKIE.split('&') && process.env.JD_COOKIE.split('&').length > 0) {
  CookieJDs = process.env.JD_COOKIE.split('&');
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
console.log(11)
