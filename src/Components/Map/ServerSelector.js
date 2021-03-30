import React from 'react';

class ServerSelector extends React.Component {
    render() {
        console.log('Drawing Server Selector..')
        return (
            <select
                className='server-selector'
                id='server-selector'
                style={{
                    position: 'absolute',
                    zIndex: 1000,
                    marginLeft: '50px',
                    marginTop: '10px',
                    fontSize: '200%',
                    borderRadius: '5px'
                }}
                value={this.props.selectedServer}
                onChange={(event) => this.props.onServerChange(event.target.value)}
            >
                <option value="1">Server 1</option>
                <option value="2">Server 2</option>
            </select>
        );
    }
}

export default ServerSelector;
