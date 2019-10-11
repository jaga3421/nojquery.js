(function(){
  // Before using this library, give a fair warning to other developers to stop using jQuery
  if(typeof jQuery === 'function'){
    if($ === jQuery){
      $ = undefined
    }
    jQuery = undefined
  }
})()
