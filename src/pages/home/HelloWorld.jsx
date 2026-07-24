import './HelloWorld.css';

export default function HelloWorld() {
    const props = {
        text: "Hello World"
    }
    return (
        <div>
            <HeaderWorld {...props} />
        </div>
    )
}

function HeaderWorld({text}) {
    return (
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}
