var PlayerList = createReactClass({
  render: function() {
    var authenticityToken = this.props.authenticity_token
    var crudAuthority     = this.props.crud_authority

    return(<div className='players-component'>
      <div className='alert alert-dismissible alert-secondary'>
        <h4>Heads Up!</h4>
        <strong className='text-muted'>Gray</strong> highlighted row means the player did not reach the RSS quota for the week.
      </div>
      <h1>Players</h1>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th></th>
              <th>Rank</th>
              <th>IGN</th>
              <th>Class</th>
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
