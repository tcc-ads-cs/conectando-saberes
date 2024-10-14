interface PostagemProps {
    post: string | any;
}

const Postagem: React.FC<PostagemProps> = ({post}) => {
    switch (post.type) {
        case 0:
            return post.textPost + " - (" + post.type + ")";
        default:
            return post.textPost + " - (" + post.type + ")";
    }
}

export default Postagem;