var PageDonationRow = createReactClass({
  dateFormat: function() {
    var date  = new Date(this.props.page_donation.updated_at) 
    var month = date.getMonth() + 1
    var day   = date.getDate()
    var year  = date.getFullYear()
    var hours = date.getHours()
    var mins  = date.getMinutes()

    if (mins.toString().length == 1) {
      mins = `0${mins.toString()}`
    }

    return `${month}/${day}/${year} ${hours}:${mins}`
  },

  renderUpdateButton: function() {
    if(this.props.update_policy) {
      var pageId = this.props.page_donation.id
      return(<div>
        <button 
          data-toggle='modal' 
          data-target={`#pageDonationId--${pageId}`} 
          className='btn btn-success btn-sm'>
          <i className='fa fa-plus'></i> Give
        </button>
        <button 
          data-toggle='modal'
          data-target={`#pageDonationUpdateId--${pageId}`}
          className='btn btn-primary btn-sm'>
          <i className='fa fa-pencil'></i> Update MS Page/LVL
        </button>
      </div>)
    } else {
      return(
        <span>Not Authorized</span>
      )
    }
  },

  render: function() {
    var date = new Date(this.props.page_donation.updated_at)
    var pageId = this.props.page_donation.id
    return(<tr>
      <td>{this.props.page_donation.player.in_game_name}</td> 
      <td>{this.props.page_donation.count}</td> 
      <td>{this.props.page_donation.level}</td> 
      <td>{this.dateFormat()}</td> 
      <td>
        {this.renderUpdateButton()}
      </td>
    </tr>) 
  }
})
