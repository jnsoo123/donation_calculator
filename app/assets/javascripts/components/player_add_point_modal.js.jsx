var PlayerAddPointModal = createReactClass({
  getInitialState: function() {
    return {
      type: 'adena',
      value: 0,
    }
  },

  handleTypeChange: function(e) {
    e.preventDefault()
    this.setState({type: e.target.value})
  },

  handleValueChange: function(e) {
    e.preventDefault()
    this.setState({value: e.target.value})
  },

  inputMax: function() {
    if (this.state.type == 'adena') {
      return '75000'
    } else if (this.state.type == 'pob') {
      return '1200'
    } else if (this.state.type == 'rss') {
      return '600'
    } else { // quest
      return '30'
    }
  },

  inputStep: function() {
    if (this.state.type == 'adena') {
      return '5000'
    } else if (this.state.type == 'pob') {
      return '40'
    } else if (this.state.type == 'rss'){
      return '20'
    } else { // quest
      return '1'
    }
  },

  calculatedPoints: function(){
    if (this.state.type == 'adena') {
      return (this.state.value / 5000) * 10
    } else if (this.state.type == 'pob') {
      return (this.state.value / 40) * 10
    } else if (this.state.type == 'rss') {
      return (this.state.value / 20) * 10
    } else {
      return (this.state.value / 1) * 50
    }
  },

  render: function() {
    return(
      <div className="modal fade" id={`playerId--${this.props.player.id}`}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{`Add Contribution Points to ${this.props.player.in_game_name}`}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form action='/contributions' method='POST' id={`contributionForm--${this.props.player.id}`}>
              <div className="modal-body">
                <div className='form-group'>
                  <label>Type</label> 
                  <select name='contribution[contribution_type]'className='custom-select' onChange={this.handleTypeChange} value={this.state.type}>
                    <option value='adena'>Adena</option> 
                    <option value='pob'>Proof of Blood</option>
                    <option value='rss'>Redstar Stone</option>
                    <option value='quest'>Clan Quest</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label>Value</label>
                  <input 
                    className='form-control' 
                    name='contribution[value]'
                    type='number' 
                    min='0'
                    max={this.inputMax()}
                    step={this.inputStep()}
                    value={this.state.value} 
                    onChange={this.handleValueChange} />
                </div>
                <p>Calculated Points: {this.calculatedPoints()}</p>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Add points</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <input type='hidden' name='contribution[player_id]' value={this.props.player.id} />
                <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
              </div>
            </form>
          </div>
        </div>
      </div>
    ) 
  }
})
