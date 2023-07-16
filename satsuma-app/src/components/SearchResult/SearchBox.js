import './search.css'

const SearchBox = (props) => {
  return (
    <div className="search-box">
      <div id={props._id} className="container-fluid">
        <div className='row'>
          <p className='col-7 search-box__titulo-material'>{props.material}</p>
          <p className='col-3 search-box__titulo-macro'>{props.macro_categoria}</p>
          <div className='col-2 text-center my-auto'>
            <a href={"search/"+props._id} className='search-box__img'>
              <i>I</i>
            </a>
          </div>
        </div>
        <div className='row'>
          <p>{props.categoria1}</p>
        </div>
      </div>
      {/* <div className="search-box__img">
        <a href="a algun lugar">
          <i>Img tacho</i>
        </a>
      </div> */}
    </div>
  );
};

export default SearchBox;


/*{ <div className="search-box">
<div id={props._id} className="search-box__desc">
  <div className='search-box__titulo'>
    <p className='search-box__titulo-material'>{props.material}</p>
    <p className='search-box__titulo-macro'>{props.macro_categoria}</p>
  </div>
  <div>
    <p>{props.categoria1}</p>
  </div>
</div>
<div className="search-box__img">
  <a href="a algun lugar">
    <i>Img tacho</i>
  </a>
</div>
</div> }*/
