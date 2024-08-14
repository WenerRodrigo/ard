const Footer = () => {
  const anoAtual = new Date().getFullYear();
  const description = "ARD";
  const mensagemDireitosAutorais = `Copyright © ${description} ${anoAtual} - Todos os direitos reservados.`;

  return (
    <div className="flex items-center w-full justify-center gap-3 py-4 flex-col bg-secondary">
      <p className="text-center text-sm text-zinc-800 font-semibold">
        {mensagemDireitosAutorais}
      </p>
      <p>
        <a
          href="https://www.werowebsolucoes.com.br/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-zinc-800"
        >
          Desenvolvido por Weroweb
        </a>
      </p>
    </div>
  );
};

export default Footer;
