import { error } from 'console';
import { fetchData } from '../../../../utils/fetchData';

import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = await fetchData('https://rickandmortyapi.com/api/character');
  return NextResponse.json(data);
};
