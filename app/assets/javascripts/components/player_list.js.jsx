var PlayerList = createReactClass({
  renderClassComposition: function() {
    var playersJobs = this.props.players_job_count  
    console.log(playersJobs)
    return playersJobs.map(function(job, index) {
      return(
        <div className='col-xs-12 col-sm-3'>
          {job[0]} - {job[1]}
        </div>
      ) 
    })
  },

  render: function() {
    var authenticityToken = this.props.authenticity_token
    var crudAuthority     = this.props.crud_authority

    return(<div className='players-component'>
      <div className='alert alert-dismissible alert-primary'>
        <h4>Heads Up!</h4>
        <strong className='text-danger'>Red</strong> highlighted row means the player did not reach the RSS quota for the week.
      </div>
      <div className='alert alert-info'>
        <h4>Clan Class Composition</h4> 
        <div className='row'>{this.renderClassComposition()}</div>
      </div>
      <h1>Players</h1>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th></th>
              <th>Rank</th>
              <th>IGN</th>
              <th>Weekly Adena</th>
              <th>Weekly POB</th>
              <th>Weekly RSS</th>
              <th>Weekly Clan Quests</th>
              <th>Weekly Points</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.players.map(function(player, i){
              return (
                <PlayerRow player={player} key={i} rank={i+1} crud_authority={crudAuthority} />
              )
            })} 
          </tbody>
        </table>
      </div>
      {this.props.players.map(function(player, i){
        return (
          <PlayerAddPointModal authenticity_token={authenticityToken} player={player} key={i} />
        )
      })} 
    </div>)
  }
})
