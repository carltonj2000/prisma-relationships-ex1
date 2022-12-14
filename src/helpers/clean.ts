import { prisma } from "../db/client";
export default async function clean() {
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();
}
