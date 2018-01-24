var PlayerRow = createReactClass({
  render: function() {
    return(<tr>
      <td className='table-players__text'>
        {this.props.player.in_game_name}
      </td>
      <td className='table-players__text'>
        --
      </td>
      <td className='table-players__text'>
        {this.props.player.total_points}  
      </td>
      <td>
        <a href='#' className='btn btn-success' data-toggle='modal' data-target={`#playerId--${this.props.player.id}`}>
          <i className='fa fa-plus'></i> Add points
        </a>
        <a href='#' className='btn btn-danger'>
          <i className='fa fa-plus'></i> Remove player
        </a>
      </td>
    </tr>)
  }
})
