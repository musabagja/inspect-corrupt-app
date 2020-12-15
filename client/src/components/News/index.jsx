export default (props) => {

  const { article } = props;

  return (
    <div className="news-content">
      <div>
        <img src={article?.poster}/>
      </div>
      <div>
        <p>{article?.judul}</p>
      </div>
    </div>
  )

}