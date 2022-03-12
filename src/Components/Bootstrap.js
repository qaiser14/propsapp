import React, { Component } from 'react'



class Bootstrap extends Component {
    render() {
        return (
            <div>
            hell from bootstrap
            <br />
            <br />

            <button type="button" class="btn btn-dark">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>

            <button type="button" class="btn btn-link">Link</button>                
            <br />
            <br />
            <br />
            <br />
            <br />

            <a class="btn btn-primary" href="#" role="button">Link</a>
            <button class="btn btn-primary" type="submit">Button</button>
            <input class="btn btn-primary" type="button" value="Input" />
            <input class="btn btn-primary" type="submit" value="Submit" />
            <input class="btn btn-primary" type="reset" value="Reset" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


            <button type="button" class="btn btn-outline-primary">Primary</button>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <button type="button" class="btn btn-outline-success">Success</button>
            <button type="button" class="btn btn-outline-danger">Danger</button>
            <button type="button" class="btn btn-outline-warning">Warning</button>
            <button type="button" class="btn btn-outline-info">Info</button>
            <button type="button" class="btn btn-outline-light">Light</button>
            <button type="button" class="btn btn-outline-dark">Dark</button>

            <br />
            <br />
            <br />
            <br />

            <a class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>


            <br />

            <a class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>


        </div>
             
        )
    }
}

export default Bootstrap
