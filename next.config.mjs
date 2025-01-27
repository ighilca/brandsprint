import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const config = {
  // Vos autres configurations Next.js ici
};

export default withNextIntl(config); 