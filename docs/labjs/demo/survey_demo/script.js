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
      "filePrefix": "survey_demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Survey_demo",
    "description": "",
    "repository": "",
    "contributors": "Masanori Kobayashi"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "input",
          "label": "年齢",
          "attributes": {
            "type": "number",
            "min": "0",
            "max": "99"
          },
          "help": "年齢を半角数字で入力してください",
          "name": "Age"
        },
        {
          "required": false,
          "type": "input",
          "label": "性別",
          "help": "性別を入力してください。",
          "name": "Sex"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Survery"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンを選択することで行ってください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "たとえ何かよくないことが私の身に起ころうとしていても，怖くなったり神経質になったりすることはほとんどない",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ],
          "name": "BIS_BAS_1"
        },
        {
          "required": true,
          "type": "radio",
          "label": "私は，欲しいものを手に入れるためには格別に努力する",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ],
          "name": "BIS_BAS_2"
        },
        {
          "required": true,
          "type": "radio",
          "label": "何かがうまくいっているときは，それを続けることがとても楽しいと思う",
          "name": "BIS_BAS_3",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "面白そうだと思えば，私はいつも何か新しいものを試したいと考えている",
          "name": "BIS_BAS_4",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "私は，欲しいものを手に入れたとき，興奮し，活気づけられる",
          "name": "BIS_BAS_5",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "非難されたり怒られたりすると，私はかなり傷つく",
          "name": "BIS_BAS_6",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "欲しいものがあると，私はたいていそれを手に入れるために全力を挙げる",
          "name": "BIS_BAS_7",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "楽しいかもしれないから，というだけの理由で何かをすることがよくある",
          "name": "BIS_BAS_8",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "欲しいものを手に入れるチャンスを見つけると，すぐに動き出す",
          "name": "BIS_BAS_9",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "誰かが私のことを怒っていると考えたり，知ったりすると，私はかなり心配になったり動揺したりする",
          "name": "BIS_BAS_10",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "何か好きなことをするチャンスをみつけると，私はすぐに興奮する",
          "name": "BIS_BAS_11",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "私はしばしば時のはずみで行動する",
          "name": "BIS_BAS_12",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "何かよくないことが起ころうとしていると考えると，私はたいていくよくよ悩む",
          "name": "BIS_BAS_13",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "よいことが私の身に起こると，そのことは，私に強い影響を与える",
          "name": "BIS_BAS_14",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "何か重要なことをあまりうまくできなかったと考えると不安になる",
          "name": "BIS_BAS_15",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "私は，興奮や新しい刺激を切望している",
          "name": "BIS_BAS_16",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "私は，何かを追い求めているときには徹底的にやる",
          "name": "BIS_BAS_17",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "私は，友達と比べると不安の種はとても少ない",
          "name": "BIS_BAS_18",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "競争に勝ったら，私は興奮するだろう",
          "name": "BIS_BAS_19",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        },
        {
          "required": true,
          "type": "radio",
          "label": "私は，間違いを犯すことを心配している",
          "name": "BIS_BAS_20",
          "options": [
            {
              "label": "あてはまらない",
              "coding": "1"
            },
            {
              "label": "どちらかと言えばあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらかと言えばあてはまる",
              "coding": "3"
            },
            {
              "label": "あてまはる",
              "coding": "4"
            }
          ]
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "BIS_BAS"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "調査終了です。ありがとうございました。",
          "content": "「終了」ボタンを押すと，データをダウンロードできます。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "終了",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "End"
    }
  ]
})

// Let's go!
study.run()