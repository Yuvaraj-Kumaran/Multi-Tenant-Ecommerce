// global.d.ts
declare module '@payloadcms/payload-cloud' {
  import type { Plugin } from 'payload';

  export function payloadCloudPlugin(options?: unknown): Plugin;
}
