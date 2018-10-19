import styled, { css } from 'react-emotion';
import React, { Component } from 'react';
import { secondary } from '../shared/colors';
const ipfsAPI = require('ipfs-api');


const AddFileLabel = styled('label')`
  border-radius: ${props => props.theme.borderRadius};
  border: ${props => `solid 1px ${props.theme.colors.secondary}`};
  display: inline-block;
  cursor: pointer;
  padding: 0 8px;
  margin-left: 15px;
`;

const AddFileDiv = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowDiv = styled('div') `
  display: flex;
  margin-left: 73px;
  margin-top: 10px;
`;

class AddFile extends Component {
  constructor () {
    super();
    this.state = {
      added_file_hash: null
    };
    this.ipfsApi = ipfsAPI('localhost', '5001');

    //bind methods
    this.captureFile = this.captureFile.bind(this);
    this.saveToIpfs = this.saveToIpfs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  captureFile (event) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    let reader = new window.FileReader();
    reader.onloadend = () => this.saveToIpfs(reader);
    reader.readAsArrayBuffer(file);
  }

  saveToIpfs (reader) {
    let ipfsId;
    const buffer = Buffer.from(reader.result);
    //eslint-disable-next-line
    this.ipfsApi.add(buffer, {progress: prog => console.log(`received: ${prog}`) })
      .then(response => {
        ipfsId = response[0].hash;
        this.setState({ added_file_hash: ipfsId });
        this.props.onFileAdd(ipfsId);
      }).catch(err => {
        throw new Error(err);
      });
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  render () {
    return (
      <AddFileDiv>
        <RowDiv>
          <div>Pictures:</div>
          <AddFileLabel onSubmit={this.handleSubmit}>
            <input type='file' onChange={this.captureFile} className={css`
              display: none;
            `}/>
            Upload picture
          </AddFileLabel>
        </RowDiv>
        <RowDiv>
          <span className={css`
            font-weight: bold;
          `}>{this.state.added_file_hash ? 'IPFS link: ' : ''}</span>
          <a
            href={'https://ipfs.io/ipfs/' + this.state.added_file_hash} className={css`
            margin-left: 15px;
            :hover {
              height: 1.5em;
              border-bottom: solid 2px ${secondary};
              color: ${secondary};
            }
            `}>
            {this.state.added_file_hash ? 'Link to your picture' : ''}
          </a>
        </RowDiv>

      </AddFileDiv>
    );
  }
}

export default AddFile;