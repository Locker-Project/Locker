import { Setter } from "solid-js";
import { Howler } from "howler";
import { getGameConfig } from "Utils/getConfig/getConfig";

function setupAudioFromLoader(setTitle: Setter<string>, setDescription: Setter<string>) {
    return new Promise<void>((resolve, reject) => {
        setTitle("appLoader.audio.title");
        setDescription("appLoader.audio.description")
        const data = getGameConfig();
        let volume = data.audio.masterVolume || 1;
        let stereo = data.audio.audioStereo - 1;
        try {
            volume = data.audio.masterVolume;
            stereo = data.audio.audioStereo - 1;
        } catch (e) {
            console.log(e);
            volume = 1;
            stereo = 0;
        }
        Howler.volume(volume);
        Howler.stereo(stereo);
        resolve();
    })
}

export default setupAudioFromLoader;