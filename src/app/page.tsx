import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Rick and Morty
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explora el multiverso de Rick and Morty
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Una aplicación web interactiva que te permite explorar todos los
          personajes del universo de Rick and Morty. Descubre información
          detallada sobre tus personajes favoritos, su estado, especie y
          origen.
        </p>

        <Link href="/characters">
          <Button size="lg" className="text-lg px-8 py-6">
            Ver Personajes
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🌌 Explorar</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Navega por cientos de personajes del show con paginación
                intuitiva
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">📊 Información</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Consulta datos detallados de cada personaje: estado, especie y
                origen
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">⚡ Rápido</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Interfaz moderna construida con Next.js y React para una
                experiencia fluida
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        <p>
          Powered by{' '}
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            The Rick and Morty API
          </a>
        </p>
      </footer>
    </main>
  );
}