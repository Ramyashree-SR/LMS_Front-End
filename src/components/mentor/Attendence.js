import { Button, Table } from 'antd';
import {Switch } from 'antd';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import "./Attendence.css"

function Attendence(props){

  // const [show, setShow] = useState(false);

  // const handleHide = () => setShow(false);
  // const handleShow = () => setShow(true);

 const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
const columns = [
  {
    title: 'No',
    dataIndex: 'no',
  },
  {
    title: 'EmployeeId',
    dataIndex: 'EmployeeId',
  },
  {
    title: 'EmployeeName',
    dataIndex: 'EmployeeName',
  },
  {
    title: 'Attendence',
    render: (record) => {
        return (
        < >
          <div style={{display:"flex"}}>
           <p>M <Switch size="small" defaultChecked onChange={onChange}/> </p> &nbsp;&nbsp;&nbsp;&nbsp;
           <p>N <Switch size="small" defaultChecked onChange={onChange}/> </p>
           
          </div> 
        </>
           
        )}
  },
];
const data = [];

for (let i = 1; i < 5; i++) {
  data.push({
    key: i,
    No:`1${i}`,
    EmployeeId:`#${i}`,
    EmployeeName: `Edward King ${i}`,
    Attendence:" "
  });
}

{
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  
  const handleHide=()=>{
    props.handleClose()
  }
  return (
    <div>
      
      <Modal
        size="lg"
        show={props.lgShow}
        onHide={handleHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Attendence (20 Mar 2020)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleHide} style={{background:"#075575",color:"#FFFFFF"}}>
            Submit
          </Button>
          
        </Modal.Footer>
      </Modal>

        
       
      
    </div>
  );
};
}
export default Attendence;