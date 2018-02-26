var PlayerUpdateLevel = createReactClass({
  getInitialState: function() {
    return {
      level: this.props.player.current_level,
      cp: this.props.player.current_cp
    } 
  },

  handleLevelChange: function(e) {
    this.setState({level: e.target.value}) 
  },

  handleCpChange: function(e) {
    this.setState({cp: e.target.value}) 
  },

  handleSubmit: function(e) {
    e.preventDefault()
    if(this.state.cp == '' || this.state.level == '') {
      alert('Invalid CP or Level')
      return false
    } else {
      $(e.target).submit()
    }
  }, 

  render: function() {
    var player = this.props.player
    return (
      <div 
        className="modal fade" 
        id={`updateLevelPlayerId--${this.props.player.id}`} 
        tabIndex="-1" 
        role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Update CP/Level for <strong>{player.in_game_name}</strong>
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.handleSubmit} action={`/players/${player.id}`} method='POST'>
              <div className="modal-body">
                <input type='hidden' name='_method' value='put' />
                <input 
                  type='hidden' 
                  name='authenticity_token' 
                  value={this.props.authenticity_token} />
                <div className='form-group'>
                  <label>Update Level</label>
                  <input 
                    value={this.state.level} 
                    onChange={this.handleLevelChange}
                    type='number' 
                    min='1'
                    name='player[current_level]' 
                    className='form-control' />
                </div>
                <div className='form-group'>
                  <label>Update CP</label>
                  <input 
                    value={this.state.cp} 
                    onChange={this.handleCpChange}
                    min='1'
                    type='number' 
                    name='player[current_cp]' 
                    className='form-control' />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    ) 
  }
})
