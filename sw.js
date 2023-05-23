const STATIC_CACHE = "static";
//Se declara un vector con la ubicacion y el nombre
const APP_SHELL =[
"/",
"/index.html",
"/css/styles.css",
"/js/main.js",
"/js/arriba.js",
"/img/logo_osfags.png",
"/Transparencia/index.html",
"/Sobre-el-Órgano/index.html",
"/Opiniones/index.html",
"/Denuncias/index.html",
"/Datos-Personales/index.html",
"/Comité/index.html",
"/assets/casa-corazón.mp4",
"/assets/hogar-de-la-niña-web.mp4",
"/img/col_cap,pr.jpg",
"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
];
//En el evento install se agregan los archivos a la 
self.addEventListener("install", (e) => {
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});
//En el evento fetch se envian los archivos a la pagina
self.addEventListener("fetch", (e) => {
    console.log("fectch! ", e.request);

    e.respondWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );
});
