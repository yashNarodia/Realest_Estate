import React from 'react'
import  ProTypes from 'prop-types'

const Pagination = (props) => {
  const getNumbers= () =>{
    let numbers =[]
    let itemsPerPage = props.itemsPerPage
    let pageNumber = 1

    for( let i = 0 ; i< props.count; i+=itemsPerPage){
      const page = pageNumber;
      let style = 'pagination__number'
      let content = null

      if(props.active === page){
        style = 'pagination__number pagination__number--active';
        content = (
          <div key ={i} className={style} >
            {pageNumber}
          </div>
        )
      }
      else{
        content = (
          <div key ={i} onClick={() => props.visitPage(page)} className={style} >
            {pageNumber}
          </div>
        )
      }
      numbers.push(content)
      pageNumber++
    }
    return numbers
  }
  return (
    <div className='pagination'>
      <div className='pagination__number' onClick={props.previous() }>
        Previous
      </div>
      {getNumbers()}
      <div className='pagination__number' onClick={props.next()}>
        Next
      </div>

    </div>
  )
}

Pagination.propTypes = {
  itemsPerPage: ProTypes.number.isRequired,
  count: ProTypes.number.isRequired,
  active: ProTypes.number.isRequired,
  visitPage: ProTypes.func.isRequired,
  previous: ProTypes.func.isRequired,
  next: ProTypes.func.isRequired,

}

export default Pagination