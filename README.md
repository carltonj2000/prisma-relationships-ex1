# Prisma Relationships Example 1

The examples are for 1-1, 1-m, m-m (explicit and implicit) relationships.

## Creation History

Some steps below are from:
[Prisma Quick](https://www.prisma.io/docs/getting-started/quickstart)
webpage.

```bash
mkdir prisma-relationships-ex1
cd prisma-relationships-ex1/
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
```

## Code History

The code in this repository is based on the
[Learn Prisma Relationships](https://youtu.be/phixQBZNZwU)
video.
