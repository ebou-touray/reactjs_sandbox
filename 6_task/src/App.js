import React, { Component } from "react";
import Post from "./Post/Post";

const posts = [
  {
    id: 1,
    title: "Lorem inpsum er ganske enkelt flydtekst",
    author: "Baboucarr Touray",
    desc: "Lorem inpsum er ganske enkelt flydtekst",
    img: "https://source.unsplash.com/featured/laptop",
  },

  {
    id: 2,
    title: "Lorem inpsum er ganske enkelt flydtekst",
    author: "Mariatou Touray",
    desc: "Lorem inpsum er ganske enkelt flydtekst",
    img: "https://source.unsplash.com/photos/AeVemaUw7NM",
  },

  {
    id: 3,
    title: "Lorem inpsum er ganske enkelt flydtekst",
    author: "Ancha Touray",
    desc: "Lorem inpsum er ganske enkelt flydtekst",
    img: "https://unsplash.com/photos/xP_AGmeEa6s",
  },
];

class App extends Component {
  state = {
    posts: posts,
  };

  removeHandler = (removeId) => {
    const oldArray = [...this.state.posts];
    oldArray.splice(removeId, 1);
    this.setState({ posts: oldArray });
  };

  render() {
    const postList = this.state.posts.map((post, index) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          desc={post.desc}
          img={post.img}
          click={this.removeHandler.bind(this, index)}
        />
      );
    });

    return <div className="posts">{postList}</div>;
  }
}
export default App;
