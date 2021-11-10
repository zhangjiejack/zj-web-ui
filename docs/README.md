# 开始
### 安装zj-web-ui组件库
```bash
npm i zj-web-ui
```
### 引用组件库
> 在main.js 中引用组件库
```javascript
// 全部引入
import 'zj-web-ui/dist/css/index.css';
import ZUI from 'zj-web-ui';
Vue.use(ZUI);
```
```javascript
// 按需引入
import 'zj-web-ui/dist/css/demo.css';
import { Demo } from 'zj-web-ui';
Vue.use(Demo);
```
