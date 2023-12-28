# 注釈を記述する

GROWI では、注釈 (脚注) を記述できます。

注釈を追加すると、ページの最下部に表示されます。

## 注釈の書き方

- 参照
  - `[^1]` のように、注釈への参照を追加したい位置に数値記述し、注釈文章を `[^1]:` とコロンを記述して書くことができます。
  - `[^longnote]` のように、注釈には文字列の利用もできます。
  - 注釈の参照位置の `[^1]` と注釈文章の `[^1]:` を両方記述しないと、注釈として機能しません。

- ブロック記法
  - `[^longnote]:` の後に続く注釈文章で、インデントを付ける事で複数ブロックの内容を注釈文にできます。（下記参考を参照）

注釈番号は、ページ内での連番が自動で振られます。

### 参考

<img :src="$withBase('/assets/images/footnote.png')" alt="footnote">


```markdown
## 注釈
注釈を設定すると、ページ最下部にその内容が展開されます。

脚注への参照[^1]を書くことができます。

長い脚注は[^longnote]のように書くことができます。

[^1]: 1つめの脚注への参照です。

[^longnote]: 脚注を複数ブロックで書く例です。

    後続の段落はインデントされて、前の脚注に属します。

```

上記の記述を GROWI 記事に貼りつけると、画像のように注釈（脚注）を設定できます。