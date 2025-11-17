# LangChain & LangGraph Agentic Ebook

Hands‑on study guide for **LangChain** and **LangGraph**, taking you from basic LLM calls to production‑style RAG, multi‑agent systems, and advanced agentic AI workflows. The content is organized as an HTML ebook with phases and modules, plus runnable Python snippets you can drop into your own projects.

Repo: `https://github.com/rahulkolekardev/langchain-langgraph-agentic-ebook`

---

## What’s Inside

- **HTML ebook**
  - `index.html` – entry point with navigation and usage notes.
  - `phase0.html` – prerequisites and setup.
  - `phase1.html` – LangChain core and LCEL.
  - `phase2.html` – LangGraph fundamentals.
  - `phase3.html` – real applications, deployment, evaluation.
  - `phase4.html` – advanced agentic systems and multi‑agent patterns.
- **UI features**
  - Clean, responsive layout with sidebar navigation.
  - Dark mode toggle (with preference persisted in `localStorage`).
  - Simple in‑page heading search for each chapter.
  - Code blocks with lightweight syntax highlighting.
- **Code examples**
  - Python snippets for:
    - Calling chat models with LangChain.
    - LCEL chains and RAG pipelines.
    - Tools, agents, and structured outputs.
    - LangGraph state graphs and agent graphs.
    - Multi‑agent flows, memory layers, and safety policies.

You can treat this repo as both a **book** and a **playground** for building your own LangChain/LangGraph projects.

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/rahulkolekardev/langchain-langgraph-agentic-ebook.git
cd langchain-langgraph-agentic-ebook
```

### 2. View the ebook

Open `index.html` in a browser:

- Double‑click the file, or
- Serve via a simple HTTP server:

```bash
python -m http.server 8000
# then visit http://localhost:8000/index.html
```

Use the sidebar to navigate phases and modules. Each chapter contains explanations plus inline code snippets.

### 3. (Optional) Set up Python to run examples

Create and activate a virtual environment, then install core dependencies:

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\Activate.ps1

pip install \
  langchain langchain-core langchain-community \
  langchain-openai langgraph python-dotenv \
  faiss-cpu chromadb
```

Configure an LLM provider (e.g. OpenAI):

```bash
echo "OPENAI_API_KEY=sk-..." > .env
```

Then copy snippets from the ebook into a `src/` directory (for example `src/phase1/simple_rag_cli.py`) and run them with `python`.

---

## Ebook Table of Contents

Each phase builds on the last. You can read linearly or jump to the parts you need.

### Phase 0 – Prerequisites & Setup (`phase0.html`)

**Goals**

- Be comfortable with Python development.
- Have your environment ready to run LangChain and LangGraph apps.
- Be able to call at least one model API.

**Highlights**

- Core Python skills (functions, classes, typing, asyncio, debugging).
- Virtual environments, project structure, and dependency management.
- LLM basics: prompts, tokens, temperature, chat vs completion.
- Environment setup with LangChain, LangGraph, and vector stores.
- Mini task: first LangChain chat script + CLI.

---

### Phase 1 – LangChain Core & LCEL (`phase1.html`)

**Goals**

- Understand LangChain architecture and Runnables.
- Learn LCEL (LangChain Expression Language) for composing chains.
- Build basic RAG, tools, agents, memory, and structured outputs.

**Modules**

1. **LangChain core concepts & LCEL**
   - Runnables, `|` pipe operator, `.invoke/.batch/.stream`.
   - `ChatPromptTemplate`, `StrOutputParser`, configuration & fallbacks.
2. **Working with data & simple RAG**
   - Document loaders, splitters, embeddings, vector stores (FAISS/Chroma).
   - LCEL RAG pipeline and a CLI RAG app over your notes.
3. **Tools, agents, memory & structured output**
   - Tools via `@tool`, tool‑calling agents, and calculator/search tools.
   - Conversation memory and when to use it.
   - Pydantic / JSON schemas and `with_structured_output`.
   - Console chatbot that uses tools, memory, and structured responses.

---

### Phase 2 – LangGraph Fundamentals (`phase2.html`)

**Goals**

