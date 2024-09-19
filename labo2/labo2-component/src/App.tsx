import './App.css';

interface HeaderProps {
    title: string;
    subtitle: string;
}

interface ListProps {
    items: string[];
}

interface ListItemProps {
    text: string;
}

interface FooterProps {
    copy: string;
    year: number;
}

const Header = (props: HeaderProps) => {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </>
    );
};

const List = (props: ListProps) => {
    return (
        <>
            <ul>
                {props.items.map((item) => (
                    <ListItem text={item} />
                ))}
            </ul>
        </>
    );
};

const ListItem = (props: ListItemProps) => {
    return (
        <>
            <li>{props.text}</li>
        </>
    );
};

const Footer = (props: FooterProps) => {
    return (
        <>
            <p>
                &copy; {props.copy} ({props.year})
            </p>
        </>
    );
};

const App = () => {
    const items = ['item1', 'item2', 'item3'];
    return (
        <>
            <Header title="Labo 2" subtitle="Basic components" />
            <List items={items} />
            <Footer copy="Jordy Van Den Kieboom" year={2024} />
        </>
    );
};

export default App;
