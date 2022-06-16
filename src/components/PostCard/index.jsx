import { Component } from "react";
import './styles.css'

export class PostCard extends Component {
    render ( ) {
        return (
            <div className='post'>             
              <img src={ this.props.imageUrl } alt={ this.props.name }/>
              <div className='post-content'>
                <h2>Nome:</h2>
                <p>{ this.props.name }</p>
                <h2>Filmes:</h2>
                <p>{ this.props.films[0] ? this.props.films[0] : "Não identificado!" }</p>
                <h2>Tv Shows:</h2>
                <p>{ this.props.tvShows[0] ? this.props.tvShows[0] : "Não identificado!" }</p>
              </div>
            </div>
        )
    }
}