# Custom rate limitの設定

GROWIでのAPIのrate limitについて紹介します。

## 概要

エンドポイント毎、ユーザー(ゲストユーザーの場合はIP)毎にレート制限ウィンドウ(秒)あたりの、最大リクエスト数を設定できます。
レート制限ウィンドウは60秒で固定の値になっています。
レート制限ウィンドウ内に同一ユーザーにより最大リクエスト数を超える回数のリクエストがあった場合は `419 too many requests` のエラーを返します。


### ログイン済みユーザーの場合

ログイン済みユーザーの場合、制限をかけるためのkeyは**エンドポイント**と**リクエストメソッド**と**ユーザーID**を含めた文字列のハッシュ値になります。同じIPアドレスからのリクエストもユーザーごとに区別できます。

### 未ログインユーザーの場合

未ログインユーザーの場合、制限をかけるためのkeyは**エンドポイント**と**リクエストメソッド**と**IPアドレス**を含めた文字列のハッシュ値になります。この時、最大リクエスト数には、1IPアドレス当たりの想定人数をかけた値が利用されます。1IPアドレス当たりの想定人数は、デフォルトでは5人/ipとなっています。1IPアドレス当たりの想定人数は、環境変数を用いてエンドポイントとメソッドごとにカスタマイズできます。

## デフォルトの設定


エンドポイントにはデフォルトで下の表の制限がかけられています。

| 時間(秒) | 最大リクエスト数(回) | IPアドレス当たりの想定人数 |
| -------- | ---------------------- | -------------------------- |
| 60       | 500                    | 5                          |


### 初期値がカスタマイズされているエンドポイント

その他、制限が必要なエンドポイントには以下の設定ファイルによって、デフォルトでカスタマイズされた初期値が制限として設定されています。

<https://github.com/weseek/growi/blob/master/packages/app/config/rate-limiter.ts>

## 制限のカスタマイズ

デフォルトの制限を上書きして、カスタイマイズするためには環境変数を用いて設定します。

### 設定例

環境変数で設定する項目は以下の4つです。

- エンドポイント(必須)
- リクエストメソッド
- レート制限ウィンドウ当たりの最大リクエスト数(必須)
- 1IPアドレス当たりの想定人数

下のように環境変数を設定できます。

``` bash
API_RATE_LIMIT_[KEY]_ENDPOINT=/_api/v3/foo // エンドポイント
API_RATE_LIMIT_[KEY]_METHODS=GET,POST // リクエストメソッド
API_RATE_LIMIT_[KEY]_MAX_REQUESTS=10 // レート制限ウィンドウ内の最大リクエスト数
API_RATE_LIMIT_[KEY]_USERS_PER_IP=2 // 1IPアドレス当たりの想定人数
```

リクエストメソッドの以外の設定は任意です。設定されていない場合、そのエンドポイントに対するすべてのメソッドに対して制限がかけられます。1IPアドレス当たりの想定人数は、設定されていない場合はデフォルト値の5が設定されます。

`[key]`の部分は任意の文字列です。ただし、同じエンドポイントに対して制限が設定されていた場合、`[key]`の部分をin-placeアルゴリズム(JavaScriptのsort()メソッド)でソートしたときに、後に来るkeyの設定を優先します。

``` bash
API_RATE_LIMIT_010_FOO_ENDPOINT=/_api/v3/foo
API_RATE_LIMIT_010_FOO_METHODS=GET,POST
API_RATE_LIMIT_010_FOO_MAX_REQUESTS=10
API_RATE_LIMIT_010_FOO_USERS_PER_IP=2
```

このように環境変数を設定すると、以下のように制限が適用されます。

- ログイン済みユーザーの場合

`/_api/v3/foo`というエンドポイントに対して、`GET` `POST`のリクエストを60秒間に11回以上送ると11回目以降はエラーが発生しリクエストを送ることができなくなります。60秒が経過すると、再びリクエストを送ることができるようになります。

- 未ログインユーザーの場合

`/_api/v3/foo`というエンドポイントに対して、`GET` `POST`のリクエストを同一IPアドレスから21回以上送ると、21回目以降はエラーが発生しリクエストを送ることができなくなります。60秒が経過すると、再びリクエストを送ることができるようになります。


### 正規表現を用いた環境変数のカスタマイズ

``` bash
GET '/62df87c8539c3090b8cc7621' // ページの閲覧
GET '/share/62e2256f19e932f82eebe830' // 共有ページの閲覧
```

上のような、可変的なエンドポイントの制限は正規表現と環境変数を用いて制限をカスタマイズできます。

### 設定例

``` bash
API_RATE_LIMIT_010_SHARE_ENDPOINT_WITH_REGEXP=/share/[0-9a-z]{24}
API_RATE_LIMIT_010_SHARE_METHODS=GET
API_RATE_LIMIT_010_SHARE_MAX_REQUESTS=20
API_RATE_LIMIT_010_SHARE_USERS_PER_IP=2
```

