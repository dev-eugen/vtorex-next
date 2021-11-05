import { defineConfig, loadEnv  } from 'vite'
import pugPlugin from "vite-plugin-pug"
import vue from '@vitejs/plugin-vue'
import voie from 'vite-plugin-voie'
import path from 'path'

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }
 

export default ({ mode }) => { 
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
     server: {
    //   host: "erpstorm.de",
    //   port: 3000,
    //   https: true, 
    },
    plugins: [vue(), pugPlugin(options, locals), voie()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src'),
        '@axios': path.resolve(__dirname, '/src/plugins/axios.js'),  
        '@api': path.resolve(__dirname, '/src/api/index'),  
      },
    }
  });
}