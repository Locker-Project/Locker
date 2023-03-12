function trimKeyCode(key: string) {
    if (key == "Space") return "␣";
    else if (key == "ShiftLeft") return "LShift";
    else if (key == "ShiftRight") return "RShift"
    else if (key.includes("Alt")) return "Alt";
    else if (key.includes("Control")) return "Ctrl";
    else if (key == "PageUp") return "PgUp";
    else if (key == "PageDown") return "PgDn";
    else if (key == "Escape") return "Esc";
    else if (key == "Insert") return "Ins";
    else if (key == "Delete") return "Del";
    else if (key == "NonConvert") return "無変換";
    else if (key == "Convert") return "変換";
    else if (key == "Zenkaku") return "半/全";
    else if (key == "Hiragana") return "かな/カナ";
    else if (key == "ContextMenu") return "Context";
    else if (key == "NumLock") return "NumLk";
    else if (key.includes("Key")) return key.replace("Key", "");
    else return "?";
}

export default trimKeyCode;