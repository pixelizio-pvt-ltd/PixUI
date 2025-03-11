import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        react(),
        dts({
            tsconfigPath: resolve(__dirname, 'tsconfig.json'),
        }),
    ],
    server: {
        port: 3000,
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: (format) => `index.${format}.js`,
            name: '@pixelizio/core',
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'react/jsx-runtime',
                },
            },
        },
    },
});
