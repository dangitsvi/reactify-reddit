var React = require('react');
//***************HEADER***********************************************
var SubredditsData = [
  {title: "Art", link:"https://www.reddit.com/r/Art/"},
  {title: "aww", link:"https://www.reddit.com/r/aww/"}
]

var Subreddit = React.createClass({
  render: function() {
    return (
      <li>
        <a href={this.props.link}>{this.props.title}</a>
      </li>
    );
  }
});

var SubredditList = React.createClass({
  render: function() {
    var subredditNodes = SubredditsData.map(function(subreddit) {
      return (
        <Subreddit link={subreddit.link} title={subreddit.title} />
      )
    });

    return (
      <nav>
        <h3>my subreddits</h3>
        <p>{subredditNodes}</p>
      </nav>
    );
  }
});

var FlatNav = React.createClass({

  render: function() {
    var subredditNodes = SubredditsData.map(function(subreddit) {
      return (
        <Subreddit link={subreddit.link} title={subreddit.title} />
      )
    });


    return (
      <nav>
        <h2>FlatNav</h2>
        <ul>
          <li>
            <a href="https://www.reddit.com/">front</a>
          </li>
          <li>
            <a href="https://www.reddit.com/r/all">all</a>
          </li>
          <li>
            <a href="https://www.reddit.com/r/random">random</a>
          </li>
          {subredditNodes}
        </ul>
      </nav>
    )
  }
});

var DropdownNav = React.createClass({
  render: function() {
    return (
      <nav>
        <h2>DropdownNav</h2>
        <SubredditList />
      </nav>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <section>
        <h1>Reddit</h1>
        <DropdownNav />
        <FlatNav />
      </section>
    );
  }
});
//******************************************************************

var PostData = [
  {
    img:"http://b.thumbs.redditmedia.com/eFIM-cV3m5m6zTF-CnrI6xQag81ITbngLDlvwVo6mGU.jpg",
    alt:"Europa",
    link:"http://i.imgur.com/E3b0aCE.jpg",
    title:"One of these is Jupiter's moon Europa, the rest are frying pans."
  },
  {
    img:"http://b.thumbs.redditmedia.com/rY1qlV0MlYj_5EEPCv3p7Irgz-CtBNL3WMEqdhk5bdU.jpg" ,
    alt:"racing",
    link:"http://gfycat.com/LivelyImpressionableAbyssiniangroundhornbill",
    title:"This whole GIF is satisfying"
  },
  {
    img:"http://b.thumbs.redditmedia.com/8BfJOtbZzqzE_WWxDnDhAm9QJHKUN3yCRIIq9krLJqs.jpg",
    alt:"big daddy",
    link:"http//i.imgur.com/3fOCDFY.jpg",
    title:"I wonder if girl has any idea what's going on"
  }

]


var Post = React.createClass({
  render: function() {
    return (
      <section>
        <button>upvote</button>
        <button>downvote</button>
        <a href={this.props.link}>
          <img src={this.props.img} alt={this.props.alt} />
        </a>
          <a href={this.props.link}>{this.props.title}</a>

      </section>
    );
  }
});

var PostsList = React.createClass({

  render: function() {
    var PostNodes = PostData.map(function(post) {
      return (
        <p>
          <Post img={post.img} alt={post.alt} link={post.link} title={post.title}/>
        </p>
      )
    })
    return (
      <section>
        <h3>This is my posts lists</h3>
        {PostNodes}
      </section>
    );
  }
});

var PostsListContainer = React.createClass({
  render: function() {
    return (
      <section>
        <h2>This is my post list container</h2>
        <PostsList />
      </section>
    )
  }
});


var App = React.createClass({
  render: function() {
    return (
      <main>
        <Header />
        <PostsListContainer />
      </main>
    );
  }
});


React.render(<App />, document.body);
