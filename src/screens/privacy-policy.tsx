import banner from "../assets/banner-home.png";
import ContentFooter from "../components/content-footer";
import Footer from "../components/footer";
import Header from "../components/header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className="relative">
          <img
            className="w-full h-[220px] sm:h-full sm:max-w-none"
            src={banner}
            alt="Banner Home"
          />
        </div>
        <div className="absolute left-2 sm:left-20 text-left px-6 sm:px-0">
          <p className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
            Política de
            <br />
            Privacidade
          </p>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <p className="text-sm text-gray-600 text-center mb-8">
          Última atualização: 12 de Agosto de 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Objetivos</h2>
          <p className="mb-4">
            A ARD Garantia para motor e câmbio, buscando aprimorar os seus
            processos internos, prezando pela máxima proteção das informações
            daqueles que se relacionam com a organização e visando a necessidade
            de adequação à Lei Geral de Proteção de Dados Pessoais – LGPD (Lei
            n.º 13.709/2018), apresenta a presente Política de Privacidade
            Externa.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Termos e definições</h2>
          <p className="mb-4">
            Para um melhor entendimento da presente política, é imprescindível
            conhecer algumas das mais importantes definições da Lei Geral de
            Proteção de Dados Pessoais – LGPD, sendo elas:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li>
              <strong>Dado pessoal:</strong> informação relacionada à pessoa
              natural identificada ou identificável.
            </li>
            <li>
              <strong>Dado pessoal sensível:</strong> dado pessoal sobre origem
              racial ou étnica, convicção religiosa, opinião política, etc.
            </li>
            <li>
              <strong>Titular:</strong> pessoa natural a quem se referem os
              Dados Pessoais que são objeto de tratamento.
            </li>
            <li>
              <strong>Tratamento:</strong> toda operação realizada com Dados
              Pessoais.
            </li>
            <li>
              <strong>Controlador de dados:</strong> pessoa natural ou jurídica
              que realiza o tratamento de Dados Pessoais.
            </li>
            <li>
              <strong>Encarregado (DPO):</strong> pessoa indicada pela ARD
              Garantia para motor e câmbio.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Finalidade do tratamento de Dados Pessoais
          </h2>
          <p className="mb-4">
            A LGPD tem como principal objetivo proteger os direitos relacionados
            à privacidade dos Dados Pessoais dos indivíduos. A ARD Garantia
            considera como algumas de suas finalidades:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li>Execução satisfatória dos Contratos;</li>
            <li>Garantia de direitos;</li>
            <li>Cumprimento de obrigações legais;</li>
            <li>Diligências para contratos firmados com os clientes;</li>
            <li>Gestão de documentos pessoais;</li>
            <li>Proteger informações contidas em processos e sistemas;</li>
            <li>Viabilizar o fornecimento dos seus serviços;</li>
            <li>
              Para atender aos legítimos interesses da ARD Garantia;
            </li>
            <li>
              Excepcionalmente para outras finalidades, sempre fundamentado nas
              bases legais permitidas pela LGPD.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Serviços de terceiros</h2>
          <p className="mb-4">
            Esta Política de Privacidade aplica-se apenas às informações
            disponibilizadas à ARD Garantia. Nossos serviços
            podem, eventualmente, incorporar serviços fornecidos por terceiros.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dos dados coletados</h2>
          <p className="mb-4">Dados que você nos fornece:</p>
          <ul className="list-disc ml-8 mb-4">
            <li>
              Para entrar em contato conosco, você poderá enviar uma mensagem na
              aba “Contato”, informando seu nome completo, endereço de e-mail e
              telefone para contato.
            </li>
            <li>
              Na aba “Consulte sua apólice”, será encaminhado a uma nova página
              e solicitado o preenchimento do número de documento e controle
              interno.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Com quem compartilhamos seus dados
          </h2>
          <p className="mb-4">
            A ARD Garantia fica autorizada a compartilhar os
            seus Dados Pessoais com outros agentes de tratamento de dados, caso
            seja necessário para as finalidades dispostas neste termo,
            observados os princípios e as garantias estabelecidas pela LGPD.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Armazenamento dos dados pessoais
          </h2>
          <p className="mb-4">
            Os dados tratados permanecerão armazenados nos sistemas da ARD
            Garantia durante toda a relação contratual, de
            acordo com a duração da finalidade inicial ou por causa do prazo
            determinado por obrigação legal e/ou regulatória.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Dos seus direitos como titular dos dados
          </h2>
          <p className="mb-4">
            O artigo 18 da LGPD estabelece os seguintes direitos aos titulares:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li>
              Confirmar com a ARD Garantia a existência de
              tratamento de dados pessoais e obter, a qualquer tempo, acesso a
              esses dados;
            </li>
            <li>
              Requerer a correção ou atualização de dados que estejam
              incompletos, inexatos ou desatualizados;
            </li>
            <li>
              Requerer a exclusão de dados dos sistemas da ARD Garantia;
            </li>
            <li>Solicitar a rastreabilidade de seus dados;</li>
            <li>
              Solicitar a portabilidade de dados a outro prestador de serviço;
            </li>
            <li>Solicitar o bloqueio ou eliminação dos dados pessoais;</li>
            <li>
              Revogar o consentimento e requerer a eliminação dos dados obtidos
              sob seu amparo.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Como a ARD Garantia protege sua informação
          </h2>
          <p className="mb-4">
            A ARD Garantia se empenha para proteger a sua
            privacidade e os seus Dados Pessoais de acessos não autorizados,
            destruição, perda, alteração, comunicação, divulgação ou qualquer
            forma de tratamento ilegal ou em desconformidade com a Lei.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Acesso e correção de informações
          </h2>
          <p className="mb-4">
            Caso você deseje acessar e/ou atualizar os dados informados à ARD
            Garantia, não hesite em contatar a nossa equipe
            através do e-mail - (ardmotoregarantia.com.br.)
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Modificações nesta Política
          </h2>
          <p className="mb-4">
            A ARD Garantia pode modificar esta Política de
            Privacidade periodicamente para refletir as mudanças nas nossas
            práticas ou nas leis aplicáveis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Políticas Complementares
          </h2>
          <p className="mb-4">
            Esta Política de Privacidade é complementar a outras políticas e
            declarações fornecidas pela ARD Garantia, que
            podem incluir termos de uso específicos para os serviços fornecidos
            pela empresa.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Como contatar a ARD Garantia sobre esta Política
            de Privacidade
          </h2>
          <p className="mb-4">
            Se você tiver dúvidas sobre esta Política de Privacidade, ou sobre
            como a ARD Garantia coleta e usa os seus dados
            pessoais, por favor, entre em contato conosco pelo e-mail -
            (ardmotoregarantia.com.br.)
          </p>
        </section>
      </div>
      <ContentFooter />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
