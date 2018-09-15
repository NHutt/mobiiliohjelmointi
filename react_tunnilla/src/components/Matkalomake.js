import React, { Component } from 'react';
class Matkalomake extends Component {
  constructor(props) {
    super(props);
    this.state={otsikko: '', paikka: '', paiva: '', saa: '', kuvaus: ''};
  }
  muuta = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  lisaa = (e) => {
    e.preventDefault();
  }
  render() {
    return (
        <form>
          <label htmlFor='otsikko' style={styles.labelStyle}>Otsikko</label>
          <input style={styles.inputStyle} type='text' name='otsikko'
          value={this.state.otsikko} onChange={this.muuta} />
          <br />
          <label htmlFor='paikka' style={styles.labelStyle}>Paikka</label>
          <input style={styles.inputStyle} type='text' name='paikka' value={this.state.paikka} onChange={this.muuta} />
          <br />
          <label htmlFor='paiva'style={styles.labelStyle}>Päivä</label>
          <input style={styles.inputStyle}  type='text' name='paiva' value={this.state.paiva} onChange={this.muuta} />
          <br />
          <label htmlFor='saa' style={styles.labelStyle}>Sää</label>
          <input style={styles.inputStyle}  type='text' name='saa' value={this.state.saa} onChange={this.muuta} />
          <br />
          <label  htmlFor='kuvaus' style={styles.labelStyle}>Kuvaus</label>
          <textarea style={styles.inputStyle} rows='5' cols='40' name='kuvaus' value={this.state.kuvaus} onChange={this.muuta}></textarea>
          <br />
          <input type='submit' value='Talleta' onClick={this.lisaa} />
        </form>
    );
  }
}

const styles = {
  labelStyle : {
    width: '6em',
    display: 'block',
    marginTop: '8px',
  },
  inputStyle: {
    marginTop: '8px',
    border: '1px solid',
    borderRadius: '6px',
  }
}

export default Matkalomake;
