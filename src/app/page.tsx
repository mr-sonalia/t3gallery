import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {[...images].map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Image
            width={200}
            height={200}
            src={image.url}
            alt={image.name}
            className="h-48 w-full object-cover"
          />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign In to see images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
