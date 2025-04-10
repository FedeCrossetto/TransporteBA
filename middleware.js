import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es',
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'], // evita redirigir archivos estáticos
};
