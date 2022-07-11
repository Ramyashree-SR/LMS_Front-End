import { Button, Form, Input } from "antd";
import React from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  let navigate=useNavigate()

  const handleLogin=()=>{
    navigate('/admin')
  }
  

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="a bg-image">
        <img src="./assets/IMG_0534.png" className="img-fluid" alt="Sample" />
        {/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}> */}
        {/* </div> */}
      </div>

      <div className=" bg-image">
        <img src="./assets/wepik-2022319-214333.png" className="b" alt="" />
      </div>

      <div>
        <div className="bg-image">
          <figure>
            <img
              src="./assets/wepik-2022319-214333-1.png"
              className="c"
              alt=""
            />

            <figcaption>
              <h1 className="fig">
                Good things on <br /> your way!
              </h1>
            </figcaption>
          </figure>
        </div>

        <div className="data">
          <div>
            <img
              src="./assets/Artboard – 2.png"
              className="technoelevate"
              alt=""
              height="10px"
            />
          </div>

          <h5 className="name">Login</h5>

          <Form
            name="basic"
            labelCol={{
              span: 10,
            }}
           
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
             layout="vertical">
            <Form.Item
              label="EmployeeID"
              name="employeeid"
              requiredMark="optional"
              rules={[
                {
                  required: true,
                  message: "Please input your EmployeeID!",
                },
              ]}
              className="login"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              requiredMark="optional"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              className="login"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
               <div >
              <button type="login" className="d" onClick={handleLogin} >Login </button>
              <button type="cancel" className="d1">Cancel</button> 
              </div>
            </Form.Item>
          </Form>

          <div>
            <p className='sub'><pre>Copyright &copy;2018Alerico.com  Terms&condition|Privacy Policy</pre></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
