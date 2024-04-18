import { auth } from "@clerk/nextjs/server";
import { db } from "./";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized access to images");

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    where: (model, { eq }) => eq(model.userId, user.userId),
  });

  return images;
}
