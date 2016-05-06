# babel-express-template
## 說明
因為 AWS EB 還不支援 NodeJS 6 ，所以建立這個樣版讓專案方便在 EB 上運行

## 使用方法
```bash
npm install -g gulp-cli babel-cli
npm install
gulp watch
```

## 檔案路徑
├── build                  輸出結果
│   └── controllers
├── public                 靜態檔案
│   ├── css
│   ├── images
│   └── js
├── src                    ES6 原始碼
│   └── controllers
└── views                  共用views
