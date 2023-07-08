/******************************
脚本功能：起伏解锁会员
脚本作者：baby568
更新时间：
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
#起伏解锁会员
^https:\/\/api\.risingfalling\.com\/api\/vip\/detail url script-response-body 
[mitm] 
hostname = api.risingfalling.com
*******************************/

var obj =  JSON.parse($response.body);

obj.body.isVip = true;
obj.body.vipType = "VIP";

$done(JSON.stringify(obj));
