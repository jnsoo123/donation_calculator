var PlayerRow = createReactClass({
  renderActions: function() {
    console.log(this.props.crud_authority)
    if (this.props.crud_authority) {
      return(
        <td className='btn-group'>
          <a 
            href='#' 
            className='btn btn-success btn-sm' 
            data-toggle='modal' 
            data-target={`#playerId--${this.props.player.id}`}>
            <i className='fa fa-plus'></i> Points
          </a>
          <a 
            href={`players/${this.props.player.id}`} 
            data-confirm={`Are you sure you want to remove ${this.props.player.in_game_name}?`} 
            data-method='delete' 
            className='btn btn-danger btn-sm'>
            <i className='fa fa-trash'></i> Delete
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
    return(<tr className={isBelowQuota ? 'table-danger' : ''}>
      <td style={{color: '#FFD700'}}>
        {isTopTen ? <i className='fa fa-trophy'></i> : ''}
      </td>
      <td className='table-info__text'>
        {this.props.rank}
      </td>
      <td className='table-info__text'>
        <a href={`players/${this.props.player.id}`}>
          <strong>{this.props.player.in_game_name}</strong> ({this.props.player.humanize_job})
        </a>
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
