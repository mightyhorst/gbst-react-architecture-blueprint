import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { usePrevious } from '../../../../utils/Hooks';

import Button from '../Button';
import LoadingSpinner from '../../display/LoadingSpinner';

const BaseLoadingButton = props => {
  const [showingLoader, setShowingLoader] = useState(false);

  const {
    alwaysPreventActionWhenLoading,
    children,
    className,
    disabled,
    loading,
    onClick,
    showLoaderAfterSeconds,
    innerRef,
    icon,
    ...otherProps
  } = props;

  const previousLoading = usePrevious(loading);

  // Setup the timer which initiates loading after a specific amount of time.
  useEffect(() => {
    let timer = null;

    if (loading !== previousLoading) {
      if (loading) {
        timer = setTimeout(() => {
          setShowingLoader(true);
        }, showLoaderAfterSeconds * 1000);
      }
    }

    return function cleanup() {
      clearTimeout(timer);
    };
  }, [loading, previousLoading, showLoaderAfterSeconds]);

  // If no longer loading, hide the loader.
  useEffect(() => {
    if (!loading && showingLoader) {
      setShowingLoader(false);
    }
  }, [loading, showingLoader]);

  // Only allow the action to be executed if not loading
  const action = loading && alwaysPreventActionWhenLoading ? () => {} : onClick;

  // Show the button as disabled whenever the loader is shown
  const currentlyDisabled = showingLoader ? true : disabled;

  return (
    <Button
      ref={innerRef}
      className={classNames('LoadingButton', className)}
      data-component-name="LoadingButton"
      disabled={currentlyDisabled}
      onClick={action}
      icon={showingLoader ? undefined : icon}
      {...otherProps}
    >
      {showingLoader ? (
        <>
          <LoadingSpinner />
          {children}
        </>
      ) : (
        children
      )}
    </Button>
  );
};

BaseLoadingButton.propTypes = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  ...Button.propTypes,

  /** Whether or not the button should be in a loading state. */
  loading: PropTypes.bool.isRequired,

  /** Whether or not the button should immediately block any click events, or
   *  if it should wait until the loader is shown. The click event will always
   *  be blocked when the loader is visible. */
  alwaysPreventActionWhenLoading: PropTypes.bool,

  /** The delay before the loading state of the button is shown. There should
   *  be a slight delay so as to avoid an unecessary flash when an event is
   *  executed almost immediately. Should be adjusted as relevant to the event
   *  occuring. */
  showLoaderAfterSeconds: PropTypes.number,
};

BaseLoadingButton.defaultProps = {
  ...Button.defaultProps,
  alwaysPreventActionWhenLoading: true,
  showLoaderAfterSeconds: 0.5,
};

const LoadingButton = React.forwardRef((props, ref) => (
  <BaseLoadingButton innerRef={ref} {...props} />
));

export default LoadingButton;
