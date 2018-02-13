var PageDonationList = createReactClass({
  render: function() {
    return(<div className='page-donation-list'>
      <h1>MS Page Donations</h1>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Player</th> 
              <th>MS Page Count</th>
              <th>MS LVL</th>
              <th>Last Given On</th>
              <th>Actions</th>
            </tr>
          </thead> 
          <tbody>
            {this.props.page_donations.map(function(pg, i){
              return <PageDonationRow key={i} update_policy={this.props.update_policy} page_donation={pg} /> 
            }.bind(this))}
          </tbody>
        </table>
      </div>
      {this.props.page_donations.map(function(pg, i){
        return <GivePageModal key={i} page_donation={pg} authenticity_token={this.props.authenticity_token} /> 
      }.bind(this))}
    </div>)
  }
})
