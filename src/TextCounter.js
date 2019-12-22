import React, {Component} from 'react';

//component responsible to count character in text box
class TextCounter extends Component{

    static defaultProps = {
        limit: 15
    }

    constructor(props){
        super(props);

        
        this.state = {
            totalChars: 0
        }
    }

    render(){   
        const { state, props } = this; //extract access
        return (  
            <div>
                <h1>Test Counter</h1>
                <textarea />
                <div>
                    <strong>Total:</strong> { state.totalChars }/{ props.limit}
                </div>
            </div>
        )
    }
}

export default TextCounter;