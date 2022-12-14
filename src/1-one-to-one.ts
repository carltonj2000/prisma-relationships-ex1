/*
 * one-to-one
 * A user with one profile
 */

import { faker } from "@faker-js/faker";
import { prisma } from "./db/client";
import clean from "./helpers/clean";

async function createUserWithProfile() {
  const user = await prisma.user.create({
    data: {
      Profile: {
        create: {
          name: faker.name.firstName(),
        },
      },
    },
  });
  const userO = await prisma.user.findUnique({
    where: { id: user.id },
    select: { id: true, Profile: { select: { name: true } } },
  });
  return userO;
}

async function createUserWithProfile2() {
  const user = await prisma.user.create({
    data: {},
  });
  await prisma.profile.create({
    data: {
      name: faker.name.firstName(),
      userId: user.id,
    },
  });
  const userO = await prisma.user.findUnique({
    where: { id: user.id },
    select: { id: true, Profile: { select: { name: true } } },
  });
  return userO;
}

async function main() {
  await clean();
  const u1 = await createUserWithProfile();
  const u2 = await createUserWithProfile2();
  console.log(u1);
  console.log(u2);
  const profiles = await prisma.user.findMany({
    select: {
      id: true,
      //Profile: true, // all profile data
      Profile: {
        select: {
          name: true,
        },
      },
    },
  });
  console.log(profiles);
}

main().catch((e) => console.log(e));
