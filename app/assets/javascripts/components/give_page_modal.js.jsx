var GivePageModal = createReactClass({
  getInitialState: function() {
    return {
      level: this.props.page_donation.level,
      count: this.props.page_donation.count
    } 
  },

  handleLevelChange: function(e) {
    e.preventDefault()
    this.setState({level: e.target.value})
  },

  handleCountChange: function(e) {
    e.preventDefault()
    this.setState({count: e.target.value})
  },

  render: function() {
    var pageId = this.props.page_donation.id
    var player = this.props.page_donation.player.in_game_name
    var pageCount = this.props.page_donation.count
    var pageLevel = this.props.page_donation.level

    return(<div className='give-page-modal'>
      <div className="modal fade" id={`pageDonationId--${pageId}`}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1>
                Give MS Page to <strong>{player}</strong>
              </h1>
            </div>
            <form action={`/page_donations/${pageId}`} method='POST'>
              <div className="modal-body">
                <p>Current Page Count: {pageCount}</p> 
                <p>Current MS LVL: {pageLevel}</p> 
                <div className='form-group'>
                  <label>How Many?</label> 
                  <input 
                    name='count'
                    type='number' 
                    min='1'
                    step='1'
                    max='100'
                    required
                    className='form-control' />
                </div>
              </div>
              <div className="modal-footer">
                <input type='hidden' name='_method' value='put' />
                <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
                <button 
                  type="submit" 
                  className="btn btn-primary">
                  Give Page
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id={`pageDonationUpdateId--${pageId}`}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1>
                Update MS Page/LVL to <strong>{player}</strong>
              </h1>
            </div>
            <form action={`/page_donations/${pageId}`} method='POST'>
              <div className="modal-body">
                <div className='form-group'>
                  <label>MS Page</label> 
                  <input 
                    name='update_count'
                    type='number' 
                    min='0'
                    step='1'
                    max='9'
                    value={this.state.count}
                    onChange={this.handleCountChange}
                    required
                    className='form-control' />
                </div>
                <div className='form-group'>
                  <label>MS LVL</label> 
                  <input 
                    name='update_level'
                    type='number' 
                    min='0'
                    step='1'
                    max='10'
                    value={this.state.level}
                    onChange={this.handleLevelChange}
                    required
                    className='form-control' />
                </div>
              </div>
              <div className="modal-footer">
                <input type='hidden' name='_method' value='put' />
                <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
                <button 
                  type="submit" 
                  className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>) 
  }
})
