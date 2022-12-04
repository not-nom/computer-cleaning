import React, { Component } from 'react'
import {getArticlesByQuerry} from '../../Functions/api'
import Article from './Article'


export default class ArticleList extends Component {
    state ={
        articles: []
    }
  async componentDidMount(){
    const articles = await getArticlesByQuerry("react") 
    console.log(articles)
    this.setState({articles})
}
  render() {
    const {articles} = this.state
    if(!articles.length){
        return <div>Loading</div>
    }
    return (
      <ul>
        {
            articles.map((list) => {
                return(
                    <Article list={list} />
                )
            })
        }
      </ul>
    )
  }
}

