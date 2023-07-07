/******************************
脚本功能：淘小说解锁vip
脚本作者：baby568
更新时间：2023-07-07
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
#淘小说解锁vip
^https:\/\/tybook\.ios\.itaoxiaoshuo\.com\/auth\/account url script-response-body https://raw.githubusercontent.com/baby568/QX/main/taoNovels.js
[mitm] 
hostname = tybook.ios.itaoxiaoshuo.com
*******************************/
var obj =  JSON.parse($response.body);

obj.data.isVip = obj.data.paymentUser = true;

$done(JSON.stringify(obj));
