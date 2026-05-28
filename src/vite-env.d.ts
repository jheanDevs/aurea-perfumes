/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LINK_WHATSAPP?: string;
  readonly VITE_LINK_EUDORA?: string;
  readonly VITE_LINK_BOTICARIO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
