import Header from "../components/header";
import banner from "../assets/banner-home.png";
import Footer from "../components/footer";
import ContentFooter from "../components/content-footer";

const About = () => {
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
            Sobre a ARD Garantia
          </p>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="mx-auto px-20">
          <div>
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Quem Somos</h2>
              <p className="text-lg mb-4">
                Localizada em Ribeirão Preto, SP, a{" "}
                <strong>ARD Garantia para motor câmbio</strong> é especializada
                em oferecer garantia estendida para motores e câmbios de
                veículos semi-novos. Nossa missão é proporcionar a máxima
                proteção e tranquilidade para nossos clientes, assegurando que
                seus veículos permaneçam em perfeito estado de funcionamento
                além da garantia original fornecida pelo revendedor.
              </p>
              <p className="text-lg mb-4">
                Desde a nossa fundação, temos nos dedicado a oferecer um produto
                de alta qualidade: a Garantia Motor e Câmbio. Com ela, nossos
                clientes têm a certeza de que estarão cobertos contra eventuais
                problemas mecânicos, garantindo um suporte completo e confiável
                para qualquer necessidade que possa surgir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">
                Missão, Visão e Valores
              </h2>
              <div className="grid gap-8 md:grid-cols-1">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Missão</h3>
                  <p className="text-lg">
                    Oferecer garantias estendidas para motores e câmbios de
                    veículos semi-novos com o mais alto padrão de qualidade,
                    proporcionando segurança e tranquilidade para nossos
                    clientes.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Visão</h3>
                  <p className="text-lg">
                    Ser reconhecida como a principal fornecedora de garantias
                    estendidas no Brasil, estabelecendo padrões elevados de
                    confiança e excelência no mercado automotivo.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Valores</h3>
                  <ul className="list-disc list-inside text-lg">
                    <li>
                      Transparência: Agir com clareza e honestidade em todas as
                      interações.
                    </li>
                    <li>
                      Qualidade: Comprometidos com a excelência e inovação
                      contínua.
                    </li>
                    <li>
                      Responsabilidade: Garantir que nossos produtos atendam às
                      expectativas e necessidades dos nossos clientes.
                    </li>
                    <li>
                      Respeito: Tratar todos com dignidade e consideração,
                      promovendo um ambiente de trabalho inclusivo e
                      colaborativo.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Nossa História</h2>
              <p className="text-lg mb-4">
                A <strong>ARD Garantia para motor câmbio</strong> foi fundada
                com o propósito de suprir uma lacuna no mercado de veículos
                semi-novos. Com uma equipe experiente e dedicada, começamos
                nossa jornada com a missão de oferecer uma solução de garantia
                que proporcionasse maior segurança e confiança para os
                proprietários de veículos.
              </p>
              <p className="text-lg mb-4">
                Desde o início, nos destacamos pela nossa abordagem centrada no
                cliente, sempre buscando entender e atender às necessidades
                específicas de cada um. Ao longo dos anos, ampliamos nossa
                oferta e solidificamos nossa presença no mercado, mantendo o
                compromisso com a excelência e a inovação.
              </p>
            </section>

            {/* Seção da Equipe */}
            {/* <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Nossa Equipe</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img
                  src="/assets/team-member1.jpg" // Substitua com a URL da foto do membro da equipe
                  alt="Membro da Equipe 1"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">João Silva</h3>
                <p className="text-lg">CEO e Fundador</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img
                  src="/assets/team-member2.jpg" // Substitua com a URL da foto do membro da equipe
                  alt="Membro da Equipe 2"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Maria Oliveira</h3>
                <p className="text-lg">Gerente de Operações</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img
                  src="/assets/team-member3.jpg" // Substitua com a URL da foto do membro da equipe
                  alt="Membro da Equipe 3"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Carlos Souza</h3>
                <p className="text-lg">Diretor de Atendimento ao Cliente</p>
              </div>
            </div>
          </section> */}

            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Nosso Impacto</h2>
              <p className="text-lg mb-4">
                Ao longo dos anos, a{" "}
                <strong>ARD Garantia para motor câmbio</strong> tem se destacado
                por seu compromisso em oferecer um serviço de alta qualidade e
                confiança. Nossa garantia estendida não só proporciona uma
                camada adicional de proteção, mas também contribui para a
                tranquilidade dos nossos clientes, permitindo-lhes aproveitar ao
                máximo seus veículos sem preocupações com problemas mecânicos
                inesperados.
              </p>
              <p className="text-lg mb-4">
                Estamos orgulhosos de nosso impacto positivo na comunidade local
                e na vida de nossos clientes. Através de nossa abordagem
                dedicada e inovadora, continuamos a expandir nossas operações e
                aprimorar nossos serviços para atender cada vez melhor às
                necessidades do mercado.
              </p>
            </section>
          </div>
        </div>
      </div>
      <ContentFooter />
      <Footer />
    </>
  );
};

export default About;
