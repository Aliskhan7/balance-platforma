import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Pages (props) {
  const dispatch = useDispatch();
  const pages = useSelector(state => state.pages.pages);

  console.log(pages)

  const id = parseInt(useParams().id);

  const filteredPages = pages
    .filter(page => page.userId === id)


  return (
    <div>
      {
        filteredPages.map(items =>{
          return <p>dsdsd</p>
        })
      }
    </div>
  )
}

export default Pages