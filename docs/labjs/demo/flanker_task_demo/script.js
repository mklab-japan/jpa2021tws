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
      "filePrefix": "flanker_task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "flanker_task",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "フランカー課題",
          "content": "この実験では「＜」または「＞」が５つ並んで呈示されます。 中央が「＜」の場合は「fキー」を，「＞」の場合は「jキー」を押してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Inst"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "resp": "left",
          "stim": "＜＜＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＜＜＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＜＜"
        },
        {
          "resp": "left",
          "stim": "＞＞＜＜＜"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞"
        },
        {
          "resp": "right",
          "stim": "＞＞＞＞＞"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜"
        },
        {
          "resp": "right",
          "stim": "＜＜＞＜＜"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "stims_flanker",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 21.25,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixation",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 579.96,
                "height": 67.8,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${parameters.stim}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "60",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(f)": "left",
              "keypress(j)": "right"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "stimulus",
            "correctResponse": "${parameters.resp}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 551.74,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ state.correct ? \"正解\" : \"不正解\" }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "feedback",
            "timeout": "1000",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "post_trial_gap",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ありがとうございました。",
          "content": "これで実験は終了です。以下の「結果のダウンロード」ボタンを押すと結果をダウンロードできます。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "結果のダウンロード→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Thanks"
    }
  ]
})

// Let's go!
study.run()