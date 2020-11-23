import React from 'react';
import './style.css';


class Upload extends React.Component<{}, { file: any }> {
  file: null;
  constructor(props: any) {
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event: any) {
    if (this.file !== null) {


      this.setState(
        {

          file: URL.createObjectURL(event.target.files[0])
        })
    } else {
      this.setState(
        {
          file: URL.revokeObjectURL(event.target.files[0])
        })
    }
  }
  render() {
    return (
      <div>
        <div className="imagem">
            <img src={this.state.file} width="110px" height="100px" alt="Imagem de Perfil"/>
          <div className="texto">
            <input type="file" onChange={this.handleChange} />
          </div>
        </div>
      </div >
    );
  }
}
//   module.exports = Upload

export default Upload;