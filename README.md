boilerplate
===========

Bootstrapで静的サイトを作るための準備をGruntですぱっとしたい。Bootstrap, jqueryのダウンロード、ディレクトリ構成の準備まで。

## Command

1. `git clone git@github.com:s12bt/boilerplate.git`
2. `npm install`
 - install grunt, jquery, bootstrap
3. `grunt scaffold`
 - assets/bootstrapの.gitを削除
 -- twb/bootstrapレポジトリとの関係性を切る
 - lessファイルのコンパイル
 - jqueryファイルをnode_modules/からassets/jqueryに移動
3. `grunt`
- ファイルを監視を開始
- localhost:8000で接続


## Usage
```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Boiler template</title>

    <link href="assets/bootstrap/dist/bootstrap.css" rel="stylesheet">
    <link href="assets/bootstrap/dist/bootstrap-theme.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <script src="assets/jquery/jquery.min.js"></script>
    <script src="assets/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="assets/js/script.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
  </body>
</html>
```

## ディレクトリ構成
`grunt scaffold`を打った時点でのディレクトリ構成
```
├── README.md
├── Gruntfile.js
├── package.json
├── assets
│   ├── bootstrap
│   ├── jquery
│   ├── less
│   │   └──style.less
│   ├── css
│   │   └──style.css
│   ├── img
│   │   └──logo.png
│   └── js
│       └──script.js
├── node_modules
└── index.html
```