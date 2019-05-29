import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Info from "./Info";
import {Button} from 'antd';
import {Icon} from 'antd';
import { Select } from 'antd';
import { Switch } from 'antd';
import { Calendar } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN.js';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleChange = (value)=> {
        console.log(`selected ${value}`);
    }

    render(){
        const { Option } = Select;

        function onChange(checked) {
            console.log(`switch to ${checked}`);
        }

        function onPanelChange(value, mode) {
            console.log(value, mode);
        }

        return (
            <div>
                <h2>用户中心</h2>
                <section>
                    <Button type="primary">测试ant design 的button</Button>
                    <Icon type="step-backward" />

                    <div>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <br/>
                        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                    </div>
                    <div>
                        <Switch defaultChecked onChange={onChange} />
                    </div>
                    <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                        <Calendar locale={zh_CN} fullscreen={false} onPanelChange={onPanelChange} />
                    </div>
                </section>
            </div>
        )
    }
}

export default Main;