/* eslint-disable unicorn/prevent-abbreviations */
/// <reference types="vite/client" />

// interface ViteTypeOptions {
//   // By adding this line, you can make the type of ImportMetaEnv strict
//   // to disallow unknown keys.
//   strictImportMetaEnv: unknown;
// }

// interface ImportMetaEnv {
//   readonly SOME_ENV: string;
// }

// interface ImportMeta {
//   readonly env: ImportMetaEnv;
// }

declare const APP_ENVIRONMENT: string;
declare const APP_VERSION: string;
declare const APP_VERSION_DATE: string;
