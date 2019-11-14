//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
        id: 1,
        name: '张三',
        cars: [{
            id: 1,
            name: '奔驰'
          },
          {
            id: 2,
            name: '宝马'
          }
        ]
      },
      {
        id: 2,
        name: '李四',
        cars: [{
            id: 3,
            name: '卡迪拉克'
          },
          {
            id: 4,
            name: '英菲尼迪'
          },
          {
            id: 5,
            name: '马自达'
          }
        ]
      },
      {
        id: 3,
        name: '王五',
        cars: [{
          id: 6,
          name: '飞度'
        }]
      }
    ]
  },

  onLoad: function() {

  }
})