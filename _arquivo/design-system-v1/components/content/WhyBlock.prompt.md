The "motive" anchor — a left-bordered, faintly washed block that explains *why* a given database was chosen. Hue follows `db`.

```jsx
<WhyBlock db="pg">
  <Badge db="pg">PostgreSQL</Badge>
  <p style={{ margin: "0.45rem 0 0", fontSize: "var(--fs-small)" }}>CRUD relacional clássico, o caso pra mostrar JPA limpo.</p>
</WhyBlock>
```

`db`: `pg` (blue), `mongo` (green), `both` (amber — poliglota).
