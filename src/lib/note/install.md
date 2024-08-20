# ◦ Tailwindcss
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
## tailwind.config.js
```
content: ['./src/**/*.{html,js,svelte,ts}'],
```
## src/app.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# ◦ Prisma
```
npm install --save @prisma/client
npm install --save-dev prisma
```
## Prisma init
```
npx prisma init --datasource-provider sqlite

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Post_test {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  title   String
  content String
  slug    String @unique
}
```

## Prisma table 생성
```
npx prisma migrate dev --name init

```
## Prisma studio
```
npx prisma studio
--> http://localhost:5555/
```