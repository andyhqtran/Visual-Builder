/**
 * Internal dependencies
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';

/**
 * Internal dependencies
 */
import './style.scss';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import FormGroup from '../FormGroup';
import Menu from '../Menu';
import RangeSlider from '../RangeSlider';

/**
 * <ResponsiveMenu />
 */
class ResponsiveMenu extends Component {
  render() {
    const classes = classNames({
      'responsive-menu': true,
      'responsive-menu--active': this.props.status,
    }, this.props.className);

    return (
      <div className={classes}>
        <Button
          onClick={() => this.props.toggleMenu(!this.props.status)}
        >
          <i className="ion ion-crop" />
        </Button>
        <Menu
          status={this.props.status}
        >
          <dl className="menu__group">
            <dt className="menu__title">Responsive Settings</dt>
            <dd className="menu__group-content">
              <FormGroup>
                <Button
                  onClick={() => (
                    this.props.contentSize > 1 ? this.props.increaseContentSize() : noop
                  )}
                >
                  +
                </Button>
                <RangeSlider
                  max={4}
                  min={1}
                  step={1}
                  value={this.props.contentSize}
                  onChange={this.props.changeContentSize}
                />
                <Button
                  onClick={() => (
                    this.props.contentSize < 4 ? this.props.decreaseContentSize() : noop
                  )}
                >
                  -
                </Button>
              </FormGroup>
            </dd>
          </dl>
          <dl className="menu__group">
            <dd className="menu__group-content">
              <ButtonGroup
                block
                style={{
                  justifyContent: 'center',
                }}
              >
                <Button><span className="ion ion-monitor" /></Button>
                <Button><span className="ion ion-ipad" /></Button>
                <Button><span className="ion ion-iphone" /></Button>
              </ButtonGroup>
            </dd>
          </dl>
        </Menu>
      </div>
    );
  }
}

ResponsiveMenu.defaultProps = {
  className: undefined,
  status: false,
};

ResponsiveMenu.propTypes = {
  className: PropTypes.string,
  status: PropTypes.bool,
};

export default ResponsiveMenu;
