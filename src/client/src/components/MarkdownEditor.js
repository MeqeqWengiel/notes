import React, { Component } from 'react';
import { connect } from 'react-redux';

import { change, deleteBlock, changeOrder } from '../actions/noteActions';
import MarkdownBlock from './MarkdownBlock';

class MarkdownEditor extends Component {
    render() {
        return (
            <div className="markdown-editor">
                <div className="desc">Blok markdown</div>
                <div className="settings">
                    <div className="order">{ this.props.order + 1} </div>
                    <div className="up" onClick={ () => this.props.onChangeOrder( this.props.order, -1)}>
                        <i className="fas fa-caret-up" />
                    </div>
                    <div className="down" onClick={ () => this.props.onChangeOrder( this.props.order, 0)}>
                        <i className="fas fa-caret-down" />
                    </div>
                    <div className="delete" onClick={ () => this.props.onDelete( this.props.order ) }>
                        <i className="fas fa-times" />
                    </div>
                </div>
                <div className="editor">
                    <MarkdownBlock content={ this.props.text[this.props.order].content } />

                    <textarea placeholder="Wprowadź tekst"
                        value={ this.props.text[this.props.order].content } 
                        onChange={ e => this.props.onChange(this.props.order, e.target.value) }
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.note.blocks
});

const mapActionsToProps = {
    onChange: change,
    onDelete: deleteBlock,
    onChangeOrder: changeOrder
}
  
export default connect(mapStateToProps, mapActionsToProps)(MarkdownEditor);
