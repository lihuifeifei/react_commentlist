/**
 * Created by ant on 2018/9/22.
 */
import React from 'react';
import { Form, Input,  Button} from 'antd';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    
    handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
    console.log('Received values of form: ', values);
}
});
}


render() {
    const { getFieldDecorator } = this.props.form;
    
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    
    return (
        <Form onSubmit={this.handleSubmit}>
<FormItem
    {...formItemLayout}
    label="姓名"
        >
        {getFieldDecorator('name', {
        rules: [{
            required: true, message: '请输入姓名!',
        }],
    })(
    <Input />
)}
</FormItem>
    
<FormItem
    {...formItemLayout}
    label="电话"
>
    {getFieldDecorator('telphone', {
        rules: [{
            required: true, message: '请输入电话!',
        }],
    })(
        <Input />
    )}
</FormItem>
    
<FormItem
    {...formItemLayout}
    label="备注"
>
    {getFieldDecorator('remark', {
        rules: [{
            required: false, message: '请输入备注!',
        }],
    })(
        <Input />
    )}
</FormItem>
            
            
    <FormItem {...tailFormItemLayout}>
<Button type="primary" htmlType="submit">添加</Button>
        </FormItem>
        </Form>
);
}
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;