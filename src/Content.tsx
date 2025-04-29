import Eu from './assets/imagens/ChiraiInsta.png'
import './style.css'

// Lista de projetos
const projects = [
  {
    title: "Portifólio",
    description: "Em um app que eu fiz com React Native estão várias artes que eu fiz.",
    link: "...",
  },
  {
    title: "Pedagogia na cultura",
    description: "...",
    link: "...",
  },
];

// Componente principal do conteúdo do portfólio
const Content = () => {
    return (
        <main className="content">
          <div>
            <h2>Meus Objetivos</h2>
                <p>
                    Meu trabalho busca conectar conhecimento com impacto social. Ao longo da minha
                    trajetória procuro desenvolver projetos que envolvem educação, cultura, biblioteconomia
                    e inclusão. A tecnologia, arte, música e dança são ferramentas que utilizo para facilitar o acesso
                    à informação e transformar realidades.
                </p>
          </div>
            {/* Seção com imagem + texto em duas colunas */}
            <section className="two-columns">
                <div className="column image-column">
                    <img
                        src={Eu}
                        alt="Imagem ilustrativa"
                    />
                </div>
                <div className="column text-column">
  <h1>Habilidades e Hobbies</h1>
  <ul>
    <li>🎨 Adoro pintar (principalmente a parede do meu quarto)</li>
    <li>💃 Gosto muito de dançar</li>
    <li>🎸 Gosto de tentar aprender a tocar instrumentos musicais novos</li>
    <li>📝 Tento escrever poemas, compor músicas e criar coreografias simples e básicas</li>
  </ul>
  <h1>Trabalhos</h1>
  <ul>
    <li>📚 Trabalho voluntário na biblioteca</li>
    <li>🤝 Ajudante no SESI (Voluntário)</li>
    <li>🎨 Pintura facial</li>
    <li>👟 Pintura em tênis</li>
    <li>🖌️ Pintura na parede</li>
    <li>✨ Entre outros...</li>
  </ul>
</div>

            </section>

            {/* Lista de projetos */}
            <section className="projects">
                <h2>Projetos</h2>
                <div className="project-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                Saber mais
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Content;