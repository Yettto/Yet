let url = "http://ip-api.com/json/?lang=zh-CN"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let citys = jsonData.regionName
    let isp = jsonData.isp
    let ip = jsonData.query
  body = {
    title: "节点信息",
    content: `IP信息：${ip}\n运营商：${isp}\n所在地：${emoji} ${country}-${city},${citys}`,
    icon: "bonjour",
           "icon-color": "#3A8FB7",
  }
  $done(body);
});

function getFlagEmoji(countryCode) {
      if (countryCode.toUpperCase() == 'TW') {
    countryCode = 'CN'
  }
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)

}
