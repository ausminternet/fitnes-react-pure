import React from 'react'
import Loader from 'components/Loader'
import LogListEntry from 'components/LogListEntry'
import ListEntry from 'components/ListEntry'
import ListHeader from 'components/ListHeader'
import Message from 'components/Message'

const LogList = ({loading, logs}) => {
  if (loading) return <Loader />

  let month
  let list = []
  logs.map((l, i) => {
    let date = new Date(l.startedAt)
    let logMonth = date.getDate() + 1
    let year = date.getFullYear()
    if (month !== logMonth) {
      let locale = 'de-de'
      let monthName = date.toLocaleString(locale, { month: 'long' })
      list.push(
        <ListHeader key={logMonth + year}>{monthName} {year}</ListHeader>
      )
    }
    month = logMonth
    list.push(
      <ListEntry key={i} >
        <LogListEntry log={l}/>
      </ListEntry>
    )
  })

  return (
    <div className="log-list">
      {logs.length === 0 &&
        <Message>
          <p>No Logs available.</p>
          <p><strong>Go and do your first workout!</strong></p>
        </Message>
      }
      {logs.length !== 0 && list}
    </div>
  )
}

export default LogList
