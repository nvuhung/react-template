import React from 'react';
import { translate } from '../i18n';

export const Header = ({ logout, email }) => {
  return (
    <div className="all-center">
      <span>{translate('hello', { email })}</span>
      <button
        type="button"
        className="btn btn-primary mx-4"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
};
