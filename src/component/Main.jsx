import React from 'react'

const Main = ({item}) => { 
  const {name,title,price,url,category}=item
  return (
    <div className='container'> 
      <div className='esra'>
        <img src={url} alt="" />
      </div>
      <div className='incontainerRight'>
        <div className='top'>
          <p>{name}</p>
          <p className='price'>{price}$</p>
        </div>
        <div className='bottom'>
          <p className='ctg'>{category}</p>
          <p className='tit'>{title}</p>
        </div>

      </div>

    </div>
  )
    }

export default Main