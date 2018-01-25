var PlayerList = createReactClass({
  render: function() {
    var authenticityToken = this.props.authenticity_token

    return(<div className='players-component'>
      <h3 className='page-header'>Players</h3>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>IGN</th>
            <th>Weekly Adena</th>
            <th>Weekly POB</th>
            <th>Weekly RSS</th>
            <th>Weekly Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.players.map(function(player, i){
            return (
              <PlayerRow player={player} key={i} rank={i+1} />
            )
          })} 
        </tbody>
      </table>
      {this.props.players.map(function(player, i){
        return (
          <PlayerAddPointModal authenticity_token={authenticityToken} player={player} key={i} />
        )
      })} 
    </div>)
  }
})
