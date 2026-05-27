<<<<<<< HEAD
﻿import { createFileRoute } from "@tanstack/react-router";
=======
import { createFileRoute } from "@tanstack/react-router";
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
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

export const Route = createFileRoute("/")({
  component: Landing,
});

<<<<<<< HEAD
const SITE = "https://www.intelligencelab.com.br/";
const SIGNUP = "https://www.intelligencelab.com.br/";
=======
const SITE = "https://www.intelligencelab.com.br";
const SIGNUP = "https://www.intelligencelab.com.br/criar-instituicao";
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)

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
<<<<<<< HEAD
          <a href={SIGNUP} className="hidden sm:inline-flex">
=======
          <a href={SITE} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex">
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
            <Button variant="brand" size="sm">Entrar</Button>
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-muted-foreground" aria-label="Menu">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
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
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-glow px-3 py-1 text-xs text-primary">
            <Sparkles className="size-3.5" />
            A FRONTEIRA DA INTELIGÊNCIA SINTÉTICA
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Gestão inteligente de <span className="text-gradient-brand">laboratórios</span> com visão em tempo real
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
<<<<<<< HEAD
            Descubra como escolas e universidades transformam a Gestão de laboratórios em agendamento simples, relatórios poderosos e operação sem conflitos.
=======
            Descubra como escolas e universidades transformam a gestão de laboratórios — agendamento simples, relatórios poderosos e operação sem conflitos.
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
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
        </div>
        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border-glow">
            <img src={hero} alt="Professores e alunos em laboratório de tecnologia" width={1600} height={1000} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

const ROLES = [
  {
<<<<<<< HEAD
    icon: "🧑‍💼",
=======
    icon: "👨‍💼",
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
    title: "Administrador: Controle Total",
    img: adminImg,
    desc: "Gerencie professores, recursos, turmas e disciplinas em um único painel. Veja em tempo real quantos agendamentos existem, quantos professores estão cadastrados e quais recursos estão disponíveis.",
    items: [
      "Cadastro de professores",
      "Gerenciamento de recursos (laboratórios, equipamentos)",
      "Criação de turmas e disciplinas",
      "Link exclusivo para onboarding de professores",
<<<<<<< HEAD
      "relatórios e exportação de dados",
=======
      "Relatórios e exportação de dados",
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
      "Upgrade de plano conforme crescimento",
    ],
  },
  {
<<<<<<< HEAD
    icon: "🧑‍🏫",
=======
    icon: "👨‍🏫",
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
    title: "Professor: Agendar com Facilidade",
    img: teacherImg,
    desc: "Professores acessam com Google Login e agendam laboratórios em segundos. Sincronize automaticamente com Google Calendar para nunca perder um agendamento.",
    items: [
      "Login com Google",
      "Agendamento rápido de laboratórios",
      "Sincronização com Google Calendar",
      "Visualização de recursos disponíveis",
      "Confirmação instantânea de agendamento",
      "Acesso mobile e desktop",
    ],
  },
  {
    icon: "👨‍🎓",
    title: "Aluno: Aprender em Ambientes Modernos",
    img: studentImg,
    desc: "Alunos acessam salas de tecnologia educacional quando agendadas pelos professores. Ambiente seguro, organizado e com recursos disponíveis para aprendizado prático.",
    items: [
      "Acesso a laboratórios agendados",
      "Recursos educacionais disponíveis",
      "Ambiente seguro e organizado",
      "Suporte de professores capacitados",
      "Aprendizado prático e imersivo",
    ],
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">Como a plataforma funciona</h2>
          <p className="mt-4 text-muted-foreground">Um fluxo simples e intuitivo para administradores, professores e alunos.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {ROLES.map((r) => (
            <article key={r.title} className="group rounded-2xl bg-card border border-border hover:border-glow transition-all overflow-hidden">
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
          ))}
        </div>
      </div>
    </section>
  );
}

const POSTS = [
  { img: blog1, title: "Como a Escola Municipal de Tecnologia aumentou em 40% o uso de laboratórios", category: "Educação Pública", date: "15 de maio de 2026", summary: "Antes da Lab Intelligence, a escola tinha dificuldade em organizar agendamentos. Professores não sabiam quando os laboratórios estavam disponíveis. Com a plataforma, o uso aumentou 40% em 3 meses." },
  { img: blog2, title: "Universidade Federal reduz conflitos de agendamento em 95%", category: "Educação Superior", date: "10 de maio de 2026", summary: "A universidade tinha conflitos constantes de agendamento. Com Lab Intelligence, todos os professores veem a disponibilidade em tempo real e sincronizam com Google Calendar." },
  { img: blog3, title: "Instituto de Pesquisa otimiza uso de equipamentos caros", category: "Pesquisa", date: "5 de maio de 2026", summary: "Com relatórios detalhados da Lab Intelligence, o instituto descobriu que alguns equipamentos estavam subutilizados. Realocou recursos e aumentou eficiência em 60%." },
];

