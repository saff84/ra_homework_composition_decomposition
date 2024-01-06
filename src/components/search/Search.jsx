import React from 'react';
import { Form, Input, Button } from 'reactstrap';


export default function SearchForm() {
    return (
        <Form className='form'>
            <div className='logo'></div>
            <Input />
            <Button>Найти</Button>
        </Form>
        )
}