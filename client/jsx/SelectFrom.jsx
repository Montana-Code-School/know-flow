
var {
    Styles,
    Paper,
    RaisedButton,
    SelectField,
    MenuItem

    } = MUI;

var { ThemeManager, LightRawTheme } = Styles;

const style = {
  margin: 12,
};


NewButton = React.createClass({
  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Never"/>
          <MenuItem value={2} primaryText="Every Night"/>
          <MenuItem value={3} primaryText="Weeknights"/>
          <MenuItem value={4} primaryText="Weekends"/>
          <MenuItem value={5} primaryText="Weekly"/>
        </SelectField>
        <br />
        <SelectField value={1} disabled={true}>
          <MenuItem value={1} primaryText="Never"/>
          <MenuItem value={2} primaryText="Every Night"/>
        </SelectField>
      </div>
    );
  }
});


