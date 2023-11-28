import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const branchData = [
{ name: "CSE"},
{name:"ECE"},
{name:"IT"},
{name:"EEE"},
{name:"MECH"},
{name:"MET"},
{name:"CIVIL"},
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of branchData) {
    const user = await prisma.branch.create({
      data:u,
    })
    console.log(`Created branch with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })