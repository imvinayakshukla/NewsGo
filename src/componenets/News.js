import React, { useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { useState } from "react";

const News =(props)=> {

  const [article, setarticle] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const [totalarticle, setTotalarticle] = useState(0)

  // constructor() {
  //   super();
  //   this.state = {
  //     article: [],
  //     page: 1,
  //     loading: false,
  //   };
  // }

  const  updateNews=async (pageNo) =>{
   
    props.setProgress(10);
   const url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=${props.api}&page=${
          page
      }&pageSize=${props.pagesize}`;
      props.setProgress(60);
    // setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticle(parsedData.articles)
    setTotalarticle(parsedData.totalResults)
    setLoading(false)

    // this.setState({
    //   article: parsedData.articles,
    //   totalarticle: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  }

  useEffect(() => {
    
    updateNews();
  
    
  }, [])
  
  // async componentDidMount() {
   
    
  // }
 const handleNextCLick = async () => {
  //  setState({ page:   page + 1 });
  setPage(page+1)
    updateNews();
    
  };
 const handlePrevCLick = async () => {
    // setState({ page:   page - 1 });
    setPage(page-1)
    updateNews();

  };

 
    return (
      <div className="container my-3">
        <div className="text-center">{  loading && <Spinner />}</div>
        <h2 className="text-center"><b>NewsGo</b> - Top Headlines</h2>
        <div className="row  ">
            {console.log(  article)}
          {!  loading &&
              article.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    source={element.source.name}
                    author={element.author}
                    date={element.publishedAt}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageURL={element.urlToImage}
                    newURL={element.url}
                  />
                </div>
              );
            })}
        </div>

        <div className="d-flex justify-content-between">
          <button
            disabled={  page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevCLick}
          >
            &larr; Prev
          </button>
          <button
            disabled={
                page + 1 >
              Math.ceil(totalarticle / props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleNextCLick}
          >
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }


News.defaultProps = {
  ccountry: "in",
  pagesize: 8,
  category: "general",
};

News.defaultProps = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  country: PropTypes.string,
};


export default News;