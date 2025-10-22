---
sidebar_position: 3
---

# Entregáveis

Este documento descreve os dois principais entregáveis da plataforma: **Plataforma Web** (para gestão interna) e **WhatsApp Bot** (para interação com clientes).

---

## 💻 Plataforma Web

A Plataforma Web é o ambiente administrativo, voltado para donos e funcionários.

### Funcionalidades Principais

#### 1. Catálogo de Serviços
- Cadastro de serviços com nome, descrição, preço e duração
- Associação de funcionários aptos a realizar cada serviço
- Gestão de status (ativo/inativo)

#### 2. Lista de Funcionários
- Exibição dos profissionais cadastrados e seus horários de trabalho
- Visualização dos serviços atribuídos a cada um
- Gestão de turnos e disponibilidade

#### 3. Níveis de Acesso
Os níveis de acesso definem as permissões dentro da plataforma, nesse caso são dois:
- **Dono/Administrador:** pode editar, excluir e cadastrar serviços, agendamentos e equipe
- **Funcionário:** pode apenas visualizar agenda e atualizar status de atendimentos

#### 4. Calendário / Agenda
- Visualização completa dos agendamentos
- Filtros por data, funcionário e serviço
- Exibição de disponibilidade e bloqueios de horário

#### 5. Lista de Atendimentos
- Exibe atendimentos passados e futuros
- Permite atualizar status (confirmado, concluído, cancelado)
- Histórico completo de interações

#### 6. Dashboard
- Painel de visão geral com indicadores de agendamentos, ocupação e cancelamentos
- Foco em operação, não em finanças
- KPIs em tempo real

#### 7. Redirecionamento WhatsApp
- Acesso rápido ao chat do cliente via link direto para a conversa no WhatsApp
- Integrado ao detalhe do agendamento
- Facilita comunicação direta quando necessário

#### 8. Detalhe dos Agendamentos
- Exibe informações completas do cliente, serviço, horário e observações
- Permite ações contextuais (reagendar, confirmar, cancelar)
- Histórico de alterações e comunicações

---

## 📱 WhatsApp Bot

O Bot do WhatsApp é o principal canal de interação do cliente final.

### Características Principais

#### 1. Bot de Linguagem Única
- Comunicação simplificada, tom profissional e consistente
- Fluxos baseados em menus e respostas rápidas (dropdowns nativos do WhatsApp)
- Experiência conversacional natural

#### 2. Serviços Disponíveis
- Apresenta lista atualizada de serviços disponíveis para agendamento
- Informações básicas: nome, duração e preço
- Descrições detalhadas sob demanda

#### 3. Horários Disponíveis
- Exibe datas e horários com vagas abertas
- Baseado nas regras de agenda e turnos
- Atualização em tempo real

#### 4. Funcionários
- Se o estabelecimento permitir, o cliente pode escolher o profissional
- Se não, a plataforma seleciona automaticamente um funcionário disponível
- Transparência sobre quem realizará o atendimento

#### 5. Notificações Automatizadas
- Confirmações de agendamento imediatas
- Avisos de lembrete (ex: 24h antes)
- Notificações de aceitação ou cancelamento pelo prestador
- Status updates em tempo real

---

## Integração entre os Módulos
A integração entre os módulos do sistema é fundamental para o funcionamento coeso da plataforma. possível destacar os principais pontos de integração:

- O **Bot** e a **Plataforma Web** compartilham a mesma base de dados e lógica de agendamento
- O **Bot** é o canal de entrada para o cliente
- A **Plataforma Web** é o painel de gestão interna
- Toda ação do cliente no WhatsApp é refletida na agenda e dashboards da plataforma

Esses componentes são os responsáveis por formar o núcleo do MVP:

**Catálogo** → **Funcionário** → **Agenda** → **Agendamento** → **Notificação**

Este ciclo fechado garante uma operação completa e integrada, desde a configuração até a confirmação do atendimento.

```
Cliente (WhatsApp) → Bot → Backend → Database
                                        ↓
                              Plataforma Web ← Dono/Funcionário
```

---

## Resumo dos Entregáveis

| Módulo | Usuário | Funcionalidades Chave |
|--------|---------|----------------------|
| **Plataforma Web** | Dono + Funcionário | Gestão de serviços, agenda, equipe e dashboard |
| **WhatsApp Bot** | Cliente Final | Agendamento, consulta de serviços e notificações |
