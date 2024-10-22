import './index.css';

interface BrocheProps {
    tipo: number
}

const Broche: React.FC<BrocheProps> = ({tipo}) => {
    switch (tipo) {
        case 1:
            // <abbr className="burst" title="Busca oportunidades como bolsista/voluntárie de IC">O</abbr>
            return <abbr title="Este usuário busca oportunidades como bolsista/voluntário de IC"><img src="src/components/Broche/assets/orientado.svg" alt="Este usuário busca oportunidades como bolsista/voluntárie de IC" /></abbr>
        case 2:
            return <abbr title="Este usuário busca bolsistas/voluntáries para projetos de IC"><img src="src/components/Broche/assets/orientador.svg" alt="Este usuário busca bolsistas/voluntáries para projetos de IC" /></abbr>
        case 3:
            return <abbr title="Este usuário busca referências bibliográficas"><img src="src/components/Broche/assets/pesquisa.svg" alt="Este usuário busca referências bibliográficas" /></abbr>
        case 4:
            return <abbr title="Este usuário busca conhecer sobre IC e a plataforma"><img src="src/components/Broche/assets/ic.svg" alt="Este usuário busca conhecer sobre IC e a plataforma" /></abbr>
    }
}

export default Broche;