/******************************
脚本功能：元气壁纸解锁永久会员
脚本作者：baby568
更新时间：2023-07-06
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
#元气壁纸解锁永久会员
^ url script-response-body 
[mitm] 
hostname = 
*******************************/
var body = $response.body;
var obj =  JSON.parse(body);



$done(body);
