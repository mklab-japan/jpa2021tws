---
sort: 5 #サイドバーの順番
---

# jsPsych課題でオンライン実験を行う方法

jsPsychを使ってオンライン実験をする場合は，サーバーを借りて実行・データ保存するホスティングが必要になります。以下を参考に，ご自身の目的にあった方法を選択ください。

|  サービス  |  設定方法 | 費用  |　実施の難易度（完全主観）　|
| ---- | ---- |  ---- |  ---- |
|  JATOS  |  [自分が管理するサーバーにJATOSを設置して実験実施(DigitalOceanを使う方法もある)](https://kunisatolab.github.io/main/how-to-jspsych-jatos.html)  |  レンタルサーバー代  |　初期設定をすれば利用は難しくない。サーバーの管理とJatosifyの知識が必要|
|  Pavlovia  |  [Pavloviaが管理しているサーバー上で実験実施](https://kunisatolab.github.io/main/how-to-jspsych-pavlovia.html) |  [有料](https://pavlovia.org/store)  |　サーバーの管理は不要。Gitに慣れていると難しくない |
|  Firebase  |  [自分で設定したFirebase上で実験実施](https://kunisatolab.github.io/main/how-to-jspsych-firebase.html)  |  大規模な運用でなければ無料  | サーバーの管理は不要。Firebaseの知識が必要|
|  Google Spreadsheet  |  [Google SpreadsheetのGASを使って実験実施](https://kunisatolab.github.io/main/how-to-jspsych-google-sheet.html)  |  大規模な運用でなければ無料  |サーバーの管理は不要。GASの知識が必要 |


# GitHub Pagesを使ってjsPsych課題をオンライン公開する方法

すぐに試すことが出来る方法として，以下では，GitHub Pagesを使ってjsPsych課題をオンライン公開する方法について説明します。

- まず，GitHubアカウントをお持ちじゃない方は，[GitHub](https://github.com/)にてアカウントを作成してください。
- GitHubアカウントを作成したら，右上の＋の横の下矢印を押して，「Import repository」をクリックします。

![](fig/01.png)

- 以下のようなページがでてきたら，　https://github.com/ykunisato/template-jsPsych-task　をコピーして，オレンジの枠内にペーストします。そして，青の枠内好きなリポジトリ名をつけて，「Begin import」をクリックします。これで，国里のリポジトリにあるjsPsychの基本的な設定がなされたリポジトリがインポートされます。

![](fig/02.png)

- 以下のようになったらインポート完了です。

![](fig/03.png)


- インポートするとリポジトリは以下のようになります（jatos用HTMLなど，今回に関係のないファイルも含まれていますが，気にならず・・・）。

![](fig/04.png)

- このリポジトリのブラウザ画面上で，ピリオド(.)をタイプするか，URLのgithub.comをgithub.devに変更します。すると，ブラウザ上で以下のようなVisual Studio Codeの編集画面になります（コードの編集がブラウザ上でも実行できます！）

![](fig/05.png)

- このリポジトリではHTMLとjsを分けているので，TWSで作成したjavascriptのコードをtask.jsに上書き保存をしてください（インポートしたリポジトリのjsファイルにはストループ課題がはいっていたので，TWSのフランカー課題を上書きします）。その際に，別途，以下のタイムラインを追加ください。

```
var timeline = [inst_flanker, flanker_task];
```
![](fig/06.png)


- 変更を加えると，オレンジで囲った部分のように，変更したファイルがあることが表示されます。GitHubは，Gitというバージョン管理ソフトを使ったリポジトリです。
- ファイルに変更を加えた場合は，変更についてのメッセージを加えたコミットをします。まず，オレンジで囲われた部分をクリックすると，上に何か入力欄がでてきます。この青で囲われた入力欄に変更についてのメッセージをいれます（日本語でも問題ありません）。そして，上の赤で囲われたチェックボックスをクリックします。これで，変更がメッセージを含めて保存され，リポジトリが更新されました。

![](fig/07.png)

- リポジトリが更新されたか確認するために，リポジトリに戻ります。左上の角をクリックして，「Go to Repository」をクリックします。

![](fig/08.png)

- リポジトリに戻って，task.jsが変更されているか確認します。

![](fig/09.png)

- それでは，作った課題をGitHub Pagesで公開してみましょう。「Settings」（赤枠）をクリックして，左下の「Pages」（緑枠）をクリックしてください。GitHub Pagesというページが開きます。

![](fig/10.png)

- Sourceのところで，「main」, 「/root」を選んで，「Save」をクリックします。

![](fig/11.png)

- 以下のようにURLが出てきたら，成功です。URLをコピーします。

![](fig/12.png)

- 上でコピーしたURLに”task.html”を追加すると（https://・・・/task.html），以下のようにオンライン上で課題を実施できます。

![](fig/13.png)

## GitHub Pagesで公開したオンライン課題のデータの保存

 GitHub Pagesでは，データを保存できないので，実際にウェブ実験をする場合は，サーバーを借りたりする必要があります。ただ，GitHub PagesからデータをDropboxに保存させる方法もあります。若干リスクのある方法ですので，[Saving jsPsych data to your Dropbox folder](https://kywch.github.io/jsPsych-in-Qualtrics/save-dropbox/)を読んだ上で利用ください。


 執筆者： 国里愛彦