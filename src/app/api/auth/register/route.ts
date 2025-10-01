import { NextResponse } from 'next/server';

import { userSchema } from '@/schemas/user.schema';

export const POST = async (request: Request) => {
  const body = await request.json();
  const { Email, Password, ConfirmPassword, Name, LastName, Phone, Company } =
    body;

  try {
    userSchema.parse(body);

    const User = {
      data: {
        Email,
        Password,
        ConfirmPassword,
        Name,
        LastName,
        Phone,
        Company,
      },
    };

    return NextResponse.json(
      { success: 'Register successful', user: User },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'There was an error ',
        error: error,
      },
      { status: 400 },
    );
  }
};
