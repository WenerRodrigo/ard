const Footer = () => {
  const anoAtual = new Date().getFullYear();
  const description = "ARD";
  const mensagemDireitosAutorais = `© ${description} ${anoAtual} - Todos os direitos reservados.`;

  return (
    <div className="flex items-center w-full justify-center gap-3 py-4 flex-col bg-primary">
      <p className="text-center text-sm text-white font-semibold">
        {mensagemDireitosAutorais}
      </p>
      <p>
        <a
          href="https://www.werowebsolucoes.com.br/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white"
        >
          Desenvolvido por Weroweb
        </a>
      </p>
    </div>
  );
};

export default Footer;
