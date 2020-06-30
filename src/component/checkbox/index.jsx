import React, { Component } from 'react';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.id = Math.random().toString(36).substring(2);
        this.state = {
            checked: props.defaultChecked || false
        }
    }

    handleChange(e) {
        console.log(e.target.checked)
        const { item } = this.props
        this.props.onChange(e, item)
        // const checked = e.target.checked
        // this.setState({
        //     checked
        // }, () => {
        //     this.props.onChange(e, item)
        // })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.defaultChecked
        })
    }

    render() {
        const { checked } = this.state
        return (
            <span className={['checkbox-hook', 'ta-c', 'mayfly-checkbox',
                checked === 'semi' ? 'mayfly-checkbox-indeterminate'
                : checked ? 'mayfly-checkbox-checked' : ''].join(' ')} >
                <input
                    id={this.id}
                    trigger="core"
                    type="checkbox"
                    disabled={this.props.disabled}
                    className="mayfly-checkbox-input"
                    style={{ opacity: 0 }}
                    name={this.props.name || ''}
                    checked={checked}
                    onChange={(e) => this.handleChange(e)}
                />
                <span className="mayfly-checkbox-inner fs12"></span>
            </span>
        );
    }
}