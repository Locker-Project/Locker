import { JSXElement } from "solid-js"

interface settingsData {
    label: JSXElement
    input: JSXElement,
    details: {
        description: JSXElement
        cpu?: load
        gpu?: load
    }
}

type load = "high" | "medium" | "low" | "none";