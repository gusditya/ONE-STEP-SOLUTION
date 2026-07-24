export default function Container({ children }) {
    return (
        <main
            className="container"
        >
            <h1>Programmer</h1>
            {children}
        </main>
    );
}
