---
sort: 4 #サイドバーの順番
---

# Tips

lab.jsでオンライン実験・調査を作成する際に有用な情報をこちらにまとめます。

## 「Study Information」の変更

デフォルトの状態ではプログラム名は「study-XXXX(日時).json」という形式となっています。ファイル冒頭の「Study」は「Study Information」の「Title」を変更することで変えることができます。左上のメニューの「一番右側のアイコン」をクリックし，「Title」を任意の名前（flanker_taskなど）に変更してください。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1d3af05b-1953-4e92-8f31-d7a3eef75367/Untitled.png)

## 実際の実験に向けた準備
ここまでで紹介したオンライン実験とオンライン調査では，課題や尺度の作成のみを扱っていました。実際に実験や調査を実施しようとする場合には，以下の要素を追加する必要があるでしょう。

 * 事前説明
    * 実験・調査の概要，所要時間，リスクと利益などに関する事前説明文
 * インフォームドコンセントの取得
    * 事前説明を読んでもらった後にインフォームドコンセントを取得する
 * 教示
    * 実験・調査で参加者がどのように振る舞うのかを説明する
 * 終了画面
    * 終了画面で実験・調査後にウィンドウを閉じるようメッセージを表示したり，クラウドソーシングなどを利用した場合は確認コードなどの表示

教示は説明文の作成と同様に「Page HTML」を利用すれば作成できるでしょう。教示には必要に応じて画像（image）を追加するとわかりやすいでしょう。


事前説明・インフォームドコンセントの取得については以下のページをご覧ください。

[事前説明とインフォームドコンセントの取得](https://labjs.yucis.net/43061891302c4916b35fad35357891ff)


```note
#### オンライン実験と教示
オンライン実験を行う場合，教示は実験室実験よりも丁寧に行う方がよいでしょう。オンライン実験では，実験室実験と異なり，口頭での追加説明や質問受け付けができないため，画面上の教示のみで参加者に行ってもらいたい行動を十分に理解してもらう必要があるためです。そのため，教示は文章だけでなく画像や動画を用いるとよいでしょう。また，教示以外の工夫として練習試行の導入も有効です。
```

###  教示画面の作成

ここでは，[フランカー課題](./2_flanker.html)に教示画面を追加してみます。基本的には，[説明文の作成](./3_questionarrie.html#説明文項目の作成)と同様です。

 1, 左コラムの「＋」をクリックし，「Page HTML」を追加します。
 2. 「Page」を「Inst」に変更します。
 3. 「Content」の「Title」には「フランカー課題」，「Text」には，「この実験では「＜」または「＞」が５つ並んで呈示されます。 中央が「＜」の場合は「fキー」を，「＞」の場合は「jキー」を押してください。」と入力してください。
 4. 一番下の，「Continue→」は「始める→」に変更してください。

「Page HTML」を選択した時に右側に表示される画面

以下が入力例です。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a6e8e4d-aef2-4624-81a5-9c739db1c4e0/Untitled.png)

実験を実行すると以下のような教示画面が呈示されます。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b7c7cfa-48f5-4664-a878-54e0d4dcdfb4/Untitled.png)

###  終了画面の作成

実験終了時の画面を作成しましょう。作成の仕方は教示画面と同じです。「Page HTML」を新たに追加したら，以下のように入力してください。

- Title「Thanks」
- 「ありがとうございました。」
- 「これで実験は終了です。以下の「結果のダウンロード」ボタンを押すと結果をダウンロードできます。」
- 「結果のダウンロード→」

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f480e2be-cb60-470a-acbf-c71d28361edf/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f480e2be-cb60-470a-acbf-c71d28361edf/Untitled.png)

### オフラインで実行する

実験プログラムをインターネットが繋がっていないパソコンで実行する方法があります。左上のメニューの「フロッピー」アイコンの横の「▼」をクリックし，メニューから「Offline data collection」を選択します。実験プログラムを「zipファイル」形式でダウンロードすることができます。

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8ed61abc-d784-44bc-ae87-a17bb806bbad/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8ed61abc-d784-44bc-ae87-a17bb806bbad/Untitled.png)

