
/******************************
脚本功能：夏时vpn破解
脚本作者：baby568
更新时间：2023-07-11
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
#
^ url script-response-body 
[mitm] 
hostname = 
*******************************/

var obj =  JSON.parse($response.body);


$done(JSON.stringify(obj));
