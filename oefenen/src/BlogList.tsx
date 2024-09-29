interface BlogListProps {
    blogs: {
        id: number;
        title: string;
        body: string;
        author: string;
    }[];
    title: string;
}

const BlogList = ({ blogs, title }: BlogListProps) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
