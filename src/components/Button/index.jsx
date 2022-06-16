import { Component } from "react";
import './styles.css'

export class Button extends Component {
    render ( ) {
        return (
            <button 
                disabled={this.props.disabled} 
                className="button" 
                onClick={this.props.onClick}>
                    {this.props.text}
            </button>
        )
    }
}