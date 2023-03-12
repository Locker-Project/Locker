import JAAudioSettings from "./ja.audioSettings";
import JAGameplaySettings from "./ja.gameplaySettings";
import JAGeneralSettings from "./ja.generalSettings";

const JASettingsPage = {
    "title": "設定",
    "back": "戻る",
    "search": "検索",
    "general": JAGeneralSettings,
    "gameplay": JAGameplaySettings,
    "graphics": {
        "title": "グラフィックス",
        "gameResolution": {
            "name": "ゲーム3D解像度",
            "description": "ゲームの3Dレンダリング品質を設定します。"
        },
        "gameAntiAliasing": {
            "name": "ゲームアンチエイリアス",
            "description": "ゲームのアンチエイリアスを設定します。\n推奨:System"
        },
        "gameAASampling": {
            "name": "ゲームアンチエイリアスサンプリング",
            "description": "ゲームのアンチエイリアス(SSAAまたはTAA)使用時のサンプリング倍率を設定します。"
        },
        "gameRenderType": {
            "name": "ゲームレンダリングタイプ",
            "description": "ゲームのレンダリング方法を選択します。"
        },
        "gameFps": {
            "name": "ゲーム最大フレームレート",
            "description": "ゲームの最大フレームレートを設定します。\nこの設定は判定精度に影響します。"
        },
        "backgroundRenderType": {
            "name": "背景レンダリングタイプ",
            "description": "背景のレンダリング方法を選択します。"
        },
        "backgroundResolution": {
            "name": "背景3D解像度",
            "description": "3D背景使用中のレンダリング品質を設定します。"
        },
        "backgroundFps": {
            "name": "背景フレームレート",
            "description": "3D背景使用中の最大フレームレートを設定します。"
        },
        "autoFullScreen": {
            "name": "自動フルスクリーン",
            "description": "ゲーム本編開始時に自動的にフルスクリーンにします。"
        }
    },
    "audio": JAAudioSettings,
    "storage": {
        "title": "ストレージ",
    },
    "user": {
        "title": "ユーザー",
        "userName": {
            "name": "ディスプレイネーム",
            "description": "ゲーム上で表示される名前を変更します。\nこの設定は再ログイン後に反映されます。"
        },
        "id": {
            "name": "ユーザーID",
            "description": "登録されているユーザーIDを表示します。"
        },
        "sessionId": {
            "name": "セッションID",
            "description": "このセッションに割り当てられたIDを表示します。"
        }
    },
    "details": {
        "processingLoad": {
            "name": "負荷",
            "critical": "最高",
            "high": "高",
            "medium": "中",
            "low": "低",
            "none": "無",
        }
    },
}

export default JASettingsPage;