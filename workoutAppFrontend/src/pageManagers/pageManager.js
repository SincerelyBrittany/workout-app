class PageManager{

    constructor(container, adapter){
        this.container = container 
        this.adapter = new SignupAdapter(adapter)
    }

   fetchAndRenderPageResources(){
       return null
   }

       render(){
        this.container.innerHTML = this.staticHTML
        this.initBindingsAndEventListeners()
        this.fetchAndRenderPageResources()
    }


    // constructor(container){
    //     this.container = container    
    // }

    // fetchAndRenderPageResources(){
    //     return null
    // }

    // handleError(err){
    //     if(err.type === "Authorization Error"){
    //         this.handleAlert(err.msg)
    //         this.redirect('welcome')
    //     }else{
    //         this.handleAlert(err)
    //     }
    // }

    // render(){
    //     this.container.innerHTML = this.staticHTML
    //     this.initBindingsAndEventListeners()
    //     this.fetchAndRenderPageResources()
    // }

}