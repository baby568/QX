/******************************
脚本功能：元气桌面壁纸
脚本作者：baby568
更新时间：2023-07-06
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
#元气桌面壁纸解锁会员
^https:\/\/mobile-ios-wallpaper-api\.zhhainiao\.com\/v1\/user\/info url script-response-body https://github.com/baby568/QX/blob/main/weather.js
[mitm] 
hostname = mobile-ios-wallpaper-api.zhhainiao.com
*******************************/
var body = $response.body;
var obj =  JSON.parse(body);

var vipInfo = {
  "vip_ex_date" : 32503338000,
  "vip_type" : "13"
};
obj.user_info.permission_vip_info = [vipInfo], obj.permission_vip_info = [vipInfo];
body = JSON.stringify(obj);
$done({body});
