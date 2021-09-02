# jsPsych コース

{% include list.liquid %}

## 今回のチュートリアルの目的

- jsPsych を使った簡単な心理実験・調査を作成できるようになる

心理実験の例としてフランカー課題を扱います。
調査の例として使用する質問紙尺度は何でも良かったのですが，ふと，日本語版 BIS/BAS（高橋他, 2007[^1]）を使うことにしました。

[^1]: 高橋 雄介・山形 伸二・木島 伸彦・繁桝 算男・大野 裕・安藤 寿康 (2007). Gray の気質モデル. パーソナリティ研究, 15(3), 276–289. https://doi.org/10.2132/personality.15.276

本チュートリアルおよび使用するスクリプトは本ページの左下の`main`と書かれたボタンを押してクリックして表示される`Download`というボタンから入手できます。

フォルダを解答（展開）しておいてください（[Windows での zip ファイルの展開方法［ページ後半］](https://www.pc-koubou.jp/magazine/39336)）。

## TWS に向けた事前準備

当日までに visual studio code (VScode) というエディタをインストールしておいてください（[公式サイト](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)）。
また，よければ Prettier という拡張機能も入れておいてください（[導入・有効化の参考になるサイト](https://ma-vericks.com/vscode-prettier/)）。
Prettier は書いたスクリプトをきれいに整形してくれる便利ツールです。

※もちろん，好みのエディタがある場合は，VScode をインストールする必要はありません。

```note
本資料は[「jspsych-tutorial-20210721-28」](https://snishiyama.github.io/jspsych-tutorial-20210721-28/) を一部改変したものです。
改変元のページには，jsPsych で取得したデータを R・Python で整理する方法についても紹介しています。
もし 収集したデータを分析に向けて整理するというのも重要な要素ですので，ぜひ目を通されることをオススメします。
```
