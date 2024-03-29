# ページを一括削除する

:::warning
ページを一括で削除するためには、検索機能をセットアップする必要があります。セットアップ方法は、[こちら](/ja/admin-guide/management-cookbook/setup-search-system)をご参照ください。
:::

1. 検索バーに削除したいページに関するキーワードを入力します。

    <img :src="$withBase('/assets/images/enter-keywords.png')" alt="enter-keywords">
1. 検索結果が表示されるので、削除したいページのチェックボックスにチェックを入れます。

    <img  :src="$withBase('/assets/images/check-the-checkboxes.png')" alt="check-the-checkboxes">
1. Delete ALL ボタンを押します。

    <img  :src="$withBase('/assets/images/click-deleteall.png')" alt="click-deleteall">
1. ダイアログに表示された削除するページの一覧を確認し、Delete page ボタンを押します。

- 「Delete completely」にチェックを入れると、ゴミ箱を経由せずに完全削除が実行されます。
- 削除権限がないページの削除はスキップします。

    <img  :src="$withBase('/assets/images/delete-page-dialog.png')" alt="delete-page-dialog">
