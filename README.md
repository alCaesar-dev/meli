# Comandos de NPM

Este archivo contiene los comandos para construir, previsualizar y ejecutar tu aplicación en diferentes entornos.

## 1. Construir la aplicación para producción

Para crear una versión optimizada de la aplicación para producción, ejecuta el siguiente comando:

```bash
npm run build
```

Este comando generará una versión de tu aplicación lista para ser desplegada en producción. Los archivos generados estarán en la carpeta dist/ o equivalente según tu configuración.

## 2. Previsualizar la aplicación en producción

Después de ejecutar el comando de construcción, puedes previsualizar la aplicación en un entorno de producción local usando:

```bash
npm run preview
```

Esto iniciará un servidor de previsualización que servirá los archivos construidos en la carpeta de salida. Este comando te permite probar la aplicación tal como se verá en producción.

## 3. Ejecutar en modo de desarrollo

Para iniciar la aplicación en modo de desarrollo, donde los cambios se reflejan automáticamente y se realizan con una configuración optimizada para la depuración, usa el siguiente comando:

```bash
npm run dev
```

Este comando inicia un servidor de desarrollo, normalmente con características como hot-reloading y source maps para facilitar el desarrollo y la depuración.
