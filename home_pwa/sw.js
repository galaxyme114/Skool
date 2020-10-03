;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_programador_fitness',
  urlsToCache = [
    './',
	'https://www.skoolnetworks.com/demo/authentication/',
	'https://www.skoolnetworks.com/demo/dashboard',  
	'https://fonts.googleapis.com/css?family=Signika:300,400,600,700',
	'https://www.skoolnetworks.com/demo/assets/vendor/bootstrap/css/bootstrap.css',
	'https://www.skoolnetworks.com/demo/assets/vendor/font-awesome/css/all.min.css',
	'https://www.skoolnetworks.com/demo/assets/vendor/datatables/media/css/dataTables.bootstrap.min.css',
    'https://www.skoolnetworks.com/demo/assets/vendor/select2/css/select2.css',
	'https://www.skoolnetworks.com/demo/assets/vendor/select2-bootstrap-theme/select2-bootstrap.min.css',
	'https://www.skoolnetworks.com/demo/assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
	'https://www.skoolnetworks.com/demo/assets/vendor/simple-line-icons/css/simple-line-icons.css',
	'https://www.skoolnetworks.com/demo/assets/vendor/magnific-popup/magnific-popup.css',
	'https://www.skoolnetworks.com/demo/assets/css/custom-style.css',
	'https://www.skoolnetworks.com/demo/assets/css/skins/default.css',
	'https://www.skoolnetworks.com/demo/assets/vendor/sweetalert/sweetalert-custom.css',
	'https://www.skoolnetworks.com/demo/assets/vendor/jquery/jquery.min.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/jquery-ui/jquery-ui.min.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/modernizr/modernizr.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/fullcalendar/fullcalendar.css',
	'https://www.skoolnetworks.com/demo/assets/vendor/chartjs/chart.min.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/echarts/echarts.common.min.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/moment/moment.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/fullcalendar/fullcalendar.js',
	'https://www.skoolnetworks.com/demo/assets/css/ramom.css',
	'https://www.skoolnetworks.com/demo/assets/css/skins/square-borders.css',
	'https://www.skoolnetworks.com/demo/assets/vendor/jquery-browser-mobile/jquery.browser.mobile.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/bootstrap/js/bootstrap.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/nanoscroller/nanoscroller.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/jquery-placeholder/jquery-placeholder.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/select2/js/select2.js', 'https://www.skoolnetworks.com/demo/assets/vendor/fuelux/js/spinner.js', 'https://www.skoolnetworks.com/demo/assets/vendor/datatables/media/js/jquery.dataTables.min.js', 'https://www.skoolnetworks.com/demo/assets/vendor/datatables/media/js/dataTables.bootstrap.min.js',
	'https://www.skoolnetworks.com/demo/assets/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/dataTables.buttons.min.js', 'https://www.skoolnetworks.com/demo/assets/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.bootstrap.min.js', 'https://www.skoolnetworks.com/demo/assets/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.html5.min.js', 'https://www.skoolnetworks.com/demo/assets/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.print.min.js', 'https://www.skoolnetworks.com/demo/assets/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.colVis.min.js', 'https://www.skoolnetworks.com/demo/assets/vendor/datatables/extras/TableTools/JSZip-2.5.0/jszip.min.js', 'https://www.skoolnetworks.com/demo/assets/vendor/datatables/extras/TableTools/pdfmake-0.1.32/pdfmake.min.js', 'https://www.skoolnetworks.com/demo/assets/vendor/datatables/extras/TableTools/pdfmake-0.1.32/vfs_fonts.js', 'https://www.skoolnetworks.com/demo/assets/vendor/datatables/extras/TableTools/RowGroup-1.0.2/js/dataTables.rowGroup.min.js', 
	'https://www.skoolnetworks.com/demo/assets/vendor/jquery-appear/jquery-appear.js', 
	'https://www.skoolnetworks.com/demo/assets/vendor/jquery-validation/jquery.validate.js', 'https://www.skoolnetworks.com/demo/assets/vendor/magnific-popup/jquery.magnific-popup.js', 'https://www.skoolnetworks.com/demo/assets/vendor/screenfull/screenfull.min.js', 'https://www.skoolnetworks.com/demo/assets/vendor/sweetalert/sweetalert.min.js', 
	'https://www.skoolnetworks.com/demo/assets/js/custom.js', 
	'https://www.skoolnetworks.com/demo/assets/js/plug.init.js', 
	'https://www.skoolnetworks.com/demo/assets/js/app.js', 
	'https://www.skoolnetworks.com/demo/assets/js/app.fn.js',

    'https://fonts.googleapis.com/css?family=Raleway:400,700',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2',
    'https://use.fontawesome.com/releases/v5.0.7/css/all.css',
    'https://use.fontawesome.com/releases/v5.0.6/webfonts/fa-brands-400.woff2',
    './style.css',
    './script.js',
    './img/ProgramadorFitness.png',
    './img/favicon.png'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})
