import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { ErrorProps } from "./types";

export function Error({ message }: ErrorProps) {
    return (
        <Header role="group">
            <Navbar redirect="/" alt="codelab" />
            <div className="w-full">
                <h1 className="w-full p-4 rounded-md font-medium text-2xl text-[#BE123C] bg-dark-30 border-2 border-[#BE123C]">{message}</h1>
                <span className="sr-only">
                    {message}
                </span>
            </div>
        </Header>
    )
}