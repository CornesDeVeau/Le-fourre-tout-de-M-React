export default function Home() {
  return (
    <main className="border-8 rounded-2xl border-blue-500 bg-gray-200">
      <div className="m-5">
        <h1 className="text-4xl font-bold">
          <u>Bienvenue sur <i>Le fourre tout de M. React</i> !</u>
        </h1>
        <div className="ml-5 mt-5">
        <h2 className="text-2xl font-semibold">Le contenu du site.</h2>
        <p>Ce site est un regroupement de divers projets React que j&apos;ai pu accomplir, il tourne grâce à Next.js (que je suis aussi en train d&apos;apprendre...).</p>
        <p>Vous pouvez naviguer dans les différents projets via la barre de navigation située à votre gauche.</p>
        <p>Bonne exploration !</p>
      </div>
    </div>
  </main>
  );
}
