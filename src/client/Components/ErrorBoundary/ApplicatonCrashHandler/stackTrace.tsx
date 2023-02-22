import * as solid from "solid-js";

const StackTrace: solid.Component<{ stack: string, isComponent: boolean }> = (props) => {
    return (
        <>
            {
                props.stack.trim().split("\n").reverse().map((err, index) => {
                    const stackName = err.replace("at", "").replace(/\(.*\)/, "").trim()
                    return (
                        <p title={err}>
                            {/* indent */}
                            {" ".repeat(index * 4)}
                            {/* if component stack trace, this will render component with tag like <xxx/> */}
                            {props.isComponent && <>&lt;</>}
                                {stackName}
                            {props.isComponent && <>&gt;</>}
                        </p>
                    )
                })
            }
        </>
    )
}
export default StackTrace