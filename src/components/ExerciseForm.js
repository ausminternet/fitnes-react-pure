import React from 'react'

import Input from 'components/Input'

const ExcersiceForm = ({
  onSubmit,
  errorMessage,
  isValid,
  onChange,
  name,
  repeatsMax,
  repeatsSetMin,
  repeatsSetMax
}) => {
  return (
    <form onSubmit={onSubmit}>
      {!isValid &&
          <div>{errorMessage}</div>
      }
      <Input
        onChange={onChange}
        name="name"
        label="name"
        value={name}
      />
      <Input
        onChange={onChange}
        name="repeatsSetMin"
        label="min repeats per set"
        type="number"
        value={repeatsSetMin}
      />
      <Input
        onChange={onChange}
        name="repeatsSetMax"
        label="max repeats per set"
        type="number"
        value={repeatsSetMax}
      />
      <Input
        onChange={onChange}
        name="repeatsMax"
        label="max repeats per workout"
        type="number"
        value={repeatsMax}
      />
      <button type="submit" disabled={!isValid}>
          Submit
      </button>
    </form>
  )
}

export default ExcersiceForm
