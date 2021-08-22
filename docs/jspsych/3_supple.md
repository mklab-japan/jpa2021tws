# 補足

## 今回紹介しなかった大事なこと

- 保存するデータの追加・変更
- 参加者情報の取得
- 作成したコードをサーバーにアップロードしオンラインに公開する方法
- サーバーにデータを保存する方法

実用的なオンライン実験を作り，実施するためには，この辺の話をしないといけないのですが，もう 1 コマあればな...という感じです。
また，サーバー関連の話については，手軽に利用できるサーバーは基本的に有料なので，デモ用途で手軽に使えるものを用意できなかったというのも理由の一つです。

上の 2 点については，`tutorial/goal` に保存されている `bis-bas.html` や `flanker.html` ，`exp/exp1_casual.html` を見ると，一応確認できるようにはしています。

今回は紹介しませんが，試してみてもらうといいと思ったのは，[cognition.run](https://www.cognition.run) というサービスです。
私が使ってみた感想は，超便利！です（しかも無料）。
特にびっくりしたのは，今回紹介を回避したサーバーにデータを保存するためのコードを書かなくても勝手に保存してくれるという点です。
とはいえ，本番の実験で使って大丈夫なのかはよくわかりません。
まだ β 版（試作版）ということで，不測の事故もあるかもしれません。
データがサービス側にアクセスされることはないと Privacy and Data Policy に書いてあったので，そこは大丈夫なんだと思います。
少なくとも課題作成のちょっとした練習やオンライン実験の体験にはいいと思いました。

他にも，google が提供する [Firebase](https://firebase.google.com) という基本無料のホスティングサービスがあります。
Firebase を使う場合は [専修大学の国里先生が作成されたページ](https://kunisatolab.github.io/main/how-to-jspsych-firebase.html) が参考になると思います。

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
