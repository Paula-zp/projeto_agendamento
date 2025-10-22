---
sidebar_position: 1
---

# Visão Geral da Arquitetura

A arquitetura segue princípios de **Clean Architecture**, **Domain-Driven Design (DDD)** e **Resiliência Operacional**.

---

## 🏗️ Camadas

Camada é a denominação para agrupar componentes com responsabilidades similares dentro do código. A arquitetura é dividida em três macro camadas principais:

### 1. Frontend

#### WebApp
- Interface para o dono e equipe
- Gerenciamento de serviços, turnos, agenda e métricas
- Interface responsiva e intuitiva

#### WhatsApp
- Interface do cliente via bot conversacional
- Integração nativa com WhatsApp Business API
- Experiência conversacional otimizada

---

### 2. Backend

#### BFF / API Gateway
- Autenticação e autorização
- Validação de requisições
- Orquestração de serviços
- Rate limiting e segurança

#### Serviços de Domínio
    - Auth & RBAC  
    - Catálogo  
    - Equipe & Turnos  
    - Agenda & Booking  
    - Notificações  
    - Analytics & Dashboard  

---

### 3. Infraestrutura

#### PostgreSQL
- Banco principal relacional
- Dados transacionais
- Histórico e auditoria

#### Redis
- Cache de dados frequentes
- Sessões de bot
- Locks de agendamento
- Filas temporárias

#### Fila/EventBus
- Mensageria assíncrona
- Desacoplamento de serviços
- Opções: SQS / RabbitMQ / PubSub

#### WhatsApp Provider
- Integração com WhatsApp Business API
- Opções: Meta / Twilio / Gupshup

#### Observabilidade
- Logs estruturados
- Métricas de negócio e técnicas
- Tracing distribuído
- Auditoria completa

---


## 🎯 Responsabilidades dos Serviços

| Serviço | Responsabilidade |
|---------|------------------|
| **BFF / API Gateway** | Centraliza autenticação, RBAC, rate limit, validações e orquestra domínios. |
| **Auth & RBAC** | Gestão de login, permissões e papéis (OWNER e STAFF) |
| **Catálogo** | Gerencia serviços e seus atributos |
| **Equipe & Turnos** | Armazena informações sobre a disponibilidade dos funcionários |
| **Agenda & Booking** | Lida com criação, confirmação e cancelamento de agendamentos |
| **Notificações** | Envia mensagens via WhatsApp (confirmações, lembretes, alertas) |
| **Analytics / Dashboard** | Agrega dados de uso e ocupação |
| **Bot Orchestrator** | Coordena a conversa com o cliente, salvando o estado e interagindo com o BFF |
| **Webhook Ingest** | Ponto de entrada seguro para mensagens do WhatsApp |


---

## 🛡️ Princípios Arquiteturais

### Detectar
- Validação de schema
- Assinatura HMAC em webhooks
- Rate limit por tenant
- Deduplicação

### Resistir
- Redis para locks e cache
- Filas assíncronas para eventos
- Retries automáticos
- Circuit breakers

### Monitorar
- Logs estruturados
- Tracing distribuído (OpenTelemetry)
- Métricas técnicas e de negócio
- Alertas proativos