const mockUrls = [
  "https://utfs.io/f/92e928b8-dd39-4ac4-af4f-913aef230485-3flas7.jpg",
  "https://utfs.io/f/7af7af71-e65e-43fc-aeb3-c36e4d964ede-w2psx9.jpg",
  "https://utfs.io/f/43b855e4-d059-4867-b629-338ee3bb21cc-167z63.jpg",
  "https://utfs.io/f/4a81abef-e8c5-4380-aa32-6d8cac48ff09-qsaiy1.jpg",
];

const mockImages = mockUrls.map((url, index) => {
  return {
    id: index + 1,
    url,
  };
});

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-96">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
