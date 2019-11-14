# YF_weapp_wxs_demo
微信小程序wxs的简单应用

## 案例分析
张三、李四、王五，各自分别都有数量不等的车，现在需要列表显示名字及他们拥有车的数量，
list数据结构如下，当我们使用wx:for进行显示时，发现个人对象里面包含车辆对象数组，
我们发现人名好现实，但是车辆数量不方便统计，这时使用wxs就能很好的解决

```
list: [{
        id: 1,
        name: '张三',
        cars: [{
            id: 1,
            name: '奔驰'
          },
          ......
        ]
      },
      ......]
```

```
// index.wxml中使用
<wxs module="m">
      var getCarCount = function(array) {
        var count = 0;
        for (var i = 0; i < array.length; ++i) {
          count++;
        }
        return count;
      }
      module.exports.getCarCount = getCarCount;
</wxs>
<view class="gray-color">拥有{{m.getCarCount(item.cars)}}辆车</view>
```


在wxml使用如上代码进行统计即可





