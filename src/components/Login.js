import { useState } from 'react';
import {Redirect} from 'react-router-dom';

function Login(props) {

  const [login, setLogin] = useState({
    txtUsername: '',
    txtPassword: '',
  });


  const onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value === 'checkbox' ? target.checked : target.value;
    setLogin({ ...login, [name]: value })
  }

  const onLogin = (e) => {
    e.preventDefault();
    if (login.txtUsername === 'admin' && login.txtPassword === 'admin') {
      localStorage.setItem('user',JSON.stringify({
        username: login.txtUsername,
        password: login.txtPassword
      }));
      alert('Đăng nhập thành công ')
      // Chưa chuyển qua liền
    }
    else{
      alert('Đăng nhập lại ')
      setLogin({
        txtUsername: '',
        txtPassword: '',
      })
    }

  }
  
  var loginInUser = localStorage.getItem('user');

  if(loginInUser!==null){
  var{location}=props;
    return <Redirect 
    to={{
      pathname:'/products',// trang chuyển đến
      state:{
        from: location
      }
    }}/>
  }


  return (

    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

        <form onSubmit={onLogin}>
          <legend>Đăng Nhập</legend>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="txtUsername"
              value={login.txtUsername}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="txtPassword"
              value={login.txtPassword}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">Đăng Nhập</button>
        </form>

      </div>
    </div>

  );
}

export default Login;
