const retornaInteresse = (param1: number, param2: number) => {
    var int: number;
    param1 == undefined ? int = param2 : int = param1;
    return int;
}

export default retornaInteresse;