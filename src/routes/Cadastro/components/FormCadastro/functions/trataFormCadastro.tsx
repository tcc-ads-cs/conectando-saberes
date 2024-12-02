import api from "../../../../../api";

function calcularIdade(dataNascimento: FormDataEntryValue | any): number {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento.toString());
  
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();
    const diaAtual = hoje.getDate();
    const diaNascimento = nascimento.getDate();
  
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
    }
  
    return idade;
}

function validarSenha(senha: string): boolean {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  return regex.test(senha);
}

function validarCadastro(data: FormData) {
  var email: string | any = data.get('IEmail')?.toString();
  var senha: string | any = data.get('ISenha')?.toString();

  if (email !== data.get('IConfEmail')) {
      return 'E-mails não se correspondem.';
  } else if (email.length < 17) {
      return 'Seu e-mail deve conter mais de 17 caracteres.';
  } else if (!validarSenha(senha)) {
      return 'Sua senha DEVE ter, no mínimo, 8 caracteres, contendo, uma letra minúscula, uma letra maiúscula, um caracter especial e um número.';
  } else if (data.get('ISenha') !== data.get('IConfSenha')) {
      return 'Senhas não se correspondem.';
  } else if (data.get('ICategorias') === '') {
      return 'Selecione pelo menos três categorias.';
  } else if (calcularIdade(data.get('IDtNasc')) < 16) {
      return 'Você precisa ter, no mínimo, 16 anos para se registrar na plataforma.';
  }

  return true;
}

const trataFormCadastro = async (data: FormData) => {
  const resultadoValidacao = validarCadastro(data);
    
    if (resultadoValidacao !== true) {
        return resultadoValidacao;
    }

    let usuarioCadastrado: Object;
    const email: string | any = data.get('IEmail')?.toString().toLowerCase();
    const cdCampus: string | any = data.get('ICampus')?.toString();
    const cdCidade: string | any = data.get('ICidade')?.toString();
    const tpPreferencia: string | any = data.get('IPrefer')?.toString();
    const descTitulo: string | any = data.get('IGrauEsc')?.toString();

    usuarioCadastrado = {
        "name": data.get('INomeComp'),
        "nmSocial": data.get('INomeSocial') === '' ? data.get('INomeComp') : data.get('INomeSocial'),
        "email": email,
        "password": data.get('ISenha'),
        "cdCampus": parseInt(cdCampus),
        "cdCidade": parseInt(cdCidade),
        "tpPreferencia": parseInt(tpPreferencia),
        "descTitulo": parseInt(descTitulo),
        "tpColor": 1,
        "dtNasc": data.get('IDtNasc') + "T00:00:00",
        "isEmailVerified": false
    };

    try {
        const response = await api.post('/UserAuth/cadastrar', JSON.stringify(usuarioCadastrado));
        
        if (response.status === 200) {
            return 'Formulário enviado com sucesso!';
        } else {
            return 'Falha ao enviar formulário.';
        }
        
    } catch (error: any) {
      if (error.response) {
        return `Erro ao enviar formulário. ${error.response.data?.message}`;
    } else if (error.request) {
        return 'Erro ao enviar formulário. Nenhuma resposta recebida do servidor.';
    } else {
        return `Erro ao enviar formulário: ${error.message}`;
    }
  }
}

export default trataFormCadastro;

