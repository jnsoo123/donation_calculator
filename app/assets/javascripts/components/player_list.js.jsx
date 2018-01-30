var PlayerList = createReactClass({
  render: function() {
    var authenticityToken = this.props.authenticity_token
    var crudAuthority     = this.props.crud_authority

    return(<div className='players-component'>
      <h1>Players</h1>
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
              <PlayerRow player={player} key={i} rank={i+1} crud_authority={crudAuthority} />
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
