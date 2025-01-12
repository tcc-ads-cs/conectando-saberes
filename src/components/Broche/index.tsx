import './index.css';

interface BrocheProps {
    tipo: number,
    classN?: string
}

const Broche: React.FC<BrocheProps> = ({tipo, classN}) => {
    switch (tipo) {
        case 1:
            if (classN != undefined) {
                return <abbr className={classN} title="Este usuário busca oportunidades como bolsista/voluntário de IC"><img src="https://orange-cori-83.tiiny.site/orientado.svg.image.png" alt="Este usuário busca oportunidades como bolsista/voluntárie de IC" /></abbr>
            } else {
                return <abbr title="Este usuário busca oportunidades como bolsista/voluntário de IC"><img src="https://orange-cori-83.tiiny.site/orientado.svg.image.png" alt="Este usuário busca oportunidades como bolsista/voluntárie de IC" /></abbr>
            }
        case 2:
            if (classN != undefined) {
                return <abbr className={classN} title="Este usuário busca bolsistas/voluntáries para projetos de IC"><img src="https://orange-cori-83.tiiny.site/orientador.svg.image.png" alt="Este usuário busca bolsistas/voluntáries para projetos de IC" /></abbr>
            } else {
                return <abbr title="Este usuário busca bolsistas/voluntáries para projetos de IC"><img src="https://orange-cori-83.tiiny.site/orientador.svg.image.png" alt="Este usuário busca bolsistas/voluntáries para projetos de IC" /></abbr>
            }
        case 3:
            if (classN != undefined) {
                return <abbr className={classN} title="Este usuário busca referências bibliográficas"><img src="https://orange-cori-83.tiiny.site/pesquisa.svg.image.png" alt="Este usuário busca referências bibliográficas" /></abbr>
            } else {
                return <abbr title="Este usuário busca referências bibliográficas"><img src="https://orange-cori-83.tiiny.site/pesquisa.svg.image.png" alt="Este usuário busca referências bibliográficas" /></abbr>
            }
        case 4:
            if (classN != undefined) {
                return <abbr className={classN} title="Este usuário busca conhecer sobre IC e a plataforma"><img src="https://orange-cori-83.tiiny.site/ic.svg.image.png" alt="Este usuário busca conhecer sobre IC e a plataforma" /></abbr>
            } else {
                return <abbr title="Este usuário busca conhecer sobre IC e a plataforma"><img src="https://orange-cori-83.tiiny.site/ic.svg.image.png" alt="Este usuário busca conhecer sobre IC e a plataforma" /></abbr>
    }
}
}

export default Broche;