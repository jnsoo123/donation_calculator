var PageDonationList = createReactClass({
  render: function() {
    return(<div className='page-donation-list'>
      <h1>MS Page Donations</h1>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Player</th> 
            <th>MS Page Count</th>
            <th>MS LVL</th>
            <th>Last Given On</th>
            <th></th>
          </tr>
        </thead> 
        <tbody>
          {this.props.page_donations.map(function(pg, i){
            return <PageDonationRow key={i} page_donation={pg} /> 
          })}
        </tbody>
      </table>
      {this.props.page_donations.map(function(pg, i){
        return <GivePageModal key={i} page_donation={pg} authenticity_token={this.props.authenticity_token} /> 
      }.bind(this))}
    </div>)
  }
})