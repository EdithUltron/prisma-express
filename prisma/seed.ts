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

const categoryData = [
{category_name:"OC"},
{category_name:"BC-A"},
{category_name:"BC-B"},
{category_name:"BC-C"},
{category_name:"BC-D"},
{category_name:"BC-E"},
{category_name:"SC"},
{category_name:"ST"},
{category_name:"EWS"},
{category_name:"PH"},
{category_name:"NCC"},
{category_name:"CAP"},
{category_name:"SPORTS"},
]

const communityData = [
{communityName:"OC"},
{communityName:"BC"},
{communityName:"SC"},
{communityName:"ST"},
{communityName:"OTHERS"}
]

const examsData = [
{examName:"EAPCET"},
{examName:"PGCET"},
{examName:"ECET"},
{examName:"ICET"},
{examName:"GATE"},
{examName:"OTHER"},
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of branchData) {
    const branch = await prisma.branch.create({
      data:u,
    })
    console.log(`Created branch with id: ${branch.id}`)
  }
  for (const u of categoryData) {
    const category = await prisma.category.create({
      data:u,
    })
    console.log(`Created category with id: ${category.id}`)
  }
  for (const u of communityData) {
    const community = await prisma.community.create({
      data:u,
    })
    console.log(`Created category with id: ${community.id}`)
  }
  for (const u of examsData) {
    const exam = await prisma.admissionExams.create({
      data:u,
    })
    console.log(`Created category with id: ${exam.id}`)
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