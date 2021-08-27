// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "hello_world_html_demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "hello_world_html_demo",
    "description": "",
    "repository": "",
    "contributors": "Masanori Kobayashi"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "hello_world_center",
      "content": "\u003C!-- メインの部分を\u003Cmain\u003E\u003C\u002Fmain\u003Eの間に記述する。なお，ここでは書いていないが\u003Cheader\u003E\u003C\u002Fheader\u003Eでヘッダー，\u003Cfooter\u003E\u003C\u002Ffooter\u003Eでフッターも記述できる。 --\u003E\n\n\u003C!-- lab.jsにデフォルトで用意されている水平方向の中央寄せ（content-horizontal-center）と垂直方向の中央寄せ（content-vertical-center）をclassで指定すると，\u003Cmain\u003E\u003C\u002Fmain\u003E内の画面が中央寄せになる。 --\u003E\n\n\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cp\u003E\n      Hello, world!\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "timeout": "1000"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "hello_world_right",
      "content": "\u003Cmain class = \"content-horizontal-right content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cp\u003E\n      Hello, world!\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "timeout": "1000"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "hello_world_small_font_size",
      "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003C!-- style = \"font-size:○vh\"でフォントサイズを変更する（vhは縦の画面サイズ(Y）を100vhとした時の割合でサイズ指定する方法。画面サイズと刺激の比が環境間で揃う） --\u003E\n    \u003Cp style = \"font-size: 1vh;\"\u003E\n      Hello, world!\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "timeout": "1000"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "hello_world_medium_font_size",
      "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003C!-- style = \"font-size:○vh\"でフォントサイズを変更する（vhは縦の画面サイズ(Y）を100vhとした時の割合でサイズ指定する方法。画面サイズと刺激の比が環境間で揃う） --\u003E\n    \u003Cp style = \"font-size: 5vh;\"\u003E\n      Hello, world!\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "timeout": "1000"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "hello_world_large_font_size",
      "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003C!-- style = \"font-size:○vh\"でフォントサイズを変更する（vhは縦の画面サイズ(Y）を100vhとした時の割合でサイズ指定する方法。画面サイズと刺激の比が環境間で揃う） --\u003E\n    \u003Cp style = \"font-size: 10vh;\"\u003E\n      Hello, world!\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "timeout": "1000"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "hello_world_color_name",
      "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cp style=\"color: tomato;\"\u003E\n      Hello, world!\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "timeout": "1000"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "hello_world_color_rgb",
      "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cp style=\"color: #0000ff;\"\u003E\n      Hello, world!\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "timeout": "1000"
    }
  ]
})

// Let's go!
study.run()