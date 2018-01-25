var PlayerRow = createReactClass({
  render: function() {
    return(<tr>
      <td className='table-info__text'>
        {this.props.rank}
      </td>
      <td className='table-info__text'>
        <a href={`players/${this.props.player.id}`}>
          {this.props.player.in_game_name}
        </a>
      </td>
      <td className='table-info__text'>
        {this.props.player.weekly_accumulation.adena}
      </td>
      <td className='table-info__text'>
        {this.props.player.weekly_accumulation.pob}  
      </td>
      <td className='table-info__text'>
        {this.props.player.weekly_accumulation.rss}  
      </td>
      <td className='table-info__text'>
        {this.props.player.weekly_points}  
      </td>
      <td>
        <a href='#' className='btn btn-success btn-sm' data-toggle='modal' data-target={`#playerId--${this.props.player.id}`}>
          <i className='fa fa-plus'></i> Points
        </a>
        <a href={`players/${this.props.player.id}`} data-confirm={`Are you sure you want to remove ${this.props.player.in_game_name}?`} data-method='delete' className='btn btn-danger btn-sm'>
          <i className='fa fa-trash'></i> Delete
        </a>
      </td>
    </tr>)
  }
})
