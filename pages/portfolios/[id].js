import {useRouter} from 'next/router'
import React from 'react'

const PortfolioDetail = ({query}) => {
  const {id} = query;
  return (
    <h1>I am Detailed Info of  {id}</h1>
  )
}

PortfolioDetail.getInitialProps =({query}) =>{
  return {query}
}

// class PortfolioDetail extends React.Component  {

//   static getInitialProps({query}) {
//     return {query, test: 'hello world'}
//   }

//   render() {
//     const id = this.props.query.id;
//     return (
//     <h1>Detailed Info of userid : {id} {this.props.test}</h1>
//     )
//   }
// }

export default PortfolioDetail
