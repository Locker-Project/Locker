import { JSXElement } from "solid-js";

interface elemOnclickUnion {
    element: JSXElement
    onClick: Function
}

type elemOnclickUnionArray = Array<elemOnclickUnion>