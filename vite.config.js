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
                proyectoAmbiental: resolve(__dirname, 'src/pages/proyectos/ambientales.html'),
                proyectoSeguridad: resolve(__dirname, 'src/pages/proyectos/seguridad.html'),
                contacto: resolve(__dirname, 'src/pages/contact.html'),
                aboutUs: resolve(__dirname, 'src/pages/aboutus.html'),
                verification: resolve(__dirname, 'google8877433c9200b030.html'),
                jsContadores: resolve(__dirname, 'src/js/contadores.js'),
                jsHiddenIcons: resolve(__dirname, 'src/js/hidden-icon-seguridad.js'),
                jsScrollReveal: resolve(__dirname, 'src/js/scrollReveal.js')
                
            }
        }
    }
  })