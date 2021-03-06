var PlayerRow = createReactClass({
  renderActions: function() {
    if (this.props.crud_authority) {
      var player = this.props.player
      return(
        <td className='btn-group'>
          <a href={`players/${player.id}`}
            className='btn btn-info btn-sm'>
            <i className='fa fa-eye'></i>
          </a>
          <a href='#'
            data-toggle='modal'
            data-target={`#updateLevelPlayerId--${player.id}`}
            className='btn btn-warning btn-sm'>
            <i className='fa fa-pencil'></i>
          </a>
          <a 
            href='#' 
            className='btn btn-success btn-sm' 
            data-toggle='modal' 
            data-target={`#playerId--${player.id}`}>
            <i className='fa fa-plus'></i>
          </a>
          <a 
            href={`players/${player.id}`} 
            data-confirm={`Are you sure you want to remove ${this.props.player.in_game_name}?`} 
            data-method='delete' 
            className='btn btn-danger btn-sm'>
            <i className='fa fa-trash'></i>
          </a>
        </td>
      ) 
    } else {
      return (
        <td>Not Authorized</td>
      )
    }
  },
  render: function() {
    var isTopTen = this.props.rank <= 10
    var isBelowQuota = this.props.player.weekly_accumulation.rss < 2100
    return(<tr className={isBelowQuota ? 'table-active' : ''}>
      <td style={{color: '#FFD700'}}>
        {isTopTen ? <i className='fa fa-trophy'></i> : ''}
      </td>
      <td className='table-info__text'>
        {this.props.rank}
      </td>
      <td className='table-info__text'>
        {this.props.player.in_game_name}
      </td>
      <td 
        className='table-info__text' 
        dangerouslySetInnerHTML={{__html: this.props.player.level_diff}}>
      </td>
      <td 
        className='table-info__text' 
        dangerouslySetInnerHTML={{__html: this.props.player.cp_diff}}>
      </td>
      <td className='table-info__text'>
        {this.props.player.weekly_accumulation.adena}
      </td>
      <td className='table-info__text'>
        {this.props.player.weekly_accumulation.pob}  
      </td>
      <td className='table-info__text'>
        <span className={isBelowQuota ? 'text-danger' : ''}>
          {this.props.player.weekly_accumulation.rss}  
        </span>
      </td>
      <td className='table-info__text'>
        {this.props.player.weekly_accumulation.quest} 
      </td>
      <td className='table-info__text'>
        {this.props.player.weekly_points}  
      </td>
      {this.renderActions()}
    </tr>)
  }
})
