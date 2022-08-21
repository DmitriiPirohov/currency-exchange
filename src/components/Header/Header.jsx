import './header.scss';
import 'bulma/css/bulma.css'
import logo from '../image/logo.png'

export const Header = ({ currency }) => {
  return (
    <div className="columns header">
      <div className="column is-one-fifth">
        <img src={logo} className='logo' alt="logo" />
      </div>

      <div className="column is-one-fifth">
        <div className="navbar-menu">
          <div className="navbar-start">
            Home
          </div>

          <div className="navbar-start">
            Page 1
          </div>

          <div className="navbar-start">
            Page 2
          </div>

          <div className="navbar-start">
            Page 3
          </div>
        </div>
      </div>

      <div className="column is-full">
        <div className='container-for-table'>
          {currency.length > 0 ?
            (
              <>
                <strong className='table-for-currancy'>
                  FOR 1 € :
                  {` `}
                  {currency.map((currenc) => currenc.cc === 'EUR' ? currenc = currenc.rate.toFixed(2) : '')}
                  ₴
                </strong>

                <br />
                <strong className='table-for-currancy'>
                  FOR 1 $ :
                  {` `}
                  {currency.map((currenc) => currenc.cc === 'USD' ? currenc = currenc.rate.toFixed(2) : '')}
                  ₴
                </strong>
              </>
            ) :
            (
              <>
                <div className="loader is-loading loader-position" />
                
                <span className="fa-stack fa-sm">
                  <i className="fas fa-spinner fa-pulse"></i>
                  Rating is not available
                </span>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};
