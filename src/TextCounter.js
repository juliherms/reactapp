import React, {Component} from 'react';

//component responsible to count character in text box
class TextCounter extends Component{

    render(){   
        return (  
            <div>
                <h1>Test Counter</h1>
                <textarea />
                <div>
                    <strong>Total:</strong>
                </div>
            </div>
        )
    }
}

export default TextCounter;