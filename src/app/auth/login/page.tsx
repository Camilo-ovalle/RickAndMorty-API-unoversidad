'use client';

import { FormEvent, useState } from 'react';
import { Toaster, toast } from 'sonner';
import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../store/store';

function Login() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('Email') as string;
    const password = formData.get('Password') as string;

    try {
      // Usuario predefinido para testing
      const VALID_EMAIL = 'camilo@email.com';
      const VALID_PASSWORD = '123456789';

      if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        // Guardar usuario en Zustand
        setUser({
          Email: email,
        });

        toast.success('Login exitoso');

        // Redirigir a characters
        setTimeout(() => {
          router.push('/characters');
        }, 1000);
      } else {
        toast.error('Credenciales inválidas. Usa: camilo@email.com / 123456789');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ViewTransition>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-card border rounded-lg shadow-lg p-8">
            <h1 className="mb-8 text-4xl md:text-5xl tracking-tight font-extrabold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent text-center">
              Iniciar Sesión
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md text-base px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
              >
                {loading ? 'Cargando...' : 'Iniciar Sesión'}
              </button>

              <div className="text-center text-sm text-muted-foreground space-y-2">
                <p>
                  ¿No tienes cuenta?{' '}
                  <Link
                    href="/auth/register"
                    className="text-primary hover:underline"
                  >
                    Regístrate
                  </Link>
                </p>
                <Link href="/" className="text-primary hover:underline block">
                  Volver al inicio
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ViewTransition>
  );
}

export default Login;
