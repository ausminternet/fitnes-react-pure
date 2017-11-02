import React from 'react'

import SimpleInput from 'components/SimpleInput'
import PrimaryButton from 'components/PrimaryButton'
import SecondaryButton from 'components/SecondaryButton'

import './styles.css'

const ExcersiceForm = ({
  saving,
  onSubmit,
  errorMessage,
  isValid,
  onChange,
  onCancel,
  name,
  repeatsMax,
  repeatsSetMin,
  repeatsSetMax,
  className,
  isEdit
}) => {
  const newClassName = [
    className,
    'exercise-form',
    saving ? 'is-saving' : null
  ].join(' ')
  return (
    <form onSubmit={onSubmit} className={newClassName} autoComplete="false">

      <SimpleInput
        autoFocus
        onChange={onChange}
        name="name"
        value={name}
        placeholder="Exercise"
        className="exercise-form__name"
        disabled={saving}
        type="text"
      />
      <div className="exercise-form__repeats-container">
        <div className="exercise-form__repeats">
          <SimpleInput
            onChange={onChange}
            name="repeatsSetMin"
            type="text"
            pattern="\d*"
            placeholder="10"
            value={repeatsSetMin}
            className="exercise-form__repeats-value"
            disabled={saving}
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
            placeholder="20"
            value={repeatsSetMax}
            className="exercise-form__repeats-value"
            disabled={saving}
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
            placeholder="30"
            value={repeatsMax}
            className="exercise-form__repeats-value"
            disabled={saving}
          />
          <div className="exercise-form__repeats-key">
            maximum repeats<br />per workout
          </div>
        </div>
      </div>
      {errorMessage &&
        <div className="exercise-form__error">{errorMessage}</div>
      }
      <div className="exercise-form__buttons" onTouchStart={() => true}>
        <PrimaryButton>
          <button className="exercise-form__submit" type="submit" disabled={!isValid || saving}>
            {saving ? 'Saving...' : 'Save'}
          </button>
        </PrimaryButton>
        {isEdit &&
          <SecondaryButton>
            <button className="exercise-form__cancel" type="button" onClick={onCancel} disabled={saving}>Cancel</button>
          </SecondaryButton>
        }
      </div>
    </form>
  )
}

export default ExcersiceForm
