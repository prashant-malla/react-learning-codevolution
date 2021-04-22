const FunctionClick = () => {
    function handleClick() {
        console.log('Button click');
    }
    return (
        <button onClick={handleClick}>Click</button>
    );
}

export default FunctionClick;