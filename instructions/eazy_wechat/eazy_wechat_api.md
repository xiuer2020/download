# EasyWeChat\Factory
$app = Factory::officialAccount($config) => appInstance
// 公众号
$app = Factory::miniProgram($config) => appInstance
// 小程序
$app = Factory::openPlatform($config) => appInstance
// 开放平台
$app = Factory::work($config) => appInstance
// 企业微信
$app = Factory::openWork($config) => appInstance
// 企业微信开放平台
$app = Factory::payment($config) => appInstance
// 微信支付

# EasyWeChat\Factory创建的appInstance
