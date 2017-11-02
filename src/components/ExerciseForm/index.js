import React from 'react'

import SimpleInput from 'components/SimpleInput'
import PrimaryButton from 'components/PrimaryButton'
import SecondaryButton from 'components/SecondaryButton'

import './styles.css'

const ExcersiceForm = ({
  loading,
  onSubmit,
  errorMessage,
  isValid,
  onChange,
  onCancel,
  name,
  repeatsMax,
  repeatsSetMin,
  repeatsSetMax
}) => {
  const className = [
    'exercise-form',
    loading ? 'is-loading' : null
  ].join(' ')
  return (
    <form onSubmit={onSubmit} className={className} disabled={loading}>

      <SimpleInput
        onChange={onChange}
        name="name"
        label="name"
        value={name}
        className="exercise-form__name"
      />
      <div className="exercise-form__repeats-container">
        <div className="exercise-form__repeats">
          <SimpleInput
            onChange={onChange}
            name="repeatsSetMin"
            type="text"
            pattern="\d*"
            value={repeatsSetMin}
            className="exercise-form__repeats-value"
          />
          <div className="exercise-form__repeats-key">
            minimum repeats<br />per set
          </div>
        </div>
        <div className="exercise-form__repeats">
          <SimpleInput
            onChange={onChange}
            name="repeatsSetMax"
            type="text"
            pattern="\d*"
            value={repeatsSetMax}
            className="exercise-form__repeats-value"
          />
          <div className="exercise-form__repeats-key">
            maximum repeats<br />per set
          </div>
        </div>
        <div className="exercise-form__repeats">
          <SimpleInput
            onChange={onChange}
            name="repeatsMax"
            type="text"
            pattern="\d*"
            value={repeatsMax}
            className="exercise-form__repeats-value"
          />
          <div className="exercise-form__repeats-key">
            maximum repeats<br />per workout
          </div>
        </div>
      </div>
      {errorMessage &&
        <div className="exercise-form__error">{errorMessage}</div>
      }
      <div className="exercise-form__buttons" onTouchStart="">
        <PrimaryButton>
          <button className="exercise-form__submit" type="submit" disabled={!isValid}>
            {loading ? 'Saving...' : 'Save'}
          </button>
        </PrimaryButton>
        <SecondaryButton>
          <button className="exercise-form__cancel" type="button" onClick={onCancel}>Cancel</button>
        </SecondaryButton>
      </div>
    </form>
  )
}

export default ExcersiceForm
