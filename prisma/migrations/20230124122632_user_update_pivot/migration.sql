-- CreateTable
CREATE TABLE "UpdateUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "updateId" TEXT NOT NULL,

    CONSTRAINT "UpdateUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UpdateUser" ADD CONSTRAINT "UpdateUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpdateUser" ADD CONSTRAINT "UpdateUser_updateId_fkey" FOREIGN KEY ("updateId") REFERENCES "Update"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
