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
      <div className="max-w-4xl mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Introdução</h2>
          <p className="text-gray-700">
            A ARD valoriza a privacidade dos seus usuários e se
            compromete a proteger todas as informações pessoais coletadas. Esta
            Política de Privacidade descreve como coletamos, usamos, protegemos
            e compartilhamos suas informações pessoais quando você utiliza
            nossos serviços e nosso site (www.ardmotorecambio.com.br).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Coleta de Informações</h2>

          <h3 className="text-xl font-medium mb-2">
            1. Informações que você nos fornece:
          </h3>
          <p className="text-gray-700 mb-4">
            - <strong>Cadastro e Contato:</strong> Quando você se cadastra em
            nosso site ou entra em contato conosco, coletamos informações como
            nome, e-mail, telefone e outras informações de contato.
          </p>
          <p className="text-gray-700 mb-4">
            - <strong>Formulários de Solicitação:</strong> Informações
            fornecidas em formulários de solicitação de serviços, como
            especificações do projeto e preferências do usuário.
          </p>

          <h3 className="text-xl font-medium mb-2">
            2. Informações que coletamos automaticamente:
          </h3>
          <p className="text-gray-700 mb-4">
            - <strong>Cookies e Tecnologias Semelhantes:</strong> Utilizamos
            cookies para coletar informações sobre suas interações com nosso
            site, como páginas visitadas, tempo de navegação e outras
            estatísticas.
          </p>
          <p className="text-gray-700">
            - <strong>Dados de Uso:</strong> Informações sobre como você utiliza
            nosso site, incluindo seu endereço IP, tipo de navegador, provedores
            de serviços de Internet (ISP), páginas de referência/saída, sistema
            operacional, carimbo de data/hora e dados de fluxo de cliques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Uso das Informações</h2>
          <p className="text-gray-700 mb-4">
            Utilizamos as informações coletadas para diversos fins, incluindo:
          </p>
          <p className="text-gray-700 mb-4">
            - <strong>Fornecer e Melhorar nossos Serviços:</strong> Utilizamos
            suas informações para fornecer, operar, manter e melhorar nossos
            serviços, incluindo personalizar sua experiência no site.
          </p>
          <p className="text-gray-700 mb-4">
            - <strong>Comunicação:</strong> Utilizamos suas informações para
            comunicar com você sobre nossos serviços, enviar atualizações,
            responder a consultas e fornecer suporte ao cliente.
          </p>
          <p className="text-gray-700 mb-4">
            - <strong>Marketing:</strong> Com seu consentimento, podemos
            utilizar suas informações para enviar materiais promocionais e
            atualizações sobre nossos serviços.
          </p>
          <p className="text-gray-700">
            - <strong>Segurança:</strong> Utilizamos suas informações para
            monitorar e analisar o uso de nosso site e serviços, prevenir
            fraudes e proteger nossos direitos e propriedades.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Compartilhamento de Informações
          </h2>
          <p className="text-gray-700 mb-4">
            Não compartilhamos suas informações pessoais com terceiros, exceto
            nas seguintes circunstâncias:
          </p>
          <p className="text-gray-700 mb-4">
            - <strong>Provedores de Serviço:</strong> Podemos compartilhar suas
            informações com terceiros que realizam serviços em nosso nome, como
            hospedagem de site, análise de dados, processamento de pagamentos e
            serviços de marketing. Esses provedores de serviço só terão acesso
            às informações necessárias para realizar suas funções e são
            obrigados a manter a confidencialidade das informações.
          </p>
          <p className="text-gray-700 mb-4">
            - <strong>Obrigação Legal:</strong> Podemos divulgar suas
            informações se exigido por lei ou se acreditarmos que tal ação é
            necessária para cumprir uma obrigação legal, proteger nossos
            direitos, investigar fraudes ou responder a uma solicitação do
            governo.
          </p>
          <p className="text-gray-700">
            - <strong>Consentimento:</strong> Podemos compartilhar suas
            informações com terceiros se você nos der seu consentimento para
            fazê-lo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Proteção de Informações
          </h2>
          <p className="text-gray-700">
            Adotamos medidas de segurança apropriadas para proteger suas
            informações pessoais contra acesso não autorizado, alteração,
            divulgação ou destruição. Isso inclui revisões internas de nossas
            práticas de coleta, armazenamento e processamento de dados e medidas
            de segurança, bem como medidas de segurança física para proteger
            contra acesso não autorizado aos sistemas onde armazenamos suas
            informações pessoais.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Seus Direitos</h2>
          <p className="text-gray-700">
            Você tem o direito de acessar, corrigir, atualizar ou solicitar a
            exclusão das suas informações pessoais. Para exercer esses direitos,
            entre em contato conosco através do e-mail contato@weroweb.com.br.
            Responderemos à sua solicitação dentro de um prazo razoável e de
            acordo com a legislação aplicável.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Alterações nesta Política de Privacidade
          </h2>
          <p className="text-gray-700">
            Podemos atualizar esta Política de Privacidade de tempos em tempos.
            Notificaremos sobre quaisquer alterações publicando a nova política
            de privacidade em nosso site. Recomenda-se revisar esta política
            periodicamente para se manter informado sobre como estamos
            protegendo suas informações.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contato</h2>
          <p className="text-gray-700">
            Se você tiver alguma dúvida ou preocupação sobre esta Política de
            Privacidade ou sobre nossas práticas de privacidade, entre em
            contato conosco através do e-mail contato@weroweb.com.br
          </p>
        </section>
      </div>
      <ContentFooter />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
