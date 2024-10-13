interface PostagemProps {
    post: string | any;
}

const Postagem: React.FC<PostagemProps> = ({post}) => {
    switch (post.type) {
        case 0:
            //TODO: Ver com o Ronald sobre quais informações eu preciso pro posts!
            return post.textPost + " - (" + post.type + ")";
        default:
            return post.textPost + " - (" + post.type + ")";
    }
}

export default Postagem;