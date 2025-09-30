'use client';
import Link from 'next/link';
import { ArrowLeft, MapPin, Activity, User, Calendar } from 'lucide-react';
import { Character } from '@/interfaces/character.interface';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { unstable_ViewTransition as ViewTransition } from 'react';

interface CharacterLayoutProps {
  character: Character;
}

export default function CharacterLayout({ character }: CharacterLayoutProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/50';
      case 'dead':
        return 'bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/50';
      default:
        return 'bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-500/50';
    }
  };

  return (
    <ViewTransition>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b">
            <Link href="/characters">
              <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver a personajes
              </Button>
            </Link>
          </div>

          <section className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {character.name}
            </h1>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <Card className="overflow-hidden sticky top-8">
                <CardContent className="p-0 mt-2.5 mb-2.5">
                  {character.image && (
                    <img
                      src={character.image}
                      alt={character.name}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información básica</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Badge className={getStatusColor(character.status)}>
                        {character.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className=" font-medium">Especie</p>
                      <p className="text-sm text-muted-foreground">
                        {character.species}
                      </p>
                    </div>
                  </div>

                  {character.gender && (
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Género</p>
                        <p className="text-sm text-muted-foreground">
                          {character.gender}
                        </p>
                      </div>
                    </div>
                  )}

                  {character.type && (
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Tipo</p>
                        <p className="font-medium">{character.type}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {character.origin && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Origen
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {character.origin.name}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )}

                {character.location && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Ubicación actual
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {character.location.name}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )}
              </div>

              {character.episode && character.episode.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Episodios
                    </CardTitle>
                    <CardDescription>
                      Aparece en {character.episode.length} episodio
                      {character.episode.length !== 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}
            </div>
          </section>
        </div>
      </div>
    </ViewTransition>
  );
}