- Understand LangGraph’s model: state, nodes, edges, compilation.
- Wrap LangChain pipelines (e.g. RAG) in LangGraph workflows.
- Add branching, loops, agent nodes, human‑in‑loop, and persistence concepts.

**Modules**

4. **LangGraph basics: nodes, edges, state**
   - `StateGraph`, typed state, node functions, and `.invoke/.stream`.
   - Simple RAG workflow graph: validate → rewrite → retrieve → answer.
5. **Control flow, agents, human‑in‑loop & persistence**
   - Conditional edges, router nodes, retries and loops.
   - Agent nodes that wrap LangChain agents inside a graph.
   - Human approval patterns and checkpointing concepts.

---

### Phase 3 – Applications, Deployment & Evaluation (`phase3.html`)

**Goals**

- Combine LangChain + LangGraph into production‑style RAG assistants.
- Build multi‑agent systems and expose them via APIs.
- Learn configuration, testing, deployment, monitoring, and basic security.

**Modules**

6. **Production‑style RAG assistant**
   - Ingestion pipeline (load/split/embed/index).
   - LangGraph‑orchestrated RAG graph with logging and errors.
   - FastAPI backend, evaluation script, and streaming endpoints.
7. **Multi‑agent systems with LangGraph**
   - Planner, researcher, writer, reviewer, and moderation agents.
   - Multi‑agent graphs and shared state patterns.
8. **Hardening & deployment**
   - Central configuration and environment management.
   - Unit/golden/regression testing approaches.
   - Deployment patterns (API service, workers, containers).
   - Monitoring, observability, and basic security/guardrails.

---

### Phase 4 – Advanced Agentic Systems (`phase4.html`)

**Goals**

- Go beyond simple agents into richer agentic AI systems.
- Explore advanced reasoning, planning, multimodal tools, memory, safety,
  and multi‑agent coordination at scale.

**Modules**

10. **Advanced agent reasoning patterns**
    - ReAct‑style agents (Thought/Action/Observation loops).
    - Reflexion/self‑critique and answer revision.
    - Multi‑branch / Tree‑of‑Thought‑style reasoning.
11. **Planning & hierarchical agents**
    - Plan‑and‑Execute (planner + executor).
    - Hierarchical controllers and dynamic replanning.
    - Planner/executor wrapped in LangGraph.
12. **Advanced tools, multimodal & code agents**
    - Dynamic toolsets and tool pipelines.
    - Multimodal tools (image/document analysis sketches).
    - Safe Python “code interpreter” and database‑style tools.
13. **Memory, safety, governance & evaluation**
    - Vector‑store‑backed long‑term memory.
    - Tool policy layer and audit logging.
    - Agent evaluation and benchmarking ideas.
14. **Multi‑agent coordination & scalable deployment**
    - Debate/critique agents and multi‑agent graphs.
    - Concurrency and shared state considerations.
    - Scaling many agent sessions in production.

---

## How to Use This Repo

- **As a learner** – read chapters in order, copy code into your own project, and adapt examples to your use cases.
- **As a reference** – jump directly to phases/modules relevant to your current work (e.g. Phase 2 for LangGraph, Phase 4 for advanced agentic patterns).
- **As a starter kit** – reuse the RAG, agent, and LangGraph patterns as a baseline for your own applications.

If you’d like, you can extend the ebook with your own Phase 5 (e.g. domain‑specific agents, research‑grade evaluation, or building a custom framework layer on top of LangChain/LangGraph). The structure is meant to be easy to modify and grow. 

**Goals**

- Be comfortable with Python development.
- Have your environment ready to run LangChain and LangGraph apps.
- Be able to call at least one model API.

**Topics**

1. **Core Python skills**

   - Functions, classes, typing
   - Virtual environments, `pip`, project structure
   - Basic asyncio: `async def`, `await`, tasks
   - Basic debugging: `print`, `logging`, using an IDE debugger

2. **LLM basics**

   - Prompt, context window, temperature, tokens
   - Difference between chat models vs text completion models
   - At least one provider: OpenAI, Anthropic, or local (Ollama)
   - Basic concepts of rate limits, latency and cost

