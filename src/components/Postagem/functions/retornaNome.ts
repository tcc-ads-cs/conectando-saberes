const retornaNome = (param1: any, param2: any, param3: any, param4: any) => {
    if (param1 !== undefined) return param1.split(' ').slice(0, 2).join(' ');
    if (param2 !== undefined) return param2.split(' ').slice(0, 2).join(' ');
    if (param3 !== undefined) return param3.split(' ').slice(0, 2).join(' ');
    if (param4 !== undefined) return param4.split(' ').slice(0, 2).join(' ');
    return undefined;
}
 export default retornaNome;