function Blog() {
  return (
    <section id="blog" className="py-24 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
<<<<<<< HEAD
          <h2 className="text-3xl sm:text-4xl font-bold">histórias de <span className="text-gradient-brand">Sucesso</span></h2>
          <p className="mt-4 text-muted-foreground">Veja como escolas reais transformaram a Gestão de laboratórios.</p>
=======
          <h2 className="text-3xl sm:text-4xl font-bold">Histórias de <span className="text-gradient-brand">Sucesso</span></h2>
          <p className="mt-4 text-muted-foreground">Veja como escolas reais transformaram a gestão de laboratórios.</p>
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <article key={p.title} className="group rounded-2xl bg-card border border-border hover:border-glow hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
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
<<<<<<< HEAD
                <a href={SIGNUP} className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                  Tenha essa experiência também <ArrowRight className="size-4" />
=======
                <a href={SITE} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-2.5 transition-all">
                  Leia a história completa <ArrowRight className="size-4" />
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
<<<<<<< HEAD
  { q: "Como funciona o login dos professores?", a: "Professores fazem login com Google (ainda em construção). É rápido, seguro e sem necessidade de criar nova senha. O administrador compartilha um link exclusivo para onboarding." },
  { q: "Posso sincronizar com Google Calendar?", a: "Sim! Quando um professor agenda um laboratório, o evento aparece automaticamente no Google Calendar. Sincronização bidirecional para máxima conveniência (ainda em construção)." },
  { q: "Como funciona o agendamento de laboratórios?", a: "O professor acessa a plataforma, seleciona o laboratório desejado, escolhe a data e horário disponí­vel, e confirma. O sistema valida conflitos automaticamente." },
=======
  { q: "Como funciona o login dos professores?", a: "Professores fazem login com Google. É rápido, seguro e sem necessidade de criar nova senha. O administrador compartilha um link exclusivo para onboarding." },
  { q: "Posso sincronizar com Google Calendar?", a: "Sim! Quando um professor agenda um laboratório, o evento aparece automaticamente no Google Calendar. Sincronização bidirecional para máxima conveniência." },
  { q: "Como funciona o agendamento de laboratórios?", a: "O professor acessa a plataforma, seleciona o laboratório desejado, escolhe a data e horário disponível, e confirma. O sistema valida conflitos automaticamente." },
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
  { q: "Quais informações o administrador consegue ver?", a: "Dashboard completo com: total de agendamentos, número de professores cadastrados, recursos disponíveis, turmas criadas, e relatórios detalhados para exportação." },
  { q: "A plataforma funciona em celular?", a: "Sim! Temos versões mobile otimizadas para iOS e Android. Professores podem agendar de qualquer lugar, a qualquer hora." },
  { q: "Como adiciono novos laboratórios e recursos?", a: "No painel administrativo, clique em 'Recursos' e adicione novos laboratórios, equipamentos ou salas. Defina disponibilidade por dia da semana." },
  { q: "Posso criar turmas e disciplinas?", a: "Sim! Organize turmas por disciplina, semestre e professor. Isso ajuda a manter agendamentos consistentes e facilita relatórios por área." },
<<<<<<< HEAD
  { q: "Como exporto relatórios de uso?", a: "Na seção 'relatórios', você pode gerar relatórios em PDF ou Excel com dados de agendamentos, uso de recursos, professores mais ativos, etc." },
  { q: "Existe perí­odo de teste antes de assinar?", a: "Sim! 30 dias de teste gratuito sem necessidade de cartão de crédito. Teste todas as funcionalidades antes de escolher seu plano." },
=======
  { q: "Como exporto relatórios de uso?", a: "Na seção 'Relatórios', você pode gerar relatórios em PDF ou Excel com dados de agendamentos, uso de recursos, professores mais ativos, etc." },
  { q: "Existe período de teste antes de assinar?", a: "Sim! 30 dias de teste gratuito sem necessidade de cartão de crédito. Teste todas as funcionalidades antes de escolher seu plano." },
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
  { q: "Qual plano é ideal para minha instituição?", a: "Temos 5 planos: Micro (15 prof), Small (25 prof), Starter (50 prof), Professional (500 prof) e Enterprise (ilimitado). Escolha conforme seu tamanho." },
];

function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Dúvidas Frequentes</h2>
          <p className="mt-4 text-muted-foreground">Respostas para as perguntas mais comuns.</p>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-xl bg-card border border-border px-5">
              <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
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
<<<<<<< HEAD
  ["Difí­cil rastrear uso de recursos", "relatórios detalhados"],
=======
  ["Difícil rastrear uso de recursos", "Relatórios detalhados"],
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
  ["Sem integração com calendário", "Sincroniza com Google Calendar"],
  ["Acesso apenas no computador", "Funciona em mobile e desktop"],
  ["Sem controle de acesso", "Segurança por autenticação"],
  ["Dados espalhados em vários lugares", "Tudo centralizado e organizado"],
];

