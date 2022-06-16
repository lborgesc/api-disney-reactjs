import { Component } from "react";
import './styles.css'
export class Input extends Component{
    render ( ) {
        return (
            <input 
                className="text-input"
                onChange={this.props.onChange} 
                value={this.props.value} 
                type="search" 
                placeholder="Type your search" 
            />
        )
    }
}