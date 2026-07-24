export default function AlertButton({ text }) {
    function HandleClick() {
        alert("Button click");
    }

    return (
        <button onClick={HandleClick}>{text}</button>
    )
}
