The core content unit of the portfolio: one project, with its live subdomain, a one-line description, the database-choice rationale (WhyBlock + Badge), and stack Tags. Lifts 3px on hover.

```jsx
<ProjectCard
  title="Task API" url="https://tasks.thiagoheckler.com.br" urlLabel="tasks."
  description="API REST de tarefas, com Swagger UI pra testar ao vivo."
  db="pg" dbLabel="PostgreSQL"
  why="CRUD relacional clássico, o caso pra mostrar JPA limpo."
  tags={["Spring Boot 4", "JPA", "OpenAPI"]}
/>
```

For the poliglota (Pizzaria) card pass `featured` and `dbLabel={[{db:"pg",label:"PostgreSQL"},{db:"mongo",label:"MongoDB"}]}` with `db="both"`.
