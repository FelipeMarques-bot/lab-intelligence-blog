import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Calendar, BarChart3, Menu, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import adminImg from "@/assets/admin.jpg";
import teacherImg from "@/assets/teacher.jpg";
import studentImg from "@/assets/student.jpg";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";
import ctaImg from "@/assets/cta.jpg";
import { useInView } from "@/hooks/use-in-view";

function AnimatedSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-on-scroll visible" : "animate-on-scroll"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Landing,
});

const SITE = "https://www.intelligencelab.com.br/";
const SIGNUP = "https://www.intelligencelab.com.br/";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Blog", href: "#blog" },
  { label: "Como Funciona", href: "#how" },
  { label: "Preços", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="inline-block size-7 rounded-md bg-gradient-brand glow-cyan" />
          <span className="text-base sm:text-lg">
            LAB <span className="text-gradient-brand">INTELLIGENCE</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={SIGNUP} className="hidden sm:inline-flex">
            <Button variant="brand" size="sm">Entrar</Button>
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-muted-foreground" aria-label="Menu">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 menu-slide-down">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 rounded-full border border-glow px-3 py-1 text-xs text-primary">
            <Sparkles className="size-3.5" />
            Plataforma web e mobile — Novo: Portal dos Responsáveis
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Gestão inteligente de <span className="text-gradient-brand">laboratório</span>, comunicação escolar e portal dos responsáveis
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Centralize agendamento de laboratórios, recados de professores e comunicação com famílias em uma plataforma web e mobile com visão em tempo real.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#blog"><Button variant="brand" size="lg">Leia as histórias de sucesso <ArrowRight className="size-4" /></Button></a>
            <a href="#how"><Button variant="outlineGlow" size="lg">Como funciona</Button></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Check className="size-4 text-primary" /> 30 dias grátis</div>
            <div className="flex items-center gap-2"><Check className="size-4 text-primary" /> Sem cartão</div>
            <div className="flex items-center gap-2"><Check className="size-4 text-primary" /> Setup em minutos</div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200} className="relative">
          <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border-glow">
            <img src={hero} alt="Professores e alunos em laboratório de tecnologia" width={1600} height={1000} className="w-full h-auto" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