圧縮ファイルを解凍するとフォルダの中に「Index.html」というファイルがあります。このファイルをクリックすると，ネットが繋がっていない環境で実験を行うことができます。

## 結果の確認と前処理

出力された「csvファイル」は「エクセル等の表計算ソフト」で開き，確認することができます。日本語が文字化けした場合には，一度テキストエディター（メモ帳）等で開き，エクセルにコピーすると文字化けがなおります。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff3316e0-715f-4f36-bdcd-5dc4201cf95f/Untitled.png)

出力されたCSVファイルを表計算ソフトで開いた時の表示例

A列目の「sender」には，画面の情報が出力されています。「fixation」「stimulus」「post_trial_gap」の順で，その後にシーケンスの「trial」で次の試行に移ります（sender_idも同じ構造になっています）。

G列目の「duration」では，各画面の呈示時間が出力されています。「fixation」画面は「500ms」，「post_trial_gap」画面は「500ms」の時間が設定されていますが，ほぼ正確に呈示されていることがわかると思います。「stimulus」は反応までの時間が出力されています。反応時間の結果を分析するときは，「Sender」列の「stimulus」の「duration」の値を集計することになります。

実験参加者が正しく文字の色と対応する反応キーを押していたかは，I列の「resp」とJ列の「response」の値を比較することで判断することが出来ます。２つの値が一致しているときは「正答」，不一致の時は「誤答」です。

## 反応の正否を結果ファイルに出力する

上記のように，結果ファイルから反応の正否を確認することも出来ますが，実験プログラム上で正否を判断し，結果ファイルに出力するようにした方が結果の分析は簡単です。

左側のコラムから「stimulus」を選択し，上側のメニューから「Behavior」を選択します。反応キーの割り当てを設定した「Responses」の中に「Correct response」という入力欄があります。ここに，反応に関する変数を指定することで，文字色と反応キーが一致しているかを判断し，正解か不正解かを結果に出力してくれます。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/092f5006-ed89-4d76-816a-26513fd3a1b4/Untitled.png)

以下のように入力します。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dfc206cc-5b02-4c88-9922-5df5e7040239/Untitled.png)

左側のメニュー「stimulus」を選択→「Behaviorに変更」すると表示される

「Responses」の「label」と「parameters.resp」の値は一致させる必要があります。今回の場合はいずれも「left」か「right」のどちらかなので，一致しているかしていないかを論理式により判断することが出来ます。結果ファイルの「correct」の列には，一致していれば「True」が，不一致の場合には「False」が出力されます。

以下のように，G列の「correct」，H列の「correctResponse」が結果ファイルに追加されます。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3001500b-a0ac-4da1-979e-cc98bf4fd8c1/Untitled.png)

## コンソールによるエラーの確認方法
うまく動かない場合には，どのようなエラーが生じているのかを調べる必要があります。デベロッパーツールを利用すると，どのようなエラーが生じているのを知ることができます。ブラウザによって起動方法が異なります。

 * Google Chromeの場合
    * 右クリックから「検証」を選ぶとデペロッパーツールが起動します
    * デペロッパーツールのタブから「console」を選ぶとJavaScriptコンソールが立ち上がります
    * もし，JavaScriptのエラーが起きている場合にはコンソールにエラーの内容が表示されます

## lab.js Builderによる変数の確認
lab.js Builderでの実験・調査の動作テスト中はデータを途中で確認することができます。テスト動作中の右下にあるボタン（≡）をクリックすると，現在のデータが表示されます。

<img src='./image/2021-08-27-22-01-19.png' width='80%'>


以下のように現在までのデータが表示されるので，意図したような変数の値になっていない場合などは，こちらも確認してみるとよいでしょう。

<img src='./image/2021-08-27-22-02-04.png' width='80%'>