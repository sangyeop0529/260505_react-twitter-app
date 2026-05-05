import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: [
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'firebaseApp', replacement: path.resolve(__dirname, 'src/firebaseApp') },
    ],
  },
})
