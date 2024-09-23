import styles from './App.module.css';

interface HeaderProps {
    avatar: string;
    name: string;
    hoursAgo: number;
}

interface ContentProps {
    content: string;
    contentLink: string;
    image: string;
    imageTitle: string;
    imageDescription: string;
    imageLink: string;
}

interface CardProps {
    avatar: string;
    name: string;
    hoursAgo: number;
    content: string;
    contentLink: string;
    image: string;
    imageTitle: string;
    imageDescription: string;
    imageLink: string;
}

interface SocialFooterProps {
    thumbsUp: string;
    thumbsDown: string;
    share: string;
}

interface ImageProps {
    image: string;
    imageTitle: string;
    imageDescription: string;
    imageLink: string;
}

const Image = ({
    image,
    imageTitle,
    imageDescription,
    imageLink,
}: ImageProps) => {
    return (
        <div className={styles.reference}>
            <img className={styles.reference_thumb} src={image} />
            <div className={styles.reference_content}>
                <div className={styles.reference_title}>{imageTitle}</div>
                <div className={styles.reference_subtitle}>
                    {imageDescription}
                </div>
                <div className={styles.reference_font}>{imageLink}</div>
            </div>
        </div>
    );
};

const Header = ({ avatar, name, hoursAgo }: HeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.options}>
                <i className="fa fa-chevron-down"></i>
            </div>
            <img className={styles.co_logo} src={avatar} />
            <div className={styles.co_name}>
                <a href="#">{name}</a>
            </div>
            <div className={styles.time}>
                <a href="#">Just {hoursAgo} lives ago</a> ·{' '}
                <i className="fa fa-globe"></i>
            </div>
        </div>
    );
};

const Content = ({
    content,
    contentLink,
    image,
    imageTitle,
    imageDescription,
    imageLink,
}: ContentProps) => {
    return (
        <>
            <div className={styles.content}>
                <p>
                    {content}
                    <a href={contentLink}></a>
                </p>
            </div>

            <Image
                image={image}
                imageTitle={imageTitle}
                imageDescription={imageDescription}
                imageLink={imageLink}
            />
        </>
    );
};

const SocialFooter = ({ thumbsUp, thumbsDown, share }: SocialFooterProps) => {
    return (
        <>
            <div className={styles.social}>
                <div className={styles.social_content}></div>
                <div className={styles.social_buttons}>
                    <span>
                        <i className="fa fa-thumbs-up"></i>
                        {thumbsUp}
                    </span>
                    <span>
                        <i className="fa fa-comment"></i>
                        {thumbsDown}
                    </span>
                    <span>
                        <i className="fa fa-share"></i>
                        {share}
                    </span>
                </div>
            </div>
        </>
    );
};

const Card = (props: CardProps) => {
    return (
        <div className={styles.f_card}>
            <Header
                avatar={props.avatar}
                name={props.name}
                hoursAgo={props.hoursAgo}
            />
            <Content
                content={props.content}
                contentLink={props.contentLink}
                image={props.image}
                imageTitle={props.imageTitle}
                imageDescription={props.imageDescription}
                imageLink={props.imageLink}
            />
            <SocialFooter
                thumbsUp="Paws Up!"
                thumbsDown="Meow-back"
                share="Share the Cat-titude"
            />
        </div>
    );
};

const App = () => {
    return (
        <>
            <Card
                avatar="https://loremflickr.com/40/40"
                name="Purrfectly Pawsome"
                hoursAgo={9}
                content="Do you know why cats are excellent programmers? Because they always purr-fect their code! 😸"
                contentLink="http://www.google.com"
                image="https://loremflickr.com/476/250"
                imageTitle="The Ultimate Guide to Napping Like a Cat | CatNapTips"
                imageDescription="Learn the art of napping, feline style! Just follow these simple tips."
                imageLink="catnaptips.com"
            />
            <Card
                avatar="https://loremflickr.com/50/50"
                name="Meow"
                hoursAgo={4}
                content="Meow Meow Meow Meow?"
                contentLink="http://www.google.com"
                image="https://loremflickr.com/340/340"
                imageTitle="Meow Meow Meow!"
                imageDescription="Meow Meow Meow Meow Meow? Meow! Meow.."
                imageLink="catnaptips.com"
            />
        </>
    );
};

export default App;