3. **Environment setup**

   - Create a new project folder
   - Set up a virtual env
   - Install:

     ```bash
     pip install \
       langchain langchain-core langchain-community \
       langchain-openai langgraph python-dotenv \
       faiss-cpu chromadb
     ```

   - Store keys in `.env` and load them with `python-dotenv`
   - Configure at least one model provider (e.g. `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, or local Ollama)

4. **Read once, lightly**

   - LangChain overview in the docs to see what components exist.
   - LangGraph overview to understand that it is a low level orchestration framework for long running, stateful agents.
   - Skim LangSmith / tracing docs to know they exist for later.

**Mini task**

- Write a tiny script that calls a chat model and prints the response.
- Wrap it in a CLI script that reads a question from `input()`.

---

## Phase 1. LangChain Core and LCEL

### Module 1. LangChain core concepts and Expression Language (LCEL)

**Goals**

- Understand LangChain architecture.
- Learn the core interfaces and the idea of Runnables or LCEL.

**Topics**

1. **What LangChain gives you**

   - Models abstraction
   - Prompts
   - Output parsers
   - Document loaders and retrievers
   - Tools and agents

2. **LCEL (LangChain Expression Language)**

   - What Runnables are and why they matter.
   - Using the `|` pipe operator to connect components:
     `chain = prompt | model | parser`
   - Basic methods: `.invoke`, `.batch`, `.stream`, `.astream`
   - Common building blocks:
     - `RunnableLambda`, `RunnableParallel`, `RunnableBranch`, `RunnablePassthrough`
   - Configuration helpers:
     - `.with_config` (tags, run name, metadata)
     - `.with_retry`, `.with_fallbacks`, basic error handling

3. **Basic prompt chaining**

   - `ChatPromptTemplate`
   - System vs user messages
   - Simple chain: user input → prompt → model → string output
   - Using `StrOutputParser` and basic JSON/struct parsing

**Practice**

- Create a simple LCEL chain:
  - Input: topic string
  - Output: short explanation and a list of 3 bullet points
- Try the same chain with `.stream` to see tokens streaming.
- Add `.batch` to run the chain on a list of topics.

---

### Module 2. Working with data: loaders, splitters, vector stores and simple RAG

**Goals**

- Learn how LangChain handles documents and retrieval.
- Build your first small RAG style question answering system.

**Topics**

1. **Document handling**

   - Document loaders: PDFs, web pages, text files
   - `RecursiveCharacterTextSplitter` and other splitters
   - Chunk size / overlap tradeoffs and metadata (source, page)

2. **Vector stores and retrievers**

   - Concept of embedding models and vector search.
   - Using common vector stores: FAISS or Chroma.
   - Creating a retriever object.
   - Metadata filters (e.g. by tag, date) and search parameters (k, score threshold).

3. **RAG with LCEL**

   - Typical pipeline:
     - Load and split docs
     - Embed and store
     - On user query: retrieve top k chunks
     - Feed retrieved context plus query into a prompt and model

4. **LCEL composition for RAG**

   - Use LCEL to compose retriever and model:
     - `retriever | prompt | model | parser`
   - Use `RunnableParallel` to fetch docs and do light pre‑processing in parallel.

5. **Beyond the basics (optional preview)**

   - Rerankers and hybrid search (BM25 + dense).
   - Specialized retrievers (parent‑document, multi‑vector) and when they help.

**Practice**

- Index a small set of markdown or PDF notes.
- Build a CLI app:
  - User types a question.
  - System performs RAG over your notes and answers.

---

### Module 3. Tools, agents, memory and structured output

**Goals**

- Learn to create tools using functions.
- Build a simple agent that chooses tools.
- Generate structured output from LLMs.

**Topics**

1. **Tools**

   - What a tool is in LangChain.
   - Creating tools from Python functions (e.g. `@tool` decorator).
   - Tool input and output schemas.
   - Model‑native tool calling / function calling (e.g. OpenAI tool calling) vs LangChain tools.

2. **Agents**

   - Agent vs workflow.
   - High level idea: model chooses which tool to call and in what order.
   - Build simple tools using:
     - A search function
     - A calculator function
   - Plug tools into an agent from LangChain (tool‑calling agents, ReAct‑style agents).

3. **Memory**

   - `ConversationBufferMemory` and other memory types.
   - Windowed, summary, and vector store backed memory.
   - When to rely on memory vs when to rely on documents.

4. **Structured outputs**

   - Using pydantic or JSON schemas to constrain model responses.
   - Parsing the reply to Python objects.
   - Using helpers like `with_structured_output` (where supported).

**Practice**

- Build a console chatbot that:
  - Remembers the last few turns of conversation.
  - Can call a calculator tool when user asks math questions.
  - Returns answers as a structured Python object that you pretty print.

---

## Phase 2. LangGraph Fundamentals

Now that you know how to build chains and agents in LangChain, you move to LangGraph, which focuses on orchestration and control of multi‑step, stateful workflows.

### Module 4. LangGraph basics: nodes, edges, and state

**Goals**

- Understand LangGraph core concepts.
- Build your first workflow graph.

**Topics**

1. **Why LangGraph**

   - Limitations of simple chains or single agents.
   - Need for complex control flows, long running agents, and robust state management.

2. **Graph model**

   - Nodes: Python functions that take and return a state.
   - Edges: transitions between nodes.
   - Message passing and super steps idea inspired by Pregel.
   - Core API: `StateGraph`, `add_node`, `add_edge`, `set_entry_point`, `set_finish_point`, `compile`.

3. **State**

   - State as a typed dictionary or custom class (`TypedDict`, `pydantic`).
   - How state is updated across nodes.
   - Merging state when multiple paths converge.

4. **Defining a simple workflow**

   - A graph with nodes:
     - `start` node: validates user input
     - `rewrite_query` node: improves or reformulates the query with an LLM
     - `retrieve` node: uses LangChain retriever
     - `answer` node: uses an LLM to generate final answer
   - Integrating LangChain components inside LangGraph nodes.
   - Running the compiled graph with `.invoke` and `.stream`.

**Practice**

- Implement the above workflow as a LangGraph graph.
- Use a simple RAG pipeline you already built in Phase 1 and wrap it in a graph.
- Run it end to end and inspect the state transitions.

---

### Module 5. Control flow, branching, human in the loop and persistence

**Goals**

- Use LangGraph for more complex flows with branches, loops and checkpoints.
- Introduce human feedback and corrections into your agent.

**Topics**

1. **Advanced graph API**

   - Conditional edges: branch based on state fields.
   - Loops and retries.
   - Handling errors and fallbacks.
   - Parallel branches where appropriate.

2. **Agents with LangGraph**

   - Difference between a simple workflow graph and an agent graph.
   - Agent node that decides next action and tool node that performs the action.
   - Multi‑step tool use with intermediate state.

3. **Human in the loop**

   - Pausing a graph for human approval.
   - Using checkpoints to resume later.
   - Example scenario: approval before sending an email or performing an irreversible action.

4. **Persistence**

   - Storing agent state in a database.
   - Checkpointing and reloading.
   - Concept of long running sessions.
   - Using built‑in checkpointers (e.g. in‑memory vs file/db backed).

**Practice**

- Extend your RAG workflow to:
  - Ask user for clarification if the query is ambiguous.
  - Only proceed to final answer after a human approval step on the retrieved context or drafted answer.
- Experiment with different branches, for example:
  - If retrieval confidence is low, branch to a re‑search node.

---

## Phase 3. Integrating LangChain and LangGraph in Real Applications

### Module 6. Building a production style RAG assistant with LangGraph orchestration

**Goals**

- Combine everything to build a robust RAG assistant.
- Learn to instrument and observe your system.

**Topics**

1. **Architecture**

   - LangChain components for:
     - loading and chunking documents
     - embeddings and vector store
     - retrieval chain with context injection
   - LangGraph as orchestrator for:
     - query refinement
     - retrieval
     - answer generation
     - error handling and logging

2. **Streaming and async**

   - Use LangChain streaming with LangGraph nodes.
   - Consider when to use async nodes for parallel tasks.
   - Expose streaming to clients (Server‑Sent Events or websockets).

3. **Evaluation basics**

   - Create a small suite of test queries.
   - Use simple metrics:
     - answer correctness by manual labeling
     - latency and cost
   - Optionally explore LangSmith for traces and evaluation if you want observability support.

4. **Observability and tracing**

   - Enable tracing for chains and graphs (e.g. LangSmith).
   - Inspect spans, prompts, and model calls.
   - Use traces to debug incorrect behavior and performance issues.

**Capstone task 1**

- Build a fully working RAG chatbot:
  - Backend: FastAPI or any web framework
  - Core logic: LangGraph graph that calls LangChain components
  - Features:
    - streaming responses to client
    - logging of interactions
    - simple evaluation script over test questions

---

### Module 7. Multi agent systems with LangGraph

**Goals**

- Learn multi agent design patterns.
- Implement a small multi agent system.

**Topics**

1. **Patterns for agents and workflows**

   - Sequential workflows vs agentic flows.
   - Single agent vs multi agent vs hierarchical controller.
   - Examples:
     - Planner and worker agents
     - Specialist agents for different tools or domains

2. **Multi agent graphs**

   - Each agent as a node or group of nodes.
   - Shared state that agents read and write.
   - Conflict resolution or arbitration.
   - Termination conditions and guardrails to prevent infinite loops.

3. **Moderation and safety hooks**

   - A moderation node that inspects messages and can block or rewrite them.
   - Logging and alerts for suspicious outputs.
   - Basic prompt‑injection and data exfiltration defenses.

**Capstone task 2**

- Build a multi agent system, for example:
  - Planner agent breaks down a user goal.
  - Research agent gathers information via search tools.
  - Writer agent synthesizes a report.
  - Reviewer agent checks style and hallucinations using a separate model or tool.

---

### Module 8. Hardening and deploying LangChain plus LangGraph apps

**Goals**

- Prepare your system for production.
- Learn configuration, testing and deployment options.

**Topics**

1. **Configuration and environment**

   - Central config for models, temperature, tools.
   - Using environment variables and config files.
   - Per‑environment configuration (dev/stage/prod).

2. **Testing**

   - Unit tests for individual nodes and chains.
   - Golden test cases for end to end workflows.
   - Regression tests when you change prompts or models.

3. **Deployment options**

   - Deploy as:
     - API service with FastAPI
     - Background worker for long running agents
   - Consider use of managed platforms or serverless functions where suitable.
   - Containerization with Docker and basic CI/CD ideas.

4. **Monitoring and iteration**

   - Log inputs, outputs and errors.
   - Collect user feedback or ratings.
   - Regularly refine prompts, tools and graph structure.
   - Track cost, latency and reliability over time.

5. **Security and reliability**

   - Secure storage of API keys and secrets.
   - Rate limiting and backoff strategies.
   - Guardrails for tools that can perform side‑effects (e.g. email, file system).

**Final capstone**

- Pick a realistic use case such as:
  - customer support assistant
  - internal knowledge base assistant
  - research copilot for a specific domain
- Implement:
  - LangChain components (prompts, tools, retrievers)
  - LangGraph orchestration (workflow or multi agent)
  - Simple web or chat UI
  - Basic logging and evaluation loops

---

### Module 9. Advanced topics and next steps (optional)

**Goals**

- Get pointers for deeper specialization after the core syllabus.

**Topics (pick as needed)**

- Advanced retrieval:
  - hybrid search, re‑ranking, query rewriting
  - domain‑specific indexing strategies
- Domain‑specific agents:
  - code‑editing / code‑understanding agents
  - data‑analysis agents (tools over Python, SQL, pandas)
- Performance and cost tuning:
  - model selection and quantization
  - caching and pre‑computation
- Reading framework source code:
  - skim parts of LangChain and LangGraph internals to deepen understanding
- Staying up to date:
  - follow release notes and example repos
  - periodically revisit prompts, tools and graphs as models evolve

---

## Phase 4. Advanced Agentic Systems (LangChain & LangGraph)

This phase focuses on advanced patterns for building robust, powerful agentic systems on top of LangChain and LangGraph.

### Module 10. Advanced Agent Reasoning Patterns

**Goals**

- Move beyond simple tool-calling to richer reasoning strategies.
- Understand how to structure “think / act / observe” style loops.

**Topics**

- ReAct-style agents:
  - explicit reasoning traces and action selection
  - integrating ReAct with LangChain tools and LangGraph nodes
- Reflexion and self-critique:
  - agents that critique and revise their own outputs
  - feedback loops for answer refinement
- Tree-of-Thought and multi-branch reasoning:
  - generating multiple candidate solutions
  - scoring/pruning branches and selecting the best answer

**Practice**

- Implement a ReAct-style agent that uses tools with explicit intermediate reasoning.
- Add a self-critique step where the agent evaluates and optionally revises its own answer.

---

### Module 11. Planning and Hierarchical Agents

**Goals**

- Design agents that plan before acting.
- Use hierarchical decomposition for complex tasks.

**Topics**

- Plan-and-Execute pattern:
  - planner agent that produces a list of sub-tasks
  - executor that carries out each sub-task with tools and RAG
- Hierarchical controllers:
  - high-level controller managing multiple specialized sub-agents
  - nested goals and sub-goals
- Dynamic replanning:
  - updating plans when tools fail or new information appears
  - tracking progress and adjusting the plan in state

**Practice**

- Build a planner+executor system using LangChain agents or LCEL chains.
- Wrap planner and executor as nodes inside a LangGraph and support dynamic replanning.

---

### Module 12. Advanced Tool Orchestration, Multimodal and Code Execution Agents

**Goals**

- Work with richer toolsets (including multimodal and code/DB tools).
- Learn to manage tool pipelines and constraints.

**Topics**

- Advanced tool orchestration:
  - dynamic toolsets (enable/disable tools at runtime)
  - tool pipelines (search → scrape → summarize, etc.)
  - cost- and latency-aware tool selection
- Multimodal agents:
  - integrating image and document understanding tools
  - basic voice loop: speech-to-text → agent → text-to-speech
- Code and execution agents:
  - Python REPL / code-interpreter tools with sandboxing
  - SQL/database agents that plan and execute queries
  - browser/automation tools (e.g. Playwright) as LangChain tools

**Practice**

- Implement an agent that can choose between text-only RAG and an “analyze image” tool.
- Build a simple code-interpreter style tool that evaluates small snippets with safety limits.

---

### Module 13. Memory, Safety, Governance and Evaluation for Agents

**Goals**

- Give agents long-term memory and better safety guarantees.
- Learn how to evaluate and govern agent behavior.

**Topics**

- Advanced memory:
  - long-term episodic and semantic memory stores
  - retrieval-based memory for agents (memory as a retriever)
  - multi-agent shared memory spaces and isolation strategies
- Safety and governance:
  - prompt-injection defenses and input validation
  - policy/rule engines for tool use (allow/deny, scopes, limits)
  - detailed audit trails for all tool calls and decisions
- Agent evaluation and benchmarking:
  - task-based benchmarks and custom datasets
  - automatic evaluation pipelines and metrics
  - adversarial and stress testing of agents

**Practice**

- Add a long-term, vector-store-backed memory layer to an existing agent.
- Implement a simple policy layer around tool calls and log every decision for later review.

---

### Module 14. Multi-Agent Coordination and Scalable Deployment

**Goals**

- Design multi-agent systems that coordinate beyond simple pipelines.
- Prepare multi-agent setups for real-world, multi-tenant deployment.

**Topics**

- Multi-agent coordination patterns:
  - debate/critique agents that argue and then reconcile answers
  - swarm or market-like architectures with voting
  - role-switching agents based on performance or state
- Advanced LangGraph patterns:
  - agent nodes that route into subgraphs dynamically
  - coordinating multiple agents over shared state with concurrency control
  - using checkpointers for long-lived, multi-agent sessions
- Deployment and scaling:
  - running many concurrent agent sessions (queues, backpressure, horizontal scaling)
  - per-user personalization and memory while ensuring tenant isolation
  - monitoring and cost controls for large agentic systems

**Practice**

- Build a small debate-style system where two agents produce answers and a third decides.
- Extend your multi-agent graph to run multiple concurrent sessions and track per-user state.
