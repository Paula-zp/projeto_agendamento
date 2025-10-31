---
sidebar_position: 2
---

# Estrutura de Dados

Esse documento apresenta o modelo de dados simplificado da plataforma, destacando as principais entidades e seus relacionamentos.


:::warning Atenção

Esse documento está ainda em fase inicial de desenvolvimento e pode sofrer alterações significativas conforme o projeto avança.

:::

---

## 📊 Entidades Principais

### Tenants
Representa os estabelecimentos/prestadores de serviço (clientes do produto).

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único do tenant |
| `nome` | String | Nome do estabelecimento |
| `status` | Enum | active, inactive, suspended |
| `created_at` | Timestamp | Data de criação |
| `updated_at` | Timestamp | Data de última atualização |

---

### users
Usuários do sistema (donos e funcionários).

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único do usuário |
| `tenant_id` | UUID | Referência ao estabelecimento |
| `email` | String | Email para login |
| `password_hash` | String | Senha criptografada |
| `role` | Enum | OWNER, STAFF |
| `status` | Enum | active, inactive |
| `created_at` | Timestamp | Data de criação |
| `updated_at` | Timestamp | Data de última atualização |

---

### services
Serviços oferecidos pelo estabelecimento.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único do serviço |
| `tenant_id` | UUID | Referência ao estabelecimento |
| `nome` | String | Nome do serviço |
| `descricao` | Text | Descrição detalhada |
| `preco` | Decimal | Preço do serviço |
| `duracao_minutos` | Integer | Duração em minutos |
| `status` | Enum | active, inactive |
| `created_at` | Timestamp | Data de criação |
| `updated_at` | Timestamp | Data de última atualização |

---

### staff
Funcionários/prestadores de serviço.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único do funcionário |
| `tenant_id` | UUID | Referência ao estabelecimento |
| `nome` | String | Nome do funcionário |
| `telefone` | String | Telefone de contato |
| `status` | Enum | active, inactive |
| `created_at` | Timestamp | Data de criação |
| `updated_at` | Timestamp | Data de última atualização |

---

### work_shifts
Turnos de trabalho dos funcionários.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único do turno |
| `staff_id` | UUID | Referência ao funcionário |
| `dia_da_semana` | Integer | 0-6 (domingo a sábado) |
| `hora_inicio` | Time | Hora de início do turno |
| `hora_fim` | Time | Hora de fim do turno |
| `created_at` | Timestamp | Data de criação |
| `updated_at` | Timestamp | Data de última atualização |

---

### time_off
Folgas e bloqueios de agenda.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único |
| `staff_id` | UUID | Referência ao funcionário |
| `inicio` | Timestamp | Data/hora de início da folga |
| `fim` | Timestamp | Data/hora de fim da folga |
| `motivo` | String | Descrição da folga |
| `created_at` | Timestamp | Data de criação |

---

### bookings
Agendamentos realizados.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único do agendamento |
| `tenant_id` | UUID | Referência ao estabelecimento |
| `service_id` | UUID | Referência ao serviço |
| `staff_id` | UUID | Referência ao funcionário |
| `cliente_nome` | String | Nome do cliente |
| `cliente_telefone` | String | Telefone do cliente (WhatsApp) |
| `data_hora_inicio` | Timestamp | Data/hora de início |
| `data_hora_fim` | Timestamp | Data/hora de fim |
| `state` | Enum | pending, confirmed, completed, cancelled, rejected |
| `confirmation_status` | Enum | not_confirmed, explicitly_confirmed |
| `observacoes` | Text | Notas adicionais |
| `created_at` | Timestamp | Data de criação |
| `updated_at` | Timestamp | Data de última atualização |

---

### staff_services
Relacionamento entre funcionários e serviços que podem realizar.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `staff_id` | UUID | Referência ao funcionário |
| `service_id` | UUID | Referência ao serviço |
| `created_at` | Timestamp | Data de criação |

**Chave primária composta:** (staff_id, service_id)

---

### notifications
Histórico de notificações enviadas.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único da notificação |
| `booking_id` | UUID | Referência ao agendamento |
| `canal` | Enum | whatsapp, sms, email |
| `template` | String | Template utilizado |
| `destinatario` | String | Telefone/email do destinatário |
| `status` | Enum | sent, delivered, failed, read |
| `enviado_em` | Timestamp | Data/hora de envio |
| `created_at` | Timestamp | Data de criação |

---

### audit_log
Registro de auditoria de ações críticas.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | UUID | Identificador único do log |
| `tenant_id` | UUID | Referência ao estabelecimento |
| `actor_id` | UUID | Quem executou a ação |
| `acao` | String | Tipo de ação (create, update, delete) |
| `entidade` | String | Nome da entidade afetada |
| `entidade_id` | UUID | ID da entidade afetada |
| `dados_anteriores` | JSONB | Estado anterior (para updates) |
| `dados_novos` | JSONB | Novo estado |
| `timestamp` | Timestamp | Momento da ação |