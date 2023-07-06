/******************************
脚本功能：奶由壁纸
脚本作者：baby568
更新时间：2023-07-06
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
#奶由壁纸解锁vip
^https:\/\/nz-api\.duitang\.com\/account\/me\/ url script-response-body https://raw.githubusercontent.com/baby568/QX/main/milkBy.js
[mitm] 
hostname = nz-api.duitang.com
*******************************/
var body = $response.body;
var obj =  JSON.parse(body);
obj.data.vip = true;
body = JSON.stringify(obj);
$done({body});
