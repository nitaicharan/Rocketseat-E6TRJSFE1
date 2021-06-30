import { ButtonHTMLAttributes } from "react";
import "../styles/button.scss"

type IProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: IProps) {
    return (
        <button className="button" {...props} />
    );
}