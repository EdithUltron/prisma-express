-- CreateTable
CREATE TABLE "login_facultylogin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "register_id" INTEGER NOT NULL,

    CONSTRAINT "login_facultylogin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login_login" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "register_id" INTEGER NOT NULL,

    CONSTRAINT "login_login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "signup_adminregister" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "signup_adminregister_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "signup_facultyregister" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "department" TEXT NOT NULL,
    "aboutme" TEXT,
    "profile_pic" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "signup_facultyregister_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "signup_register" (
    "id" SERIAL NOT NULL,
    "roll" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "department" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "fullname" TEXT,
    "profile_pic" TEXT NOT NULL,
    "aboutme" TEXT,
    "year" TEXT NOT NULL,

    CONSTRAINT "signup_register_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sqlite_autoindex_login_facultylogin_1" ON "login_facultylogin"("email");

-- CreateIndex
CREATE INDEX "login_facultylogin_register_id_8ae70b52" ON "login_facultylogin"("register_id");

-- CreateIndex
CREATE UNIQUE INDEX "sqlite_autoindex_login_login_1" ON "login_login"("email");

-- CreateIndex
CREATE INDEX "login_login_register_id_866222c6" ON "login_login"("register_id");

-- CreateIndex
CREATE UNIQUE INDEX "sqlite_autoindex_signup_adminregister_1" ON "signup_adminregister"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sqlite_autoindex_signup_facultyregister_1" ON "signup_facultyregister"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sqlite_autoindex_signup_register_1" ON "signup_register"("email");

-- AddForeignKey
ALTER TABLE "login_facultylogin" ADD CONSTRAINT "login_facultylogin_register_id_fkey" FOREIGN KEY ("register_id") REFERENCES "signup_facultyregister"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "login_login" ADD CONSTRAINT "login_login_register_id_fkey" FOREIGN KEY ("register_id") REFERENCES "signup_register"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
