import { fetchData } from '../../../../utils/fetchData';

import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = await fetchData(`${process.env.API}/character`, 1);
  return NextResponse.json(data);
};
