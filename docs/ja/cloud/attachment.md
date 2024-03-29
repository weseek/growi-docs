# 添付ファイル保存先

## GROWI.cloudで立ち上げたGROWIのファイル保存先について

<img :src="$withBase('/assets/images/ja/attachment_1.png')" alt="attachment_1.png">

- **【Hosted】GCP** : GROWI.cloud で用意している GROWI のファイル保存先です。
- **【Owned】GCP/AWS** : お客様に用意していただく GROWI のファイル保存先です。
  - 既に別インスタンスの GROWI にて利用されているファイル保存先を引き継ぎたいときなどは、こちらを選択してください。
  - **【Owned】GCP は現在準備中のためご利用できません。（2023/04/18　時点）**

### 1添付ファイルあたりのサイズ上限値について

#### ファイル保存先が`【Hosted】GCP`の場合

- ストレージオプションを
  - 契約中であれば `100 MB`
  - 契約中でなければ `15 MB`

#### ファイル保存先が`【Hosted】GCP`以外の場合

- `無制限` となります

## ファイル保存先の確認方法

<img :src="$withBase('/assets/images/ja/attachment_2.png')" alt="attachment_2.png">

1. アプリの**詳細ページ**にアクセスし、「ファイル保存先」を確認
2. ファイル保存先を変更される場合は右にある「編集」をクリック

## HackMDで編集中に添付ファイルをご利用される際の注意点

HackMD を有効にされており、HackMD で編集中に添付ファイルをご利用される場合、以下の事項にご注意ください。

1. HackMD で添付したファイルは、**GROWI が再起動すると消滅**してしまいます。
2. HackMD で添付したファイルは、GROWI のページ閲覧権限の設定が反映されず、**誰でも URL を知れればアクセス可能**になってしまいます。

## 「ファイル保存先」に指定したストレージにファイルを保存する場合
<!-- textlint-disable weseek/no-doubled-joshi -->
GROWI で添付ファイルをアップロードされる場合は、HackMD エディタではなく、ビルトインエディタで添付ファイルをアップロードしていただくことで「ファイル保存先」に指定したストレージにファイルを保存できます。
<!-- textlint-enable weseek/no-doubled-joshi -->
## 添付ファイルの移行について

- 移行前のファイルの保存先に AWS をご利用になられているお客様につきましては、移行先の GROWI.cloud 側でファイルの保存先に同様の AWS を設定することで、引き続きご利用いただくことが可能です。
- 上記に該当しない場合は、お手数をおかけいたしますが、移行先の GROWI にてファイルの再アップロードが必要となります。

## 起動中 GROWI アプリでの画像以外のファイルのアップロード方法
<!-- textlint-disable weseek/ja-no-mixed-period -->
`GROWI` の管理画面のアプリ設定で「ファイルアップロード」欄の「画像以外のファイルアップロードを許可」にチェックを入れ更新  
<!-- textlint-enable weseek/ja-no-mixed-period -->
<img :src="$withBase('/assets/images/ja/attachment_3.png')" alt="attachment_3.png">
