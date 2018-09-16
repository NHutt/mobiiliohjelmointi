import React, { Component } from 'react';
class Kappalelomake extends Component {
  constructor(props) {
    super(props);
    this.state={artisti: '', kappale: '', musiikkiArvosana: '', mvArvosana: '', koreografiaArvosana: '', lyriikatArvosana: ''};
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
          <label htmlFor='artisti' style={styles.labelStyle}>Artisti</label>
          <input style={styles.inputStyle} type='text' name='artisti'
          value={this.state.artisti} onChange={this.muuta} />
          <br />
          <label htmlFor='kappale' style={styles.labelStyle}>Kappale</label>
          <input style={styles.inputStyle} type='text' name='kappale' value={this.state.kappale} onChange={this.muuta} />
          <br />
          <label htmlFor='musiikkiArvosana'style={styles.labelStyle}>Arvosana musiikille</label>
          <input style={styles.inputStyle}  type='text' name='musiikkiArvosana' value={this.state.musiikkiArvosana} onChange={this.muuta} />
          <br />
          <label htmlFor='mvArvosana' style={styles.labelStyle}>Arvosana musiikkivideolle</label>
          <input style={styles.inputStyle}  type='text' name='mvArvosana' value={this.state.mvArvosana} onChange={this.muuta} />
          <br />
          <label  htmlFor='koreografiaArvosana' style={styles.labelStyle}>Arvosana koreografialle</label>
          <input style={styles.inputStyle}  type='text' name='koreografiaArvosana' value={this.state.koreografiaArvosana} onChange={this.muuta} />
          <br />
          <label  htmlFor='lyriikatArvosana' style={styles.labelStyle}>Arvosana lyriikoille</label>
          <input style={styles.inputStyle}  type='text' name='lyriikatArvosana' value={this.state.lyriikatArvosana} onChange={this.muuta} />
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

export default Kappalelomake;
