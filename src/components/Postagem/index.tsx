import BtnInteracao from "../BtnInteracao";
import Broche from "../Broche";

import { Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FileOpenIcon from '@mui/icons-material/FileOpen';

interface PostagemProps {
    post: string | any;
}

const Postagem: React.FC<PostagemProps> = ({post}) => {
    switch (post.type) {
        case 0:
            //TODO: Ver com o Ronald sobre quais informações eu preciso pro posts!
            return post.guid;
        // Case 0 será um artigo com download, case 1 será artigo sem download e case 2 será tópico!
    }
}

export default Postagem;