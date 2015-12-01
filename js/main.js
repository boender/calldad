if ('serviceWorker' in navigator) {
 console.log('Service Worker is supported');
 navigator.serviceWorker.register('js/sw.js').then(function(reg) {
   console.log(':^)', reg);
   reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function(sub) {
            console.log('endpoint:',sub.endpoint );
            document.getElementById('text').innerHTML = sub.endpoint;
        });
 }).catch(function(err) {
   document.getElementById('text').innerHTML = err;
 });
}else{
  document.getElementById('text').innerHTML = 'serviceworker not working';   
}