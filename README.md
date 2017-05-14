# ReactNative采坑之旅
- 常见错误
1、react native - expected a component class, got [object Object]
该错误可能是你引用了小写的组件，组件首字母一定要大写，例如：`<view>   </view> `这样的写法是错误的，正确写法：`<View>   </View>`
[![错误信息](http://ww3.sinaimg.cn/large/006tNbRwly1ffl85gtfsxj30ki128wiz.jpg "错误信息")](http://ww3.sinaimg.cn/large/006tNbRwly1ffl85gtfsxj30ki128wiz.jpg "错误信息")

2、RawText "XXX" must be wrapped in an explicit <Text> component
`XXX`行文本必须包装在一个明确定义<Text></Text>组件里。