function Compare() {
  return (
    <section className="py-24 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Transformação com <span className="text-gradient-brand">Lab Intelligence</span></h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Antes</div>
            <ul className="space-y-3">
              {COMPARE.map(([a]) => (
<<<<<<< HEAD
                <li key={a} className="flex gap-3 text-sm"><span className="text-destructive">✖</span> <span className="text-muted-foreground">{a}</span></li>
=======
                <li key={a} className="flex gap-3 text-sm"><span className="text-destructive">✕</span> <span className="text-muted-foreground">{a}</span></li>
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-card border-glow p-6">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Depois</div>
            <ul className="space-y-3">
              {COMPARE.map(([, b]) => (
                <li key={b} className="flex gap-3 text-sm"><Check className="size-4 text-primary mt-0.5 shrink-0" /> <span>{b}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  { name: "MICRO", price: "R$ 34,95", features: ["15 professores", "1 laboratório", "Suporte por email"] },
  { name: "SMALL", price: "R$ 44,85", features: ["25 professores", "3 laboratórios", "Suporte por email"] },
<<<<<<< HEAD
  { name: "STARTER", price: "R$ 59,32", popular: true, features: ["50 professores", "10 laboratórios", "Suporte prioritário", "relatórios avançados"] },
  { name: "PROFESSIONAL", price: "R$ 179,16", features: ["500 professores", "laboratórios ilimitados", "Suporte 24/7", "Integrações customizadas"] },
  { name: "ENTERPRISE", price: "R$ 209,62", enterprise: true, features: ["Professores ilimitados", "laboratórios ilimitados", "Suporte dedicado", "SLA garantido"] },
=======
  { name: "STARTER", price: "R$ 59,32", popular: true, features: ["50 professores", "10 laboratórios", "Suporte prioritário", "Relatórios avançados"] },
  { name: "PROFESSIONAL", price: "R$ 179,16", features: ["500 professores", "Laboratórios ilimitados", "Suporte 24/7", "Integrações customizadas"] },
  { name: "ENTERPRISE", price: "R$ 209,62", enterprise: true, features: ["Professores ilimitados", "Laboratórios ilimitados", "Suporte dedicado", "SLA garantido"] },
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
];

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">Escolha o plano ideal para sua instituição</h2>
          <p className="mt-4 text-muted-foreground">Trial de 30 dias. Sem cartão de crédito.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl bg-card p-6 flex flex-col ${
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
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="size-4 text-primary shrink-0 mt-0.5" /> {f}</li>
                ))}
              </ul>
<<<<<<< HEAD
              <a href={SIGNUP} className="mt-6">
=======
              <a href={SIGNUP} target="_blank" rel="noopener noreferrer" className="mt-6">
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
                <Button variant={p.popular ? "brand" : p.enterprise ? "purple" : "outlineGlow"} className="w-full">
                  Começar
                </Button>
              </a>
            </div>
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
      <div className="relative mx-auto max-w-4xl px-6 text-center">
<<<<<<< HEAD
        <h2 className="text-3xl sm:text-5xl font-bold">Transforme a Gestão de laboratórios da sua instituição</h2>
=======
        <h2 className="text-3xl sm:text-5xl font-bold">Transforme a gestão de laboratórios da sua instituição</h2>
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Período de teste, onboarding rápido e operação inteligente para equipes acadêmicas.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
<<<<<<< HEAD
          <a href={SIGNUP}>
            <Button variant="brand" size="lg">Crie sua instituição gratuitamente <ArrowRight className="size-4" /></Button>
          </a>
          <a href={SIGNUP}>
=======
          <a href={SIGNUP} target="_blank" rel="noopener noreferrer">
            <Button variant="brand" size="lg">Crie sua instituição gratuitamente <ArrowRight className="size-4" /></Button>
          </a>
          <a href={SITE} target="_blank" rel="noopener noreferrer">
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
            <Button variant="outlineGlow" size="lg">Já tenho conta</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-bold">
            <span className="inline-block size-7 rounded-md bg-gradient-brand glow-cyan" />
            LAB <span className="text-gradient-brand">INTELLIGENCE</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
<<<<<<< HEAD
            Plataforma inteligente para Gestão de laboratórios educacionais.
          </p>
          <a href={SIGNUP} className="mt-4 inline-block text-sm text-primary hover:underline">
=======
            Plataforma inteligente para gestão de laboratórios educacionais.
          </p>
          <a href={SITE} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-primary hover:underline">
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
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
<<<<<<< HEAD
            <li className="flex items-center gap-2"><BarChart3 className="size-4 text-primary" /> relatórios em tempo real</li>
=======
            <li className="flex items-center gap-2"><BarChart3 className="size-4 text-primary" /> Relatórios em tempo real</li>
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)
            <li className="flex items-center gap-2"><Sparkles className="size-4 text-primary" /> Onboarding automático</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground text-center">
          © 2026 Plataforma Lab Intelligence. Todos os direitos reservados.
        </div>
      </div>
    </footer>
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
<<<<<<< HEAD
















=======
>>>>>>> parent of 1d6deb4 (fix: textos finais, integrações Google em construção e contato por e-mail)

