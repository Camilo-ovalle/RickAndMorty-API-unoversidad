'use client';
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';

import { Character } from '../../interfaces/character.interface';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../components/ui/pagination';

function Page() {
  const [data, setData] = useState<Character[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}`,
      );
      setData(res.data.results);
      setTotalPages(res.data.info.pages);
      console.log(res.data.info.next);
    };
    fetchData();
  }, [currentPage]);

  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  const prevPageHandler = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage);
  };

  return (
    <>
      <ViewTransition>
        <section>
          <Link href="/">
            <nav className="mb-4">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent flex justify-center py-5 text-center px-4">
                Rick and Morty
              </h1>
            </nav>
          </Link>
        </section>
        <h1 className="flex justify-center text-2xl md:text-4xl font-bold py-5 text-center px-4">
          Rick and Morty Characters
        </h1>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={prevPageHandler} href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">{totalPages}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={nextPageHandler} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <section className="my-8 px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data &&
              data.map((character) => (
                <Card key={character.id}>
                  <CardHeader>
                    <CardTitle>
                      <h2 className="text-3xl font-semibold">
                        {character.name}
                      </h2>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <img
                        className="w-full h-80 rounded"
                        src={character.image}
                        alt={character.name}
                      />
                      <br />
                      Status: {character.status}
                      <br />
                      Species: {character.species}
                      <br />
                      Origin: {character.origin?.name}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/characters/${character.id}`}>
                      <CardAction>View Details</CardAction>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>
      </ViewTransition>
    </>
  );
}

export default Page;
