---
sort: 4 #サイドバーの順番
---

# 補足

## 今回紹介しなかった大事なこと

- 保存するデータの追加・変更
- 参加者情報の取得
- 作成したコードをサーバーにアップロードしオンラインに公開する方法
- サーバーにデータを保存する方法

実用的なオンライン実験を作り，実施するためには，この辺の話をしないといけないのですが，もうあと 90 分あればな...という感じです。
また，サーバー関連の話が紹介できなかった理由として，手軽に利用できるサーバーが基本的に有料で，デモ・チュートリアルとして扱うことが難しいということも挙げられます。

上の 2 点については，`tutorial/goal` に保存されている `bis-bas.html` や `flanker.html` ，`exp/exp1_casual.html` を見ると，一応確認できるようにはしています（`exp/exp1_casual.html`については，[本資料の改変元](https://github.com/snishiyama/jspsych-tutorial-20210721-28)を参照のこと）。

サーバー周りの話は今回は紹介しませんが，試してみてもらうといいと思ったのは，[cognition.run](https://www.cognition.run) というサービスです。
西山が使ってみた感想は，超便利！です（しかも無料）。
特にびっくりしたのは，サーバーにデータを保存するためのコードを書かなくても勝手に保存してくれるという点です（通常は保存用のコードを書く必要がある）。
とはいえ，本番の実験で使って大丈夫なのかはよくわかりません。
まだ β 版（試用版）ということで，不測の事故もあるかもしれません。
データの守秘に関しては，サービス提供側がデータにアクセスするることはないと Privacy and Data Policy に書いてあったので，そこは大丈夫なんだと思います。
少なくとも課題作成のちょっとした練習やオンライン実験の体験にはいいと思いました。

他にも，google が提供する [Firebase](https://firebase.google.com) という基本無料のホスティングサービスがあります。
Firebase を使う場合は [国里先生が作成されたページ](https://kunisatolab.github.io/main/how-to-jspsych-firebase.html) が参考になると思います。
また，本 TWS の資料にも Github 上で実験を実施可能にする方法を紹介しています（[次ページ](4_web_exp.md)）。

## 実験作成ソフトウェアの紹介

jsPsych の他にも，オンライン実験の作成ツールは色々あります。

- [lab.js](https://lab.js.org)
- [PsychoPy](https://www.psychopy.org)
- [GORILLA](https://gorilla.sc)

lab.js と PsychoPy は無料で使えます。
ただし，オンラインで実施するためのサーバー代は必要です。
GORILLA は有料ソフトです。
有料な分，サポートは手厚いのかもしれません。

どのツールも GUI ベースで，基本マウスでポチポチして実験を作ることができます。
プログラミングが苦手な人にとってはこっちのほうがとっつきやすいかもしれません。
ただ，実験の手続きにちょっとこだわりポイントがあったりすると結局コードが必要になったりします。

lab.js については [山形大学 小林先生と大杉先生のチュートリアル](https://www.notion.so/lab-js-8496c3c67b384168b9e69f165ee06e16) がとても参考になります。

[oTree](https://www.otree.org) というツールもあります（無料）。
oTree はオンラインでの集団実験を主な対象としているツールです（個人間の相互作用のない実験も可能だとは思います）。
jsPsych や lab.js, PsychoPy は個人間の相互作用のない実験を作成するためのツールなので，集団実験を実施する場合には有力な選択肢となるツールです(GORILLA だと集団実験もできるみたいです)。
ただし，oTree での実験作成にはコードを書く必要があります。
[後藤先生のセミナー資料](https://akrgt.github.io/otree_2020titech/) がとても参考になります。

## 今後の発展に参考になりそうなサイト

- 西山の作ったいくつかのオンライン記事
  - [jsPsych による心理学実験作成チュートリアルまとめ](https://qiita.com/snishym/items/1e0511f8622282993ed1)
    - 最新の jsPsych に対応していない部分があるので注意。
  - [jsPsych のための javascript のキほん](https://zenn.dev/snishiyama/articles/99159c79dd02e824c148)

本番に近いコードを見るのが何より勉強になります。

- [jsPsych 公式サイト](https://www.jspsych.org/)
- [高橋先生の「キソジオンライン」](https://github.com/kohske/KisojiOnline)
- [国里先生の「jsPsych を用いた認知課題の作成」](https://kunisatolab.github.io/main/code_tips.html)
- [小林先生の「jsPsych チュートリアル」](https://www.notion.so/jsPsych-73cade0a2e044217aedf01b5845e8d4e)

[公式から jsPsych をダウンロード](https://github.com/jspsych/jsPsych/)（ページの右の方にある releases から）すると，サンプルコードが同梱されています（examples フォルダ内）。
サンプルコードはそれぞれのプラグインの使い方を確認するのにとても便利です。

## ご自身の研究プロジェクトで jsPsych を使う場合

研究プロジェクト用のフォルダを新しく作成して，公式からダウンロードした jsPsych をそこに保存してください。
[公式のリリースページ](https://github.com/jspsych/jsPsych/releases)を少しスクロールするとダウンロードリンクが見つかります（`jspsych-バージョン名.zip`）。
本チュートリアル用のフォルダに，ご自身の研究用のコードを追加することは**おすすめしません**。
また，ダウンロードした jsPsych フォルダの中に複数の研究プロジェクト用のフォルダを作成するのも**おすすめしません**。
研究プロジェクトごとに独立したフォルダ構成を作成したほうがいいと思っているからです。

以下，プログラミングの習熟度に応じて 2 通りの方法を示しています。
ただし，いずれの方法についても西山の個人的な好みであって，絶対に遵守しないといけないルールではないということに留意してください。

### プログラミング始めたばかり（ディレクトリやパスの仕組みがよくわかっていない）の場合

`jspsych` のフォルダ内に実験用のフォルダ（例えば `exp1`）を新しく作成してください。
そして，`examples` フォルダに入っているファイルの中から，自分が使いそうなプラグインの名前が入っているファイルを`exp1`にコピーします（今回のチュートリアルで使用したプラグインに対応するのは，`jspsych-html-keyboard-response.html`か`jspsych-survey-likert.html`）。
以下のようなフォルダの構成になります。

```sh
sample_proj
└── jspsych-6.3.1
    ├── css
    ├── examples
    ├── exp1 # 自分で追加。この中にhtmlファイルを作成。
    ├── extensions
    ├── jspsych.js
    ├── license.txt
    └── plugins
```

あとは，`<script></script>`に挟まれた`javascript`コードを編集していきましょう。
ただし，プラグインを追加するときのファイルの指定方法（パス）には注意しましょう。
追加したいプラグインに対応する example ファイル（`examples`内）の冒頭のコードを参照すれば基本的に大丈夫です。

### ディレクトリやパスの指定方法がわかる場合

まず，研究プロジェクト用のフォルダに実験用のフォルダを作成して，その中に公式からダウンロードした jsPsych を保存します。
そして，同じ階層に実験用の html を作成します。
上で紹介したように，`examples`フォルダ内のファイルをコピペしてそれをご自身の実験用のアレンジするのが楽だと思います。
ただし，html の最初のプラグインの読み込み部分でのパスの指定を編集する必要があります。

```sh
sample_proj
└── exp
    ├── exp1.html
    └── jspsych-6.3.1
```

このようなフォルダ構成がいいと思う理由は，このプロジェクトフォルダに分析用のフォルダや原稿用のフォルダを簡単に追加でき，データや実験・分析のスクリプトの公開の手間がかなり少なくなるからです（もう少し詳しい説明は改変元の [jspsych-tutorial-20210721-28](https://snishiyama.github.io/jspsych-tutorial-20210721-28/)のページをご参照ください）。

## デバッグ

プログラミングにバグはつきものです。
コードを一旦完成させていざ動かしても動かないことはよくあります。
jsPsych で書いた実験のコードにバグがある場合，html ファイルを開くとエラーが発生するタイミングで真っ白な画面でフリーズします。
書いたコードが上手く動いていないということはすぐに理解できるのですが，どういうエラーが発生したのかさっぱりわかりません（通常，プログラミングをしていてエラーが発生した場合，エラーメッセージは目の届く範囲に出力されます）。
実は，html ファイル（内の javascript）でエラーが発生した場合のエラーメッセージは，ブラウザの「javascript コンソール」で確認することができます。
ブラウザごとに javascript コンソールの開き方は異なります。
ここでは紹介しませんが，Google 先生に聞けばすぐに教えてくれるはずです。

以下の画像は，サンプルコードで発生させてみたエラーです（黄色で表示されている caution は無視してください）。
どういうエラーが発生しているかわかりますでしょうか？

![Safari の javascript コンソール](fig/javascript-console-safari.png)

`No plugin loaded for trials of type "html-keyboard-response"`とありますので，どうやら`html-keyboard-response` をコードで使用しているのに，プラグインとして読み込むのを忘れているようです。
html ファイルの先頭にプラグインを読み込むを追加すれば，このエラーは解決できそうです。

このように，バグを修正するためにはエラーメッセージを確認することが重要です。
今回の例のようにわかりやすいエラーメッセージがばかりではないですが，経験とともにいろんなエラーメッセージが理解できるようになって，修正点に対する勘も養われてくると思います[^1]。

[^1]: 経験を積めば，出来上がった瞬間からバッチリ回るコードを書けるようになる！とは言えないのがなんとも苦しいところですね。もちろん絶対数や解決までにかかる時間は減ってきます。



執筆者： 西山慧