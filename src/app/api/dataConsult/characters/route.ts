import { fetchData } from '../../../../utils/fetchData';

import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = await fetchData(`${process.env.API}/character`);
  return NextResponse.json(data);
};
