'use client';

import { FormEvent } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

function Forms() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const res = await axios.post('/api/auth/register', {
        Email: formData.get('Email'),
        Password: formData.get('Password'),
        ConfirmPassword: formData.get('ConfirmPassword'),
        Name: formData.get('Name'),
        LastName: formData.get('LastName'),
        Phone: formData.get('Phone'),
        Company: formData.get('Company'),
      });

      console.log(res);
      toast.success('Registro exitoso');
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      toast.error('Error al registrar');
    }
  };

  return (
    <ViewTransition>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="bg-card border rounded-lg shadow-lg p-8">
            <h1 className="mb-8 text-4xl md:text-5xl tracking-tight font-extrabold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent text-center">
              Registrate para acceder a más contenido
            </h1>
            <Toaster position="top-center" richColors closeButton />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="Email"
                  id="floating_email"
                  className="block py-3 px-4 w-full text-sm text-foreground bg-background border-2 border-input rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-muted-foreground duration-300 transform -translate-y-8 scale-75 top-3 left-3 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-8">
                  Email address
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <input
                  type="password"
                  name="Password"
                  id="floating_password"
                  className="block py-3 px-4 w-full text-sm text-foreground bg-background border-2 border-input rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-muted-foreground duration-300 transform -translate-y-8 scale-75 top-3 left-3 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-8">
                  Password
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <input
                  type="password"
                  name="ConfirmPassword"
                  id="floating_repeat_password"
                  className="block py-3 px-4 w-full text-sm text-foreground bg-background border-2 border-input rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-muted-foreground duration-300 transform -translate-y-8 scale-75 top-3 left-3 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-8">
                  Confirm password
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="Name"
                    id="floating_first_name"
                    className="block py-3 px-4 w-full text-sm text-foreground bg-background border-2 border-input rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-muted-foreground duration-300 transform -translate-y-8 scale-75 top-3 left-3 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-8">
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="LastName"
                    id="floating_last_name"
                    className="block py-3 px-4 w-full text-sm text-foreground bg-background border-2 border-input rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-muted-foreground duration-300 transform -translate-y-8 scale-75 top-3 left-3 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-8">
                    Last name
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative z-0 w-full group">
                  <input
                    type="tel"
                    name="Phone"
                    id="floating_phone"
                    className="block py-3 px-4 w-full text-sm text-foreground bg-background border-2 border-input rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-muted-foreground duration-300 transform -translate-y-8 scale-75 top-3 left-3 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-8">
                    Phone number
                  </label>
                </div>
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="Company"
                    id="floating_company"
                    className="block py-3 px-4 w-full text-sm text-foreground bg-background border-2 border-input rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-muted-foreground duration-300 transform -translate-y-8 scale-75 top-3 left-3 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-8">
                    Company
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md text-base px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Submit
              </button>

              <div className="text-center text-sm text-muted-foreground">
                <Link href="/" className="text-primary hover:underline">
                  Back to home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}

export default Forms;
