boilerplate
===========

** todo: いろいろ触ってから更新してない。要Gruntfile.js確認 2015.2.16 **

Bootstrapで静的サイトを作るための準備をGruntですぱっとしたい。Bootstrap, jqueryのダウンロード、ディレクトリ構成の準備まで。

## Command

1. `git clone git@github.com:s12bt/boilerplate.git`
2. `npm install`
 - install grunt, jquery, bootstrap
3. `grunt scaffold`
 - jqueryファイルをnode_modules/からassets/jqueryに移動
 - assets/components/bootstrap/lessvariables.lessをassets/lessにbootstrap.variables.overrideとしてコピー
 - シンボリックリンク assets/components/bootstrap/lessvariables.less -> assets/lessにbootstrap.variables.override
 - lessファイルのコンパイル

3. `grunt`
- ファイルを監視を開始
- localhost:8000で接続

## ディレクトリ構成
`grunt scaffold`を打った時点でのディレクトリ構成
```
├── README.md
├── Gruntfile.js
├── package.json
├── assets
│   ├── components
│   │   ├──bootstrap
│   │   └──jquery
│   ├── less
│   │   ├──bootstrap.variables.override.less
│   │   ├──bootstrap.override.less
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

## boilerplate
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

    <link href="assets/components/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
    <link href="assets/components/bootstrap/dist/css/bootstrap-theme.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <script src="assets/components/jquery/jquery.min.js"></script>
    <script src="assets/components/bootstrap/dist/js/bootstrap.min.js"></script>
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

## メモ
公開に必要なファイルは、作成したhtmlファイルとassets以下だけ。
