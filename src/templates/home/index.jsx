import { Component } from 'react';
import './styles.css';

import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0, 
    postsPerPage: 8, 
    searchValue: ''
  }

  async componentDidMount ( ) {
    await this.loadPosts();
  }

  loadPosts = async ( ) => {
    const { page, postsPerPage } = this.state;

    const postsResponse = await fetch('https://api.disneyapi.dev/character')
    const postsJson = await postsResponse.json( )
    this.setState({ 
      posts: postsJson.data.slice(page, postsPerPage), 
      allPosts: postsJson.data,
    }) 
  }

  loadMorePosts = ( ) => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage; 
    const nexPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push( ...nexPosts );

    this.setState({ posts, page:nextPage })
  }

  handleChange = ( e ) => {
    const { value } = e.target
    this.setState({ searchValue: value }) 
  }
 
  render ( ) {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state; 
    const noMorePost = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? 
      allPosts.filter( post => post.name.toLowerCase().includes(searchValue.toLowerCase())) 
      : posts;

     return (
      <section className="container">

        <div className="search-container">
          <h1>Search value: { searchValue } </h1>
          <Input 
            onChange={this.handleChange}
            value={searchValue}
          />
        </div>

       {filteredPosts.length > 0 && <Posts posts={filteredPosts}/>}
       {filteredPosts.length === 0 && <p>Não existem card's</p>}

        <div className="button-container">
          {!searchValue && (
            <Button 
              text="Load more cards"
              onClick={this.loadMorePosts}
              disabled={noMorePost}
            />
          )}
        </div>

      </section>
      
    )
  };
}


