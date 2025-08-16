interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>Jo-APP</p>
      <p>Hello World</p>
      <p>APP</p>
      <p>Hi Im a student</p>
    </>
  );
}
