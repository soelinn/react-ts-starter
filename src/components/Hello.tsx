import * as React from "react";

export interface IHelloProps {
    compiler: string;
    framework: string;
}

export const Hello: React.StatelessComponent<IHelloProps> =
    (props: IHelloProps) =>
        <h1>Hello from {props.compiler} and {props.framework}!</h1>;

Hello.displayName = "Hello";
