import React from 'react'

export default function AuthForm({
  loginMessage,
  errorMessage,
  onSubmit,
  onInputChange,
  onPasswordReset,
  loading,
  buttonText,
  buttonLoadingText,
  showName,
  showResetPassword
}) {
  return (
    <form
      className="LoginForm"
      onSubmit={onSubmit}
    >
      {(errorMessage || loginMessage) &&
        <div className="MessageContainer">
          {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
          {loginMessage && <p className="LoginMessage">{loginMessage}</p>}
        </div>
      }
      {showName &&
        <input
          className="LoginName"
          name="name"
          type="text"
          placeholder="Name"
          required
          autoComplete="off"
          onChange={onInputChange}
          disabled={loading}
        />
      }
      {showName && <hr className="Divider" />}
      <input
        className="LoginEmail"
        name="email"
        type="email"
        placeholder="Email"
        required
        autoComplete="off"
        onChange={onInputChange}
        disabled={loading}
      />
      <hr className="Divider" />
      <input
        className="LoginPassword"
        name="password"
        type="password"
        required
        autoComplete="off"
        placeholder="Password"
        onChange={onInputChange}
        disabled={loading}
      />
      <button
        className="LoginButton"
        type="submit"
        disabled={loading}
      >
        {loading ? buttonLoadingText : buttonText}
      </button>
      {showResetPassword &&
        <button
          className="ResetPasswordButton"
          onClick={onPasswordReset}
          disabled={loading}
        >
          Forgot Password?
        </button>
      }
    </form>
  )
}
