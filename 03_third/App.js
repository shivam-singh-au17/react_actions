import ReactDOM from 'react-dom/client';

const title = <h1 id='h1' key="1">Hello, Shivam Singh is here!</h1>
const Title3 = () => (
    <h3 id='h1' key="1">Hello, Shivam Singh is here!</h3>
)

const HeaderComponentType1 = () => {
    return (
        <>
            {title}
            {Title3()}
            <Title3 /> // Its called Composing component
            <div>
                <h1 id='h1' key="1">Hello, Shivam Singh is here!</h1>
            </div>
            <div>
                <h2 id='h2' key="2">Hello, Shivam Singh is here!</h2>
            </div>
            <HeaderComponentType2 />
        </>
    )
}

const HeaderComponentType2 = () => (
    <>
        <div>
            <h1 id='h1' key="1">Hello, Shivam Singh is here! 2</h1>
        </div>
        <div>
            <h2 id='h2' key="2">Hello, Shivam Singh is here! 2</h2>
        </div>
    </>
)

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
console.log('root:', root)

// root.render(title);
root.render(<HeaderComponentType1 />);
