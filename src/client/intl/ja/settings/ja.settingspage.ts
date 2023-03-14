import JAAudioSettings from "./ja.audioSettings";
import JAGameplaySettings from "./ja.gameplaySettings";
import JAGeneralSettings from "./ja.generalSettings";
import JAGraphicsSettings from "./ja.graphicsSettings";

const JASettingsPage = {
    "title": "設定",
    "back": "戻る",
    "search": "検索",
    "general": JAGeneralSettings,
    "gameplay": JAGameplaySettings,
    "graphics": JAGraphicsSettings,
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