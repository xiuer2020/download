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
`通过->访问`
auth->session($code)
获取openid和session_key
encryptor->decryptData($session_key, $iv, $encryptedData)
解析加密数据
tokens()->delete();
撤销所有令牌
createToken('token_name')->plainTextToken
访问token数据


