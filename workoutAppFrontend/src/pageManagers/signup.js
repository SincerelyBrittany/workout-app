class SignupPage extends PageManager{

    // constructor(container, adapter){
    //     super(container)
    //     this.adapter = new SignupAdapter(adapter)
    //     // this.initBindingsAndEventListeners()
    // }

    initBindingsAndEventListeners(){
        this.form = this.container.querySelector('#signup-form')
        this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }


    async handleSubmit(e){
        e.preventDefault()
        // const inputs = e.target.querySelectorAll('input')
        // const email = inputs[0].value
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const [email, password, name] = inputs.map(input => input.value)
        // console.log(name, email, password)
        const params = {
            user: {
                email, password, name
            }
        }
        this.adapter.signup(params)
        // try{
        //   await this.adapter.signup(params)
        //   this.redirect('workout')
        // }catch(err){
        //   this.handleError(err)
        // }
        
    }


    get staticHTML(){
        return (`
        <h2>Sign Up</h2>
        <form id="signup-form">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Email" required>
          </div>
          <div class="form-group col-md-6">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" required>
          </div>
          <div class="form-group col-md-6">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" required>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
        `)
    }

    // render(){
    //  this.container.innerHTML = this.staticHTML
    //  //render static html
    //  // update bindings and event listeners
    //  // Make any database fetches, update page with dynamic html
    // }
}