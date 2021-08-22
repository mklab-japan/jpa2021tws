# Flanker task

フランカー課題については [この記事](https://blog.goo.ne.jp/hidefujita/e/827f96e7918dc44ed957863519cdeaaf) に簡単な説明があります。

刺激として今回は `<<<<<`, `>>>>>`, `<<><<`, `>><>>` の４つを使用します。参加者は真ん中の記号が`<`なら`f`キー，`>`なら`j`キーを押すこととします。

チュートリアルを通して，[このような課題](https://snishiyama.github.io/jspsych-tutorial-20210721-28/tutorial/20210721/goal/flanker.html)が完成します。

## 刺激を一つ提示する

`tutorial/20210721/start/` に保存されている `flanker.html` というファイルをエディタで開いてください。
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

### 演習

- 同じ試行を複数回実施してみよう
- 提示する刺激を変えてみよう

サンプルコードは `tutorial/exercise/FL01_single_trial.html`

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

それぞれの試行について別々の変数名がついていることに注意にしてください。

### 演習

- 4 試行にしてみよう
- いろんな提示順序を試してみよう

サンプルコードは `tutorial/exercise/FL02_four_trials.html`

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

### 演習

- 2 つの刺激 `--<--`, `-->--` を新たに提示できるようにしよう

サンプルコードは `tutorial/exercise/FL03_timeline_variables.html`

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

### 演習

- 注視点を毎試行提示してみよう
- 注視点を最初だけ提示してみよう

_Hint!_ これまで作ってきたコードには，`timeline` の設定箇所が２つあります。

サンプルコードは `tutorial/exercise/FL04_flanker.html`
