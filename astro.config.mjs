import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://leavenworthhydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
