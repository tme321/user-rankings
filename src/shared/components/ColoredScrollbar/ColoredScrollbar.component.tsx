import './ColoredScrollbar.css';
import { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ColoredScrollbarProps } from './ColoredScrollbar.props';
import { ColoredScrollbarState } from './ColoredScrollbar.state';

/**
 * @class ColoredScrollbars
 * @description extends Scrollbars to customize the color
 * of the scroll widget.
 */
export class ColoredScrollbars extends 
    Component<ColoredScrollbarProps, ColoredScrollbarState> {

    constructor(props: ColoredScrollbarProps) {
        super(props);
        this.state = { top: 0 };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderView = this.renderView.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
    }

    handleUpdate(values: ColoredScrollbarState) {
        const { top } = values;
        this.setState({ top });
    }

    renderView({ style, ...props }: ColoredScrollbarProps) {
        return (
            <div
                style={{ ...style, overflowX:"hidden" }}
                {...props}/>
        );
    }

    /**
     * The scrollbar class implements the desired look and feel
     */
    renderThumb({ style, ...props }: ColoredScrollbarProps) {
        return (
            <div className="scrollbar"
                style={{ ...style, backgroundColor: this.props.thumbColor }}
                {...props}/>
        );
    }

    render() {
        const {thumbColor, ...props} = this.props;
        return (
            <Scrollbars
                renderView={this.renderView}
                renderThumbHorizontal={this.renderThumb}
                renderThumbVertical={this.renderThumb}
                onUpdate={this.handleUpdate}
                {...props}/>
        );
    }
}