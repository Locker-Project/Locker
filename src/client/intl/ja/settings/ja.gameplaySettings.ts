const JAGameplaySettings = {
    "title": "ゲームプレイ",
    "keybind": {
        "name": "キーバインド",
        "description": "ゲームの操作に使用するキーを設定します。(各キーをクリックして変更する)",
        "edit": "キーを押して下さい...",
        "key2": {
            "name": "2鍵キーバインド",
            "lanes": "上,下"
        },
        "key3": {
            "name": "3鍵キーバインド",
            "lanes": "上,中央,下"
        },
        "key4": {
            "name": "4鍵キーバインド",
            "lanes": "上端,上,下,下端"
        },
        "key5": {
            "name": "5鍵キーバインド",
            "lanes": "上端,上,中央,下,下端"
        },
    },
    "liveVisualization": {
        "name": "ライブビジュアライゼーション",
        "description": "プレイ中の精度/予測表示を有効にします。",
    },
    "scrollSpeed": {
        "name": "スクロールスピード",
        "description": "ゲームのスクロールスピードを設定します",
    },
    "offset": {
        "name": "オフセット調整",
        "description": "音楽に対するノートの位置を調整します。\nFastが多い場合は-に,Lateが多い場合は+に調整してください。\n無線機器を使用している場合は75~200を推奨。\n以下で楽曲とラインの誤差を調整してください。"
    },
    "judgeTiming": {
        "name": "判定タイミング調整",
        "description": "ノートの判定のずれを調整します。\nFastが多い場合は-に,Lateが多い場合は+に調整してください。\n無線機器を使用している場合は50~100を推奨。\n以下で楽曲とタップの誤差を調整して下さい。",
        "adjust": "サウンドの4拍目の始まりに合わせて所定のボタンをタップしてください。",
        "button": "タップ",
        "result":"平均値"
    },
    "judgeTextShow": {
        "name": "判定テキスト表示",
        "description": "判定テキストの表示を設定します。"
    },
    "judgeTextPosition": {
        "name": "判定テキスト位置調整",
        "description": "判定テキストの位置を設定します。"
    },
    "judgeTextDirection": {
        "name": "判定テキスト表示方向",
        "description": "判定テキストの表示方向を設定します。"
    },
    "startAdjust": "調整を開始する",
}

export default JAGameplaySettings;