const ROLES = [
  {
    icon: "🧑‍💼",
    title: "Administrador: Controle Total",
    img: adminImg,
    desc: "Gerencie professores, recursos, turmas, disciplinas e comunicação institucional em um único painel com visibilidade total da operação.",
    items: [
      "Cadastro de professores",
      "Gerenciamento de recursos (laboratórios, equipamentos)",
      "Criação de turmas e disciplinas",
      "Configuração do Portal dos Responsáveis",
      "Acompanhamento de recados e comunicados",
      "Link exclusivo para onboarding de professores",
      "Relatórios e exportação de dados",
    ],
  },
  {
    icon: "🧑‍🏫",
    title: "Professor: Agendar com Facilidade",
    img: teacherImg,
    desc: "Professores acessam com Google Login, agendam laboratórios em segundos e enviam recados para as famílias sem sair da plataforma.",
    items: [
      "Login com Google",
      "Agendamento rápido de laboratórios",
      "Sincronização com Google Calendar",
      "Envio de recados para responsáveis",
      "Histórico de comunicados por turma",
      "Visualização de recursos disponíveis",
      "Confirmação instantânea de agendamento",
      "Acesso web, mobile e desktop",
    ],
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Responsáveis: Acompanhamento em Tempo Real",
    img: studentImg,
    desc: "Famílias acessam um portal dedicado para acompanhar recados, atualizações e comunicação oficial da escola de forma simples e segura.",
    items: [
      "Portal dos Responsáveis",
      "Recebimento de recados de professores",
      "Central de comunicados escolares",
      "Acesso seguro por perfil",
      "Histórico de mensagens e avisos",
    ],
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">Como a plataforma funciona</h2>
          <p className="mt-4 text-muted-foreground">Um fluxo simples e intuitivo para administradores, professores e responsáveis.</p>
        </AnimatedSection>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {ROLES.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 150} className="hover-lift">
              <article className="group rounded-2xl bg-card border border-border hover:border-glow transition-all overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.img} alt={r.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-3xl">{r.icon}</div>
                  <h3 className="mt-2 text-xl font-semibold">{r.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {r.items.map((it) => (
                      <li key={it} className="flex gap-2"><Check className="size-4 text-primary shrink-0 mt-0.5" /> <span>{it}</span></li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const POSTS = [
  { img: blog1, title: "Rede escolar aumenta em 42% o uso dos laboratórios com agendamento centralizado", category: "Gestão Escolar", date: "22 de julho de 2026", summary: "Ao centralizar reservas e disponibilidade em tempo real, a rede eliminou sobreposição de horários e ampliou o uso pedagógico dos laboratórios em menos de um semestre." },
  { img: blog2, title: "Portal dos Responsáveis melhora comunicação com famílias e reduz ruído operacional", category: "Comunicação Escolar", date: "16 de julho de 2026", summary: "Com recados organizados por turma e histórico de comunicados, a escola padronizou a comunicação com famílias e reduziu retrabalho da secretaria." },
  { img: blog3, title: "Instituição integra recados, calendário e relatórios em uma única operação", category: "Transformação Digital", date: "8 de julho de 2026", summary: "A integração entre agendamento, Google Calendar e relatórios trouxe previsibilidade para coordenação e professores, com ganho de eficiência na rotina escolar." },
];

function Blog() {
  return (
    <section id="blog" className="py-24 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">histórias de <span className="text-gradient-brand">Sucesso</span></h2>
          <p className="mt-4 text-muted-foreground">Veja como escolas reais transformaram agendamento, comunicação escolar e relacionamento com famílias.</p>
        </AnimatedSection>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 150}>
              <article className="group rounded-2xl bg-card border border-border hover:border-glow hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-primary font-medium">{p.category}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground flex-1">{p.summary}</p>
                  <a href={SIGNUP} className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                    Tenha essa experiência também <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Como funciona o login dos professores?", a: "Professores fazem login com Google de forma rápida e segura. O administrador pode enviar um link exclusivo de onboarding para acelerar a entrada da equipe." },
  { q: "O que é o Portal dos Responsáveis?", a: "É um ambiente dedicado para famílias acompanharem recados, comunicados e atualizações enviados pela escola e pelos professores." },
  { q: "Como os recados de professores chegam às famílias?", a: "Os recados são publicados por turma e ficam disponíveis no Portal dos Responsáveis com histórico, facilitando o acompanhamento contínuo." },
  { q: "Posso sincronizar com Google Calendar?", a: "Sim. Quando um professor agenda um laboratório, o evento pode ser sincronizado automaticamente com o Google Calendar." },
  { q: "Como funciona o agendamento de laboratórios?", a: "O professor seleciona laboratório, data e horário. O sistema valida conflitos automaticamente e confirma o agendamento em segundos." },
  { q: "Quais informações o administrador consegue ver?", a: "Dashboard com agendamentos, disponibilidade de recursos, turmas, comunicação enviada e relatórios para apoio à gestão." },
  { q: "A plataforma funciona em celular?", a: "Sim. A solução é web e mobile, com experiência otimizada para administração, professores e responsáveis." },
  { q: "Como adiciono novos laboratórios e recursos?", a: "No painel administrativo, acesse Recursos para cadastrar laboratórios, equipamentos e regras de disponibilidade." },
  { q: "Existe período de teste antes de assinar?", a: "Sim. Você pode testar por 30 dias, sem cartão de crédito, com acesso às funcionalidades essenciais da plataforma." },
  { q: "Quais são os planos e valores atuais?", a: "Os planos começam em R$ 39,90/mês e evoluem conforme número de professores, laboratórios e nível de suporte necessário." },
];

function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Dúvidas Frequentes</h2>
          <p className="mt-4 text-muted-foreground">Respostas para as perguntas mais comuns.</p>
        </AnimatedSection>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <AccordionItem value={`item-${i}`} className="rounded-xl bg-card border border-border px-5">
                <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            </AnimatedSection>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const COMPARE = [
  ["Agendamentos por email/planilha", "Agendamentos centralizados"],
  ["Conflitos de horário frequentes", "Sistema valida conflitos"],
  ["Professores não sabem disponibilidade", "Visibilidade em tempo real"],
  ["Difícil rastrear uso de recursos", "Relatórios detalhados"],
  ["Sem integração com calendário", "Sincroniza com Google Calendar"],
  ["Famílias sem canal central de acompanhamento", "Portal dos Responsáveis com histórico"],
  ["Recados dispersos em múltiplos canais", "Comunicação escolar em um só lugar"],
  ["Acesso apenas no computador", "Funciona em web, mobile e desktop"],
  ["Sem controle de acesso", "Segurança por autenticação"],
  ["Dados espalhados em vários lugares", "Tudo centralizado e organizado"],
];

function Compare() {
  return (
    <section className="py-24 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Transformação com <span className="text-gradient-brand">Lab Intelligence</span></h2>
        </AnimatedSection>
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <AnimatedSection delay={100} className="rounded-2xl bg-card border border-border p-6">
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Antes</div>
            <ul className="space-y-3">
              {COMPARE.map(([a]) => (
                <li key={a} className="flex gap-3 text-sm"><span className="text-destructive">✖</span> <span className="text-muted-foreground">{a}</span></li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={250} className="rounded-2xl bg-card border-glow p-6">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Depois</div>
            <ul className="space-y-3">
              {COMPARE.map(([, b]) => (
                <li key={b} className="flex gap-3 text-sm"><Check className="size-4 text-primary mt-0.5 shrink-0" /> <span>{b}</span></li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  { name: "MICRO", price: "R$ 39,90", suffix: "/mês", features: ["15 professores", "1 laboratório", "Portal dos Responsáveis", "Suporte por email"] },
  { name: "SMALL", price: "R$ 52,90", suffix: "/mês", features: ["25 professores", "3 laboratórios", "Recados por turma", "Suporte por email"] },
  { name: "STARTER", price: "R$ 69,90", suffix: "/mês", popular: true, features: ["50 professores", "10 laboratórios", "Suporte prioritário", "Relatórios avançados", "Comunicação com famílias"] },
  { name: "PROFESSIONAL", price: "R$ 199,00", suffix: "/mês", features: ["500 professores", "Laboratórios ilimitados", "Suporte 24/7", "Integrações customizadas", "Gestão multiunidade"] },
  { name: "ENTERPRISE", price: "R$ 249,00", suffix: "/mês", enterprise: true, features: ["Professores ilimitados", "Laboratórios ilimitados", "Suporte dedicado", "SLA garantido", "Implantação assistida"] },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">Escolha o plano ideal para sua instituição</h2>
          <p className="mt-4 text-muted-foreground">Trial de 30 dias. Sem cartão de crédito.</p>
        </AnimatedSection>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PLANS.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 100} className={p.popular ? "lg:scale-105" : ""}>
              <div
                className={`relative rounded-2xl bg-card p-6 flex flex-col hover-lift ${
                  p.popular ? "border-glow lg:scale-105" : p.enterprise ? "border-glow-purple" : "border border-border"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold text-primary-foreground">
                    <Star className="size-3 fill-current" /> MAIS POPULAR
                  </div>
                )}
                <h3 className="text-sm font-semibold tracking-wider text-muted-foreground">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{p.price}</span>
                  {"suffix" in p && p.suffix ? <span className="text-sm text-muted-foreground">{p.suffix}</span> : null}
                </div>
                <ul className="mt-6 space-y-2 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="size-4 text-primary shrink-0 mt-0.5" /> {f}</li>
                  ))}
                </ul>
                <a href={SIGNUP} className="mt-6">
                  <Button variant={p.popular ? "brand" : p.enterprise ? "purple" : "outlineGlow"} className="w-full">
                    Começar
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaImg} alt="" aria-hidden width={1600} height={800} loading="lazy" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-background/85 to-primary/40" />
      </div>
      <AnimatedSection className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold">Transforme a Gestão de laboratórios da sua instituição</h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Agendamento inteligente, Portal dos Responsáveis e comunicação escolar centralizada para aproximar escola e famílias.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={SIGNUP}>
            <Button variant="brand" size="lg" className="glow-pulse">Crie sua instituição gratuitamente <ArrowRight className="size-4" /></Button>
          </a>
          <a href={SIGNUP}>
            <Button variant="outlineGlow" size="lg">Já tenho conta</Button>
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}

function Footer() {
  return (
    <AnimatedSection>
      <footer className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 font-display font-bold">
              <span className="inline-block size-7 rounded-md bg-gradient-brand glow-cyan" />
              LAB <span className="text-gradient-brand">INTELLIGENCE</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Plataforma inteligente para gestão de laboratório, comunicação escolar e relacionamento com responsáveis.
            </p>
            <a href={SIGNUP} className="mt-4 inline-block text-sm text-primary hover:underline">
              www.intelligencelab.com.br
            </a>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Links úteis</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-primary">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Calendar className="size-4 text-primary" /> Agendamento inteligente</li>
              <li className="flex items-center gap-2"><BarChart3 className="size-4 text-primary" /> Relatórios em tempo real</li>
              <li className="flex items-center gap-2"><Sparkles className="size-4 text-primary" /> Portal dos Responsáveis</li>
              <li className="flex items-center gap-2"><Sparkles className="size-4 text-primary" /> Recados e comunicação com famílias</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground text-center">
            © 2026 Plataforma Lab Intelligence. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
}

function Landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Blog />
        <FAQ />
        <Compare />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
