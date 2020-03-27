import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { onEdit, onUpdate , onDelete } from '../action';

class ListContent extends React.Component {

    onEdit = (id) => {
        this.props.onEdit(id)
    }
    onDelete = (id) => {
        this.props.onDelete(id)
    }
    onUpdate = (e, id) => {
        console.log(e)
        console.log(id)
        this.props.onUpdate(e, id)
    }

    render() {

        if (this.props.data.state) {
            return (
                <div className="cart_body">
                    { this.props.data.state?
                        this.props.data.state.map((item, index) => {
                            return <ListBody Update={(e, id) => this.onUpdate(e, id)} store={this.props.filteredData} key={index} data={item} onEdit={(id) => this.onEdit(id)} onDelete={(id) => this.onDelete(id)} />
                        }):'No Data'
                   }
                </div>
            )
        } else {
            return (
                <div>
                    No Records
                </div>
            )
        }

    }
}


class ListBody extends React.Component {

    render() {
        return (
            <div className="cards">
                <div>{
                    <>
                        <Card
                            bg={'Light'.toLowerCase()}
                            key={1}
                            text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '50rem' }}
                        >
                            <Card.Header><strong> Title :  {this.props.data.title} </strong></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                   Description body : {this.props.data.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </>
                }  </div>
                <div className="icons">
                    <div>
                        <Edit Update={(e, id) => this.props.Update(e, id)} store={this.props.store} data={this.props.data.id} onEdit2={(id) => this.props.onEdit(id)} />
                    </div>
                    <div><i onClick={() => this.props.onDelete(this.props.data.id)} className="fa fa-trash icon" aria-hidden="true"></i></div>
                </div>

            </div>
        )
    }
}


function Edit(props) {
    // console.log(props.store.title)
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState('title');
    const [body, setBody] = useState('body');

    useEffect(() => {
        if (props.store) {
            setTitle(props.store.title);
            setBody(props.store.body);
        } else {
            setTitle('title');
            setBody('body');
        }
    }, [props.store]);



    const handleClose = () => setShow(false);
    const handleShow = () => {
        props.onEdit2(props.data)
        setShow(true);
    }

    const onSave = () => {
        let value = {}
        value.title = title;
        value.body = body
        props.Update(value, props.data)
        handleClose()
    }

    const UpdateTitle = (e) => {
        setTitle(e.target.value)
    }
    const UpdateBody = (e) => {
        setBody(e.target.value)
    }



    return (
        <>

            <i onClick={handleShow} className="fa fa-pencil-square-o icon" aria-hidden="true"> </i>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        props.store ? <div>
                            <label><strong>TITLE</strong></label>
                            <InputGroup className="mb-3">
                                <FormControl
                                    // onChange={(e)=>props.Update(e,props.data)}
                                    onChange={(e) => UpdateTitle(e)}
                                    value={title}
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <label><strong>BODY</strong></label>
                            <InputGroup className="mb-3">
                                <FormControl
                                    onChange={(e) => UpdateBody(e)}
                                    value={body}
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div> : <div></div>
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={onSave}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



const mapStateToProps = (store) => {
    console.log(store)
    return {
        data: store.root,
        filteredData: store.root.filteredData
    }
}


export default connect(mapStateToProps, { onEdit, onUpdate,onDelete })(ListContent);