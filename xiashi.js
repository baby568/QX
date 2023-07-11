
/******************************
脚本功能：夏时vpn破解
脚本作者：baby568
更新时间：2023-07-11
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
#夏时vpn破解
^https:\/\/xiashk\.com\/addressx5\/ url script-response-body https://raw.githubusercontent.com/baby568/QX/main/xiashi.js
^http:\/\/198\.18\.4\.132\/addressx5\/index\.html url script-response-body https://raw.githubusercontent.com/baby568/QX/main/xiashi.js
[mitm] 
hostname = xiashk.com,198.18.4.132
*******************************/

var obj =  JSON.parse($response.body);
obj.hand.vip = "0";

if (obj.tcp) {
  for(var item in obj.tcp) {
    if (item.vip) {
      item.vip = "0";
    }
  }
}

$done(JSON.stringify(obj));
