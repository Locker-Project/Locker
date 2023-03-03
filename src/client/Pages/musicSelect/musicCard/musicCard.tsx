import * as solid from "solid-js";

const MusicCard: solid.Component<{ data: musicAsset }> = (props) => {

    return (
        <div>
            {props.data.metadata.title}
        </div>
    )
}

export default MusicCard