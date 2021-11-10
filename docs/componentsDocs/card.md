# Card
卡片组件
### 实例;
</br>
<z-card imgSrc="/vue.png" summary="测试"></z-card>

### 代码
```html
<z-card imgSrc="/vue.png" summary="测试"></z-card>
```
### Attributes
| 参数      | 说明         | 类型        | 是否必要 | 默认值 |
| --------- | ------------ | ----------- | -------- | ------ |
| width     | 卡片宽度     | Number      | false    |        |
| imgSrc    | 图片资源地址 | String      | true     |        |
| imgHeight | 图片高度     | Number      | false    |        |
| summary   | 卡片概述     | String/Slot | false    |        |
| footer    | 卡片底部     | Slot        | false    |        |