import { Input, plugin } from 'postcss';
import { build } from 'vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';


export default defineConfig ({

    build:{
        rollupOptions:{
            input:{
                main: resolve(__dirname, 'index.html'),
                gestionAmbiental: resolve(__dirname, 'src/pages/medioambiente/gestionAmbiental.html'),
                informesAmbientales: resolve(__dirname, 'src/pages/medioambiente/informesAmbientales.html'),
                monitoreosAmbientales: resolve(__dirname, 'src/pages/medioambiente/monitoreosAmbientales.html'),
                capacitacionesAmbientales: resolve(__dirname, 'src/pages/medioambiente/capacitacionesAmbientales.html'),
                gestionSeguridad: resolve(__dirname, 'src/pages/seguridad/gestionSeguridadySalud.html'),
                informeSeguridad: resolve(__dirname, 'src/pages/seguridad/informesSeguridadSalud.html'),
                monitoreosSeguridad: resolve(__dirname, 'src/pages/seguridad/monitoreosLaborales.html'),
                aboutUs: resolve(__dirname, 'src/pages/proyectos/ambientales.html'),
                aboutUs: resolve(__dirname, 'src/pages/aboutus.html')
            }
        }
    }
  })