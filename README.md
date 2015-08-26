boilerplate
===========

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


## メモ
公開に必要なファイルは、作成したhtmlファイルとassets以下だけ。
