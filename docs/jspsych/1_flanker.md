---
sort: 2 #サイドバーの順番
---

# Flanker task

フランカー課題については [この記事](https://blog.goo.ne.jp/hidefujita/e/827f96e7918dc44ed957863519cdeaaf) に簡単な説明があります。

刺激として今回は `<<<<<`, `>>>>>`, `<<><<`, `>><>>` の４つを使用します。参加者は真ん中の記号が`<`なら`f`キー，`>`なら`j`キーを押すこととします。

チュートリアルを通して，[このような課題](https://mklab-japan.github.io/jpa2021tws/jspsych/goal/flanker.html)が完成します。

## 刺激を一つ提示する

`docs/jspsych/start/` に保存されている `flanker.html` というファイルをエディタで開いてください。
右クリックでエディタアプリを指定して開くか，予め開いておいたエディタからファイルを選択することで開くことができます。
VScode の場合はファイルをドラッグ＆ドロップすることで開くことも可能です。

さて，`flanker.html` は初期状態で以下のようになっています。説明のために資料にはコメントを付け足しています。
`<!--ほげほげ-->` や `// ほげほげ` はそれぞれ `.html`，`.js` ファイルで実行時に処理されない部分になり，コードに関するコメントとして機能します。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- jsPsych関連ツールの呼び出し -->
    <script src="../jspsych-6.3.1/jspsych.js"></script>
    <script src="../jspsych-6.3.1/plugins/jspsych-html-keyboard-response.js"></script>
    <link rel="stylesheet" href="../jspsych-6.3.1/css/jspsych.css" />
  </head>
  <body></body>
  <script>
    // ここにjavascriptコードを書いて実験を作成する
    // 基本的にはここを編集すれば良い
  </script>
</html>
```

上で省略した`<script></script>` の間には以下のようなコードが書かれています。

```js
// 実験の設定変数の作成
var trial = {
  type: 'html-keyboard-response',
  stimulus: '<<<<<',
  choices: ['f', 'j'],
  post_trial_gap: 500,
};

// 設定をもとに実験を実行する関数
jsPsych.init({
  timeline: [trial],
});
```

javascript では，`var 変数名 =` で変数を宣言します。
`{}` はオブジェクト型（連想配列）になります。データ型の種類や詳細については [この記事](https://zenn.dev/snishiyama/articles/99159c79dd02e824c148) を参照してください。
javascript を書いているといろんなカッコ`{}`, `[]`, `()` を別々の用途で使うので，間違えないように注意してください。

この例のように，jsPsych では，実験（ここであれば 1 試行）の設定が指定された変数を作成（`var trial =` ）し，それを `jsPsych.init()` に入れることで実験として実行されます。
ここでは次の 3 つの点を設定しています。

- type：試行のタイプ。`html-keyboard-response` は，html 形式で刺激を指定し，キー入力を収集する試行
- stimulus：刺激。単に文字を提示する場合は文字列を指定すれば良い。
- choices：収集するキー入力。配列`[]` にキーの文字を指定する。
- post_trial_gap：試行終了後の空白時間。単位はミリ秒。

### ブラウザで開く

`flanker.html` をフォルダ上でダブルクリックすると，デフォルトのブラウザで開いて，`<<<<<` がブラウザの中央に表示されるはずです。

### 【演習１】

- 同じ試行を複数回実施してみよう
- 提示する刺激を変えてみよう

サンプルコードは `docs/jspsych/exercise/FL01_single_trial.html`

## 異なる刺激で複数試行実施する

それぞれの試行で提示される刺激が変わるようにします。
例えば，最初のコードを以下のように変えると，異なる刺激が提示される試行が一つずつ実施されます。

```js
var trial1 = {
  type: 'html-keyboard-response',
  stimulus: '<<<<<',
  choices: ['f', 'j'],
  post_trial_gap: 500,
};

var trial2 = {
  type: 'html-keyboard-response',
  stimulus: '>>>>>',
  choices: ['f', 'j'],
  post_trial_gap: 500,
};

jsPsych.init({
  timeline: [trial1, trial2],
});
```

それぞれの試行について別々の変数名がついていることに注意してください。

### 【演習２】

- 4 試行にしてみよう
- いろんな提示順序を試してみよう

サンプルコードは `docs/jspsych/exercise/FL02_four_trials.html`

## timeline_variables の導入

一つ前のセクションで複数試行の実施を試してもらいましたが，コピペの繰り返しであまり効率的な作業とは言えません。
さらに，コピペを繰り返していると，刺激以外の設定はすべて同じなので，コードが冗長になり全体像が見にくくなります。
実際の実験ではさらに試行数が増えるため，効率さやコードの見た目がかなりひどいことになることは想像に易いです。

これを回避するための方法として，`timeline_variables` と `jsPsych.timelineVariable()` を使うことが挙げられます。
任意のキーと値で構成されたオブジェクト `{キー：値}` の配列 `[]` を作成し，それを`timeline_variables` に指定します。
そして，試行変数の該当の設定を，`jsPsych.timelineVariable('キー')` としておきます。
こうしておくと，実験の実行時にキーに対応する値が試行ごとに順番に適用され，異なった刺激が提示されるようになります。

```js
var stims_flanker = [
  { stim: '<<<<<' }, // 「stim」は呼び出すためのキー
  { stim: '>>>>>' },
  { stim: '>><>>' },
  { stim: '<<><<' },
];

var trial = {
  type: 'html-keyboard-response',
  stimulus: jsPsych.timelineVariable('stim'),
  choices: ['f', 'j'],
  post_trial_gap: 500,
};

var block = {
  timeline: [trial],
  timeline_variables: stims_flanker,
};

jsPsych.init({
  timeline: [block],
});
```

なお，`timeline_variables` 等を使って変更できる設定は一つだけではありません。
例えば，以下のようにすれば，試行ごとに`post_trial_gap`を変更することも可能です。

```js
var stims_flanker = [
  { stim: '<<<<<', gap: 500 },
  { stim: '>>>>>', gap: 1000 },
  // 省略
];

var trial = {
  type: 'html-keyboard-response',
  stimulus: jsPsych.timelineVariable('stim'),
  choices: ['f', 'j'],
  post_trial_gap: jsPsych.timelineVariable('gap'),
};
```

### 【演習３】

- 2 つの刺激 `--<--`, `-->--` を新たに提示できるようにしよう

サンプルコードは `docs/jspsych/exercise/FL03_timeline_variables.html`

### 刺激のランダマイズ

ちなみに，`randomize_order: true` を足すと，適用するオブジェクトの順番をランダムにすることができます。

```js
var block = {
  timeline: [trial],
  timeline_variables: stims_flanker,
  randomize_order: true,
};
```

## 注視点

実験ではしばしば注視点が刺激（系列）の前に提示されます。
注視点を導入するためには，それ用の変数を作成し，`timeline` 配列に入れればいいです。

```js
var fixation = {
  type: 'html-keyboard-response',
  stimulus: '+',
  choices: jsPsych.NO_KEYS, // どのキー入力も受け付けない
  trial_duration: 500, // 提示時間のための設定項目（単位はミリ秒）
};
```

なお，`fixation` 変数では，これまでの`trial` 変数とは設定している項目が少し変わっています。

- `post_trial_gap` が指定されていません。
  - この場合，既定値の 0 が適用されます。
- `trial_duration` が設定されています。
  - これまでの例では指定されていませんでした。指定しない場合，既定値の 0 が適用されます。

このように，実は試行の変数に設定できる項目は色々あります。
設定しなかった場合は jsPsych 側で用意されている既定値が適用されます。
また，設定項目は`type` によっても変わります（質問紙用の`survey-lickert`を見るとよくわかる）。
詳しくは，jsPsych の公式サイトを参照してください。

### 【演習４】

- 注視点を毎試行提示してみよう
- 注視点を最初だけ提示してみよう

_Hint!_ これまで作ってきたコードには，`timeline` の設定箇所が２つあります。

サンプルコードは `docs/jspsych/exercise/FL04_fixation.html`

## 文字サイズを変更する［時間があれば］

jsPsych の標準の文字サイズは刺激提示用としてはいささか小さく，大きくしたいこともあると思います。

### `timelineVariable()` を使わない場合

`timelineVariable()`を使わない場合，文字サイズは以下のようにして変更することができます。

```js
var trial = {
  type: 'html-keyboard-response',
  stimulus: '<p style="font-size: 48px"><<<<<</p>',
  choices: ['f', 'j'],
  post_trial_gap: 500,
};
```

`<p style="font-size: 48px"></p>` という html タグで刺激を囲いました（html タグにも`<`と`>`を使用するのでどこまでが刺激か見にくいですね...）。
`style=`に続けて文字の装飾を変更できます。
ここでは文字サイズを変更したいので，`font-size` を指定しています。
`px`はピクセルという単位です。
他にも`cm`などを使うこともできます。

`style=`では，文字サイズ以外に文字の色や表示位置も指定することができます。
例えば，`<p style="font-size: 48px; color: red"><<<<</p>`とすると，提示色が赤色になります。
表示位置の変更方法については[この記事](https://qiita.com/snishym/items/bec56308c67922c3b3df)を参考にしてください。

### `timelineVariable()` を使う場合

さて，`timelineVariable()`を使う場合，２通りの方法で刺激の文字サイズを変更することができます。
どちらにしても上記の`html`タグを使用するのですが，適用方法が変わります。
個人的には２つ目のほうを推しています（好みの問題です）。

#### 1. timeline_variables 用の配列の文字列に直接タグを付与する

上で`timeline_variables`を紹介した節で導入した`stim_flanker`という配列の中身を以下のように変更します。
刺激用の文字列それぞれに対して，上で説明したタグを付与しています。
これで，残りの部分は変更することなく，提示時の文字サイズが大きくなります。

```js
var stims_flanker = [
  { stim: '<p style="font-size: 48px"><<<<<</p>' }, // 「stim」は呼び出すためのキー
  { stim: '<p style="font-size: 48px">>>>>></p>' },
  { stim: '<p style="font-size: 48px">>><>></p>' },
  { stim: '<p style="font-size: 48px"><<><<</p>' },
];
```

#### 2. 試行の実行時に html タグが付与されるようにする

文字サイズの変更は，試行用変数`trial`の`stimulus`を以下のように変更することでも可能です。
このコードでは，実行時に`jsPsych.timelineVariable('stim')`で呼び出された文字列に html タグを付与しています。

```warning
なお，timeline_varibles 用の`stims_flanker`配列の`stim`に指定している文字列に html タグを付与する**必要はありません**。
```

```js
var trial = {
  type: 'html-keyboard-response',
  stimulus: function () {
    return `<p style="font-size: 48px">${jsPsych.timelineVariable('stim')}</p>`;
  },
  choices: ['f', 'j'],
  post_trial_gap: 500,
};
```

なぜ `` stimulus: `<p style="font-size: 48px">${jsPsych.timelineVariable('stim')}</p>` `` ではなく，`function(){return ...}` という書き方になっているのかというと，`function()`で囲まないとうまく動かないからです（試してみてください）[^1]。

なお，`` `<p style="font-size: 48px">${jsPsych.timelineVariable('stim')}</p>` `` は`'<p style="font-size: 48px">' + jsPsych.timelineVariable('stim') + '</p>'` と同じように動作します（詳細は割愛します。[このサイトとかが参考になるかもしれません](https://jsprimer.net/basic/string/#concat)）。

[^1]: （jsPsych の動作の仕組みを理解している人向けの説明）`function(){}` を使用すると`jsPsych.init()`で実行しているときに，`jsPsych.timelineVariable('stim')`が評価されるので，`timeline_variables`がちゃんと適用されます。`function(){}`で囲まない場合は最初の読み込み時（=`jsPsych.init()`実行前）に`jsPsych.timelineVariable('stim')`が評価されてしまうので，`timeline_variables`が適用されません。

#### どちらを使うか？

個人的には，２つ目の方法を利用しています。
１つ目の方法だと，同じコードを繰り返し使用していて冗長なコードになっているからです。
いざ後でフォントサイズが変更したくなった際に編集が大変です[^2]。
とはいえ，どちらの方法でも同じように動作するので，お好みで選んでください。

[^2]: もちろん変数を使用することで回避可能です。

### 【演習５】

- 注視点の文字サイズを変更してみよう

サンプルコードは `docs/jspsych/exercise/FL05_font-size.html`

## 反応の正誤をデータに含める（任意のデータを保存する方法）［時間があれば］

このチュートリアルでは保存データの作成方法について紹介していません（質問紙尺度の作成でも紹介していません）。
というのも，jsPsych ではある程度の情報（提示された刺激や押されたキー，キー押しのタイミングなど）については自動で保存されるようになっているからです。
しかしながら，自動では保存されないが重要な情報もある場合も多いでしょう。
今回のフランカー課題では，「反応の正誤」や「条件」がそれに該当します。
「フランカー課題の反応の正誤を保存する」ことを題材に，任意の情報を出力データに追加する方法について紹介します[^3]。

[^3]: フランカー課題の反応の正誤は，必ずしも実験コード内で処理する必要はありません。正反応のキーが事後的に容易に確認できるので，出力されたデータから事後的に処理できます。とはいえ，実験コードか分析コードのいずれかでどうせ処理するのであれば，実験コード上で予め処理しておくのが楽だと思います。

### そもそも，データを手元の PC に保存する方法

本チュートリアルではここまでデータをファイルとして保存する方法について紹介していませんでした。
以下のように，`jsPsych.init()`に`on_finish:`からの３行のコードを追加することで**手元の PC**に csv 形式データを保存することができるようになります。
次節以降で紹介する内容を実施する前に，jsPsych がデフォルトでどのような情報を保存しているのかについてぜひ確認してみてください。

```js
jsPsych.init({
  timeline: [trial],
  on_finish: function () {
    jsPsych.data.get().localSave('csv', 'data.csv');
  },
});
```

```warning
本TWSが焦点とするオンライン実験では，手元のPCではなくサーバーにデータを保存する必要があります（オンライン実験に参加してくれた方の手元のPCにデータを保存しても仕方がないですよね...）。
とはいえ，[補足ページ](3_supple.md)でも言及しているように，オンライン実験用のデータの保存方法を紹介するには，今回のTWSでは時間が足りませんでした。
手っ取り早い方法として cognition.run を利用するという方法がありますので，試してみてください（[補足ページ](3_supple.md) を参照してください）。
```

### 反応の正誤を保存データに追加する方法

それでは本題です。
反応の正誤を保存するためには，正誤を判定するための正反応キーがわかっている必要があります。
真ん中に提示される`<`，`>`の向きによって正反応キーは決まるので，まず，それを取得します（ここではついでに正反応キーも保存します）。
そして，それが入力されたキーと一致しているのかについて判定し保存します。

試行の設定変数内に`on_finish`という設定項目を追加し，`on_finish: function(data){...}`の`...`の部分に必要なコードを書きます。
コードは以下のようにします。

```js
var trial_flanker = {
  type: 'html-keyboard-response',
  stimulus: jsPsych.timelineVariable('stim'),
  choices: ['f', 'j'],
  on_finish: function (data) {
    // その試行で正反応となるキー
    if (data.stimulus.includes('<<<<<') || data.stimulus.includes('>><>>') || data.stimulus.includes('--<--')) {
      data.key = 'f';
    } else {
      data.key = 'j';
    }
    // 正誤判定・保存
    data.correct = Number(jsPsych.pluginAPI.compareKeys(data.response, data.key));
  },
};
```

ポイントは４つです（if 文の処理については割愛します）。

1. `on_finish` に指定した処理は，（設定名の通り）試行の終了時に実行する処理を指定します。
2. `function(data){...}` とすることで，`{...}`内の処理でその試行のデータにアクセスできるようになります。提示された刺激には`data.stimulus`，入力されたキーには`data.response`でアクセスすることができます。
3. `data.stimulus.includes(...)`で刺激に`...`で指定した文字列が含まれているかを判定しています。判定結果に応じて，`f`か`j`を正反応キーとして`data.key`に保存しています。
4. `jsPsych.pluginAPI.compareKeys(data.response, data.key)`で入力されたキーと正反応キーを比較しています。この関数は真偽値（`true`か`false`）を返します。数値（`1`か`0`）に変換しておいたほうが正反応率を算出するときに楽なので，ここでは`Number()`を使って変換しています。その結果を`data.correct`に保存しています。

```tip
`data.stimulus`や`data.response`の`stimulus`や`response`は保存されるデータの列名になります。
`data.key = 'f'` や `data.correct = 1` などととすると，「key」という名前の列に`f`という文字列が，「correct」という列に`1`が保存されます。
任意で追加する情報（ここでの`key`や`correct`）については，`data.~~`の`~~`を好みの文字（日本語も可のはず）にできます。
つまり，任意で追加するデータについてはデータ内の列名を自由に指定できます。
```

### 【演習６】

- 提示される刺激に応じて，試行の条件がデータに保存されるようにしよう。
  - 記号が同じ方向を向いていたら「一致」
  - ターゲットとフランカーの方向が逆なら「不一致」
  - フランカーが`-`なら「中性」

サンプルコードは `docs/jspsych/exercise/FL06_add-data.html`

```note
なお，`timelineVariable()`（と，`data`という設定項目）を活用すればよりスッキリとした書き方が可能です（`jspsych/goal/flanker.html` を参照してください）。
```
