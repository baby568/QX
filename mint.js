/******************************
脚本功能：薄荷壁纸解锁vip
脚本作者：baby568
更新时间：
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
#薄荷壁纸解锁vip
^https:\/\/mars-prod\.whalean\.com\/hestia-service\/api\/wpUser\/getUserInfo url script-response-body https://raw.githubusercontent.com/baby568/QX/main/mint.js
[mitm] 
hostname = mars-prod.whalean.com
*******************************/
var body = $response.body;
var obj =  JSON.parse(body);

obj.data.memberType = 1;
obj.data.memberEndTime= 32503338000;
obj.data.isMember = 0;

body = JSON.stringify(obj);
$done(body);
