interface BrocheProps {
    tipo: number
}

const Broche: React.FC<BrocheProps> = ({tipo}) => {
    switch (tipo) {
        case 0:
            return <span>O</span>
        case 1:
            return <span>R</span>
        case 2:
            return <span>P</span>
        case 3:
            return <span>I</span>
    }
}

export default Broche;