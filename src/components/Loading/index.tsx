import { Container } from "../Container";
import { Header } from "../Header";
import { Navbar } from "../Navbar";

export function Loading() {
    return (
        <>
            <Header role="group">
                <Navbar redirect="/" alt="codelab" />
                <div className="w-full animate-pulse space-y-8">
                    <div className="h-2 bg-dark-40 rounded-full p-6"></div>
                </div>
                <span className="sr-only">Loading Header...</span>
            </Header>
            <Container role="main">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="col-span-12 p-10 border-2 border-dark-40 rounded-md bg-dark-20"
                    >
                        <div className="w-full animate-pulse space-y-8">
                            <div className="h-2 bg-dark-40 rounded-full p-1 w-48"></div>
                            <div className="h-2 bg-dark-40 rounded-full p-3"></div>
                            <div className="h-2 bg-dark-40 rounded-full p-3"></div>
                        </div>
                        <span className="sr-only">Loading Article...</span>
                    </div>
                ))}
            </Container>
        </>
    )
}
