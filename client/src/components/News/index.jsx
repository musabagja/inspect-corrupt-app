export default (props) => {

  const { article } = props;
  console.log(article);

  return (
    <div className="news-content">
      {/* <div>
        <img src={article?.poster}/>
      </div>
      <div>
        <p>{article?.judul}</p>
      </div> */}
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
          <div class="uk-card-media-left uk-cover-container">
            <img src={article?.poster} alt="" uk-cover/>
        </div>
        <div>
            <div class="uk-card-body">
              <a href={article?.link}>
                <h3 class="uk-card-title" style={{width: 550}}>{article?.judul}</h3>
              </a>
              <p>{article?.waktu}</p>
            </div>
        </div>
    </div>
    </div>
  )

}