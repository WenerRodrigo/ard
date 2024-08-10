const Footer = () => {
  const anoAtual = new Date().getFullYear();
  const description = "ARD";
  const mensagemDireitosAutorais = `© ${description} ${anoAtual} - Todos os direitos reservados.`;

  return (
    <div className="flex items-center w-full justify-center gap-3 py-4 flex-col bg-primary">
      <p className="text-sm text-white">Razão Social: Ard Garantia De Motor E Cambio Ltda</p>
      <p className="text-sm text-white">CNPJ: 56.283.588/0001-92</p>
      <p className="text-center text-sm text-white font-semibold">
        {mensagemDireitosAutorais}
      </p>
    </div>
  );
};

export default Footer;
