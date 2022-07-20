
import card from '../../assets/img/card.svg'
import post from '../../assets/img/post.svg'
import './main.scss'


function Main() {


  return (
    <div className="wrapper__right">
  <div className="main">
    <div className="main__content">
    <div className="main__top">
      <h2>Current Price</h2>
      <div className="main__card-wrap">
      <div className="main__card">
        <img src={card} alt="" />
      </div>
      <div className="main__card">
        <img src={card} alt="" />
      </div>
      </div>
     
    </div>

    <div className="main__bottom">
    <h2>Posts</h2>

    <div className="main__cardmini-wrap">
    <div className="main__cardmmini">
        <img src={post} alt="" />
      </div>
      <div className="main__cardmmini">
        <img src={post} alt="" />
      </div>
      <div className="main__cardmmini">
        <img src={post} alt="" />
      </div>
      <div className="main__cardmmini">
        <img src={post} alt="" />
      </div>
    </div>
    </div>
    </div>
  
  </div>
    </div>

  );
}

export default Main